<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
   
    protected $guarded = [];
    public function company (){
        return $this->belongsTo('App\Writer','company_id');
    }

    public function category(){
        return $this->belongsTo('App\Category');
    }

    public function user(){
        return $this->belongsToMany('App\User');
    }
    public function reservation() {
        return $this->hasMany('App\Reservation');
    }
    public $timestamps = false;
}
