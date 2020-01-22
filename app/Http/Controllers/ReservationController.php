<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Reservation;
use App\Event;
use App\User;
class ReservationController extends Controller
{ 
    public function book($id,$person)
    {

      
      $userid=Auth::id();
      $point=Event::where('id',$id)->value('price');
      Reservation::create (
        [
            'event_id' =>$id,
            'user_id'=>$userid
        ]
        );
        Reservation::with(['event' => function ($query)use ($person,$id) {
            $query->where('id','=',$id)->increment("numberofbooking",$person);}])->get();
            User::find($userid)->increment('point',$point);

    }
    public function reservation()
    {
      $userid=Auth::id();
     $event= Reservation::where('user_id',$userid)->with('event')->get();
 return response($event);
    }

}
