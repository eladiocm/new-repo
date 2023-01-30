<?php


use Illuminate\Contracts\Filesystem\FileNotFoundException;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Session\SessionManager;
use Illuminate\Session\Store;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Storage;

if(! function_exists('getPassportToken')) {


    /**
     * @return array|Application|SessionManager|Store|mixed
     * @throws FileNotFoundException
     * @throws Exception
     */
    function getPassportToken()
    {
        if(Auth::check()) {
            $token = session(env('ACCESS_TOKEN'));

        }else{
            if(!Storage::disk('passport')->exists('tokens/guest.json')) {
                // dd("hi");
                $request = Request::create('','POST',config('web.passport.client'));
                $response = Http::asForm()->post(config('web.api_passport').'oauth/token',$request->all());

                // dd($response);
                if ($response->failed()) {
                    throw new \Exception($response->json()['error'], $response->json()['message']);
                }
                $response = $response->json();
                $token = array('access_token' => $response['access_token']);
                Storage::disk('passport')->put('tokens/guest.json',json_encode($token));
            } else {
                $token = json_decode(Storage::disk('passport')->get('tokens/guest.json'), true);
                $token = $token['access_token'];
            }
        }
        return $token;
    }

}


