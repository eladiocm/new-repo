<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware('route.mapping')->group(function () {

	Route::get('/', \App\Http\Controllers\HomeController::class)->name('home');

	require (__DIR__ . '/crm/guest.php');
	require (__DIR__ . '/crm/auth.php');
});