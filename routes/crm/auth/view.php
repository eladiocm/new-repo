<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

Route::get('/auth/monitorizar', [HomeController::class, 'index'])->name('pageAuth');
Route::get('/auth/monitorizar/create', [HomeController::class, 'index'])->name('pageAuth');

