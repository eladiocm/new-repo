<?php

namespace App\Http\Controllers;


use App\Interfaces\ModelStatus;
use Illuminate\Support\Facades\Auth;
use App\Traits\Utilities\ApiResponse;
use App\Interfaces\HttpCodeInterface;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController implements HttpCodeInterface, ModelStatus
{
    //comentario para pruba
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests, ApiResponse;
}
