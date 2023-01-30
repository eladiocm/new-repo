<?php
return [
    'api' => env('API_URL'),
    'api_passport' => env('API_PASSPORT'),
    'passport' => [
        'client'=> [
            'grant_type' => 'client_credentials',
            'client_id' => env('API_CLIENT_ID'),
            'client_secret' => env('API_CLIENT_SECRET')
        ]
    ],
    'firebase' => [
        'apiKey' => env('API_KEY_FIREBASE'),
        'authDomain' => env('AUTH_DOMAIN'),
        'projectId' => env('PROJECT_ID_FIREBASE'),
        'storageBucket' => env('STORAGE_BUCKET'),
        'appId' => env('APP_ID_FIREBASE'),
        'senderId' => env('SENDER_ID'),
        'measurementId'=> env('MEASUREMENT_ID')
    ]
];
