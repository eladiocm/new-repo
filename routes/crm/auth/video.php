<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

Route::get('/auth/videos', [HomeController::class, 'index'])->name('pageAuth');

