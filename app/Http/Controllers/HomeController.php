<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    public function __invoke(Request $request)
    {
        // $firebase = config('web.firebase');
        try
        {
            if (Auth::check()) {
                return redirect('dashboard');
            } else {
                return view('guest.pages.login.index');
                // return view('guest.pages.login.index', compact('firebase'));
            }
        }catch (Exception $e) {
            abort($e->getCode());
        }
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $firebase = config('web.firebase');
        return view('guest.pages.login.index');
        // return view('guest.pages.login.index', compact('firebase'));
    }
}
