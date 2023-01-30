<?php

namespace App\Http\Controllers\Guest;

use Exception;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Session;
use Illuminate\Contracts\Auth\StatefulGuard;
use Illuminate\Support\Str;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        // $idFCM =  session()->get('ID_FCM');
        // if (!empty($idFCM))
        // {
        //     $request->request->add([
        //         'imei' => session()->get('ID_FCM')
        //     ]);
        // }
        // $request->request->add([
        //     'device' => 'web'
        // ]);

        try{
            $token = getPassportToken();
            $response = Http::asForm()->withToken(getPassportToken())->post( env('API_URL') . 'guest/login',$request->all());

            if ($response->failed()) {
                return $this->errorResponse($response->json()['error'], $response->json()['status']);
            }
            // dd('OUT',$response->json());
            if(!$this->attemptLogin($request)) {
                throw new Exception("Credenciales incorrectas.",self::UNAUTHORIZED);
            }

            // dd($idFCM, !empty($idFCM), $request->all(), $response->json());
            // dd('ESTADO3');
            $response = $response->json();
            session()->put(env('ACCESS_TOKEN'),$response['data']['token']['access_token']);

            return $response;

        }catch(Exception $e){
            return $this->errorResponse($e->getMessage(), $e->getCode());
        }
    }

    protected function attemptLogin(Request $request)
    {
        return $this->guard()->attempt(
            $this->credentials($request), $request->filled('remember')
        );
    }

    protected function credentials(Request $request)
    {
        $field = filter_var($request->get($this->email()), FILTER_VALIDATE_EMAIL)
            ? $this->email()
            : 'email';
        return [
            $field => $request->get($this->email()),
            'password' => $request->input('password'),
        ];
    }

    protected function email()
    {
        return 'email';
    }

    protected function guard()
    {
        return Auth::guard();
    }

    public function logout(Request $request)
    {
        try {
            Auth::logout();
            Session::flush();
        } catch (Exception $e) {
            return $this->errorResponse($e->getMessage(), $e->getCode());
        }
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function authCheck()
    {
        return Auth::check();
    }

    public function device(Request $request)
    {
        // $imei = (string) Str::uuid();
        // session()->put('ID_FCM', $imei);
        // $request->request->add([
        //     'imei' => session()->get('ID_FCM'),
        //     'device' => 'web'
        // ]);

        //dd($request->all());
        $response = Http::asForm()->withToken(getPassportToken())->post(env('API_URL') . 'guest/device', $request->all());
        if ($response->failed()) {
            return $this->errorResponse($response->json()['error'], $response->json()['status']);
        }
        session()->put('ID_FCM', $response['data']['imei']);
        return $response->json();
    }

}
