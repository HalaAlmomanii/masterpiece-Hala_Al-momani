<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{ 
    protected $guarded = [];
    public function event() {
        return $this->belongsTo('App\Event');
    }

    public function user() {
        return $this->belongsTo('App\User');
    }

    public $timestamps = false;
}
