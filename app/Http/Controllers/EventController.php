<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Validator;

use Auth;
use App\Event;
use App\User;
class EventController extends Controller
{
 
    public function createevent(Request $request)

    {$validator = Validator::make($request->all(), [ 
      'title' => 'required',
        'description'=>'required',
        'location'=> 'required',
        'date'=> 'required',
        'time'=> 'required',
        'price'=> 'required',
        'photo' =>'required',
        'numberofticket'=>'required',
        'category_id'=>'required',
  ]);
    
        
        
   
    
if ($validator->fails()) {
  return response()->json([$validator->errors()]);
}
      
    
         Event::create([
        'title'=> $request->input('title'),
        'description'=> $request->input('description'),
        'location'=> $request->input('location'),
        'date'=> $request->input('date'),
        'time'=> $request->input('time'),
        'price'=> $request->input('price'),
        'photo' =>$request->file('photo')->store('uploads','public'),
        'numberofticket'=>request()->input('numberofticket'),
        'category_id'=>$request->input('category_id'),
        'company_id'=>Auth::guard('writer')->id()
         ]);
         

       
    }


    public function pendingevent()
    {
      $pending= Event::where('company_id',Auth::guard('writer')->id())->where('status','pending')->get();
      return response($pending);
    }
    public function approvedevent()
    {
      $approved= Event::where('company_id',Auth::guard('writer')->id())->where('status','approved')->get();
      return response($approved);
    }
    public function allevent()
    {
      $all= Event::where('status','pending')->with('category')->with('company')->get();
      return response($all);
     
    }
    public function rejectevent($id)
    {
      Event::find($id)->update(
        [
          'status'=> 'reject'
        ]
        );
        return response('ok');
    }
    public function acceptevent($id)
    {
      Event::find($id)->update(
        [
          'status'=> 'approved'
        ]
        );
        return response('ok');
      
    }
    public function editevent($id)
    {
    
      $pending= Event::where('company_id',Auth::guard('writer')->id())->where('status','pending')->where('id',$id)->get();
      return response($pending);
    }
    public function updateevent(Request $request)
    {
      $id=$request->input('id');
      if ($request->hasFile('photo'))
      {
        $update= Event::find($id)->update(

          [
            'photo' =>$request->file('photo')->store('uploads','public'),
          ]
          );
      }
     
    $update= Event::find($id)->update(
      [
        'title'=> $request->input('title'),
        'description'=> $request->input('description'),
        'location'=> $request->input('location'),
        'Date'=> $request->input('date'),
        'time'=> $request->input('time'),
        'price'=> $request->input('price'),
        'numberofticket'=>request()->input('numberofticket'),
        'category_id'=>$request->input('category_id'),

      ]
      );

    
  }
  public function removeevent($id){
    $event =Event::find($id);
     $event->delete();
  }

  public function index(){
    $event=Event::where('status','approved')->with('category')->get();
   
     return response($event);
  }

  public function detail($id){
     $user_id=Auth::id();
     $event=Event::find($id);
      $userevent=Event::where('id',$id)->with('user')->whereHas('user', function (Builder $query) use ($user_id){
      $query->where('user_id','=',$user_id);})->get();
     return response([$event,$userevent]);
  }


 
  public function filter(Request $request){

    $userid=Auth::id(); 
    $user=User::find($userid);
    $category=$user->category()->pluck('category_id')->toArray();
   $result=$request->all();
    $events = Event::where('status','approved')->whereNested(function($query) use($result,$category) {
      foreach( $result as $key => $val) {
        if($val != ''){
         
            
            
               $query->where($key, '=', $val);
            
        }
        if($key==='category_id' && $val=='' && count ($category)>0)
        { $query->whereIn('category_id',$category);
        }

    }
    },'and');

    return response($events->with('category')->get());







    

    // $event = New Event();
    // foreach( $request->all() as $key => $par) {
    //     if($par != ''){
    //       if($key==='category_id' && $par=='')
    //         {$event = $event->where($key, '=', $par)->where('status','approved')->whereIn('category_id',$category);
    //         }
    //         else
    //         {
    //           $event = $event->where($key, '=', $par)->where('status','approved');
    //         }
    //     }
    // }
    // $event =$event->paginate(100); 
  }

  public function Gfilter(Request $request){
   $result=$request->all();
    $events = Event::where('status','approved')->whereNested(function($query) use($result) {
      foreach( $result as $key => $val) {
        if($val != ''){
          
               $query->where($key, '=', $val);
            
        }
    }
    },'and');

    return response($events->with('category')->get());



  }


}
