<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

Route::get('/auth/legales', [HomeController::class, 'index'])->name('pageAuth');

