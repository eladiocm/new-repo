<?php
namespace App\Traits\Utilities;
trait HttpGeneral
{
    public function httpBuildQueryForCurl($arrays, &$new = array(), $prefix = null )
    {
        if(is_object( $arrays )) {
            $arrays = get_object_vars( $arrays );
        }
        foreach($arrays AS $key => $value) {
            $k = isset($prefix) ? $prefix . '[' . $key . ']' : $key;
            if (is_array($value) OR is_object($value)) {
                $this->httpBuildQueryForCurl($value, $new, $k);
            } else {
                $new[$k] = $value;
            }
        }
    }
}
