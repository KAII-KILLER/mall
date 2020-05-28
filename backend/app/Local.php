<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Local extends Model
{
    public function promociones()
    {
        return $this->hasMany('App\Promociones');
    }
}
