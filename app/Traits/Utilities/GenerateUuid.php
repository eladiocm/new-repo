<?php


namespace App\Traits\Utilities;


use Illuminate\Support\Str;

trait GenerateUuid
{
    protected static function boot()
    {
        parent::boot();
        static::creating(function ($model) {
            $model->keyType = 'string';
            $model->incrementing = false;
            $model->{$model->getKeyName()} = (string) Str::uuid();
        });
    }

    public function getIncrementing()
    {
        return false;
    }

    public function getKeyType()
    {
        return 'string';
    }
}
