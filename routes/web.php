<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/health-check', function () {
    return response()->json([
        'status' => 'ok',
        'timestamp' => now()->toISOString(),
    ]);
})->name('health-check');

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    
    Route::get('transactions', function () {
        return Inertia::render('transactions');
    })->name('transactions');
    
    Route::get('merchants', function () {
        return Inertia::render('merchants');
    })->name('merchants');
    
    Route::get('widgets', function () {
        return Inertia::render('widgets');
    })->name('widgets');
    
    Route::get('analytics', function () {
        return Inertia::render('analytics');
    })->name('analytics');
    
    Route::get('documentation', function () {
        return Inertia::render('documentation');
    })->name('documentation');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
