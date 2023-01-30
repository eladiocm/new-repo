<?php

namespace App\Traits\Utilities;

use Exception;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Cache;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Validator;
use Illuminate\Pagination\LengthAwarePaginator;

trait ApiResponse
{

    public function validate_request_view($response = null)
    {
        if(empty($response) || !is_array($response) || empty($response['status'])) {
            abort(500);
        }
        else if($response['status'] != 200) {
            if($response['status'] == 401) {
                session()->flush();
                return redirect()->route('index');
            }
            abort(404);
        }
    }

    public function validate_request($response = null)
    {
        if(empty($response) || !is_array($response) || empty($response['status'])) {
            throw new Exception("Internal Server Error", 500);
        }
        if($response['status'] != 200) {
            throw new Exception(json_encode($response['error']),$response['status']);
        }
    }

    private function successResponseJson($data, $code)
    {
        return response()->json($data, $code);
    }

    public function errorResponse($message, $code)
    {
        $code = $this->valid_http_code($code);
        $message = $this->valid_http_message($message);
        return response()->json(['error' => $message, 'status' => $code], $code);
    }

    private function valid_http_code($code)
    {
        if(empty($code)) {
            $code = 500;
        }
        if($code < 100 ||  $code > 599) {
            $code = 500;
        }
        return $code;
    }

    private function valid_http_message($message)
    {
        return (empty($message)) ? 'Internal Server Error' : $message;
    }

    protected function showAll(Collection $collection, $code = 200)
    {
        if ($collection->isEmpty()) {
            return $this->successResponseJson(['data' => $collection], $code);
        }

        $transformer = $collection->first()->transformer;
        $collection = $this->filterData($collection, $transformer);
        $collection = $this->sortData($collection, $transformer);
        $collection = $this->paginate($collection);
        $collection = $this->transformData($collection, $transformer);
        $collection = $this->cacheResponse($collection);

        return $this->successResponseJson($collection, $code);
    }

    protected function showOne(Model $instance, $code = 200)
    {
        $transformer = $instance->transformer;
        $instance = $this->transformData($instance, $transformer);
        return $this->successResponseJson($instance, $code);
    }

    public function successResponse($message, $code = 200)
    {
        return $this->successResponseJson(['data' => $message, 'status' => $code], $code);
    }

    protected function filterData(Collection $collection, $transformer)
    {
        foreach (request()->query() as $query => $value) {
            $attribute = $transformer::originalAttribute($query);
            if (isset($attribute, $value)) {
                $collection = $collection->where($attribute, $value);
            }
        }
        return $collection;
    }

    protected function sortData(Collection $collection, $transformer)
    {
        if (request()->has('sort_by')) {
            $attribute = $transformer::originalAttribute(request()->sort_by);
            $collection = $collection->sortBy->{$attribute};
        }

        return $collection;
    }

    protected function paginate(Collection $collection)
    {
        $rules = [
            'per_page' => 'integer|min:2|max:50'
        ];
        Validator::validate(request()->all(), $rules);
        $page = LengthAwarePaginator::resolveCurrentPage();
        $perPage = 15;
        if(request()->has('per_page')) {
            $perPage = (int) request()->per_page;
        }
        $results = $collection->slice(($page - 1) * $perPage, $perPage)->values();
        $paginated = new LengthAwarePaginator($results, $collection->count(), $perPage, $page, [
            'path' => LengthAwarePaginator::resolveCurrentPath(),
        ]);
        $paginated->appends(request()->all());
        return $paginated;
    }

    protected function transformData($data, $transformer)
    {
        $transformation = fractal($data, new $transformer);
        return $transformation->toArray();
    }

    protected function cacheResponse($data)
    {
        $url = request()->url();
        $queryParams = request()->query();
        ksort($queryParams);
        $queryString = http_build_query($queryParams);
        $fullUrl = "{$url}?{$queryString}";
        return Cache::remember($fullUrl, 30/60, function() use($data) {
            return $data;
        });
    }
}
