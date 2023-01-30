<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Guest\LoginController;


Route::get('login', function () {
    return redirect()->to('/');
});

require (__DIR__ . '/guest/login.php');