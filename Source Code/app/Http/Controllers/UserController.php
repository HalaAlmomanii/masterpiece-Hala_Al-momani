<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
Use Auth;
Use App\User;
Use App\Category;
Use App\Event;
Use App\Writer;
class UserController extends Controller
{
    public function userinfo(){
        $user=Auth::id();
        $info= User::where('id',$user)->with('reservation')->get();
        return response($info);
    } 
    public function calim($eventpoint){
        $user=Auth::id();
        $userpoint=User::where('id',Auth::id())->value('point');
        if($userpoint<$eventpoint)
        {
          return("false");
        }
        else{

        
        $info=User::find($user)->decrement('point', $eventpoint);
        return("true");
        }
    } 

    public function edit(Request $request){
        $id=Auth::id();
        
      if($request->hasFile('photo'))
      {
        
        
          $update=User::find($id)->update(
  
            [  
                'photo'=>$request->file('photo')->store('uploads','public'),
            ]
            );
        
        }

          $update=User::find($id)->update(

            [
                 'name'=>$request->input('name'),
                 
            ]
            );
      
            

      }

     
  public function test(Request $request){
    $category=$request->input();
    $id=Auth::id();    
    $user=User::find($id);
    $user->category()->sync($category);
   return('ok');

  }

  public function favevent($id){
    $userid=Auth::id(); 
    $user=User::find($userid);
    $user->event()->attach($id);
     return response("ok");
  }

  public function delfavevent($id){
    $userid=Auth::id(); 
    $user=User::find($userid);
    $user->event()->detach($id);
     return response("ok");
  }
  public function userfav(){
    $userid=Auth::id(); 
    $user=User::find($userid);
    $event=$user->event()->get();
     return response($event);
  }

public function similar(){
  $userid=Auth::id(); 
  $user=User::find($userid);
  $similar=$user->category()->with(['event' => function ($query) {
    $query->where('status','=','approved')->with('category');}])->get();
return($similar);
  }

  public function getcompany(){
    
    $events=Writer::with('event')->get();
    return response($events);
  }
  public function getevent($id){
    $events=Event::where(['company_id'=>$id,'status'=>"approved"])->with('category')->with('company')->get();
    return($events);
  }
}
