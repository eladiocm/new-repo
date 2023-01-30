<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Guest\LoginController;

Route::post('login', [LoginController::class, 'login'])->name('login');