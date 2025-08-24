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

Route::get('/dashboard', function () {
    return Inertia::render('payment-gateway-dashboard', [
        'currentPage' => 'dashboard'
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/transactions', function () {
        return Inertia::render('payment-gateway-dashboard', [
            'currentPage' => 'transactions'
        ]);
    })->name('transactions');

    Route::get('/merchants', function () {
        return Inertia::render('payment-gateway-dashboard', [
            'currentPage' => 'merchants'
        ]);
    })->name('merchants');

    Route::get('/widgets', function () {
        return Inertia::render('payment-gateway-dashboard', [
            'currentPage' => 'widgets'
        ]);
    })->name('widgets');

    Route::get('/analytics', function () {
        return Inertia::render('payment-gateway-dashboard', [
            'currentPage' => 'analytics'
        ]);
    })->name('analytics');

    Route::get('/payment-settings', function () {
        return Inertia::render('payment-gateway-dashboard', [
            'currentPage' => 'settings'
        ]);
    })->name('payment-settings');

    Route::get('/documentation', function () {
        return Inertia::render('payment-gateway-dashboard', [
            'currentPage' => 'documentation'
        ]);
    })->name('documentation');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/user-dashboard', function () {
        return Inertia::render('dashboard');
    })->name('user-dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
