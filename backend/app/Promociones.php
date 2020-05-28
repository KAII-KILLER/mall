<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Promociones extends Model
{
    //
    public function local()
    {
        return $this->belongsTo('App\Local');
    }
}
