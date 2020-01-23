<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = [
        'type'
    ];
    public function event(){
        return $this->hasMany('App\Event');
    }
    public function user(){
        return $this->belongsToMany('App\User');
    }

} 

