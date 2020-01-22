<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Award;
use Illuminate\Support\Facades\Validator;
class AwardController extends Controller
{
    public function createaward(Request $request)

  {
    $validator = Validator::make($request->all(), [ 
      'title' => 'required',
        'description'=>'required',
        'point'=> 'required',
        'photo' =>'required',
        
  ]);
    
        
        
   
    
if ($validator->fails()) {
  return response()->json([$validator->errors()]);
}
          if($request->hasFile('photo'))
          {
            Award::create([
                'photo' =>$request->file('photo')->store('uploads','public'),   
                 'title'=> $request->input('title'),
                'description'=> $request->input('description'),
                'point'=>request()->input('point'),
                 ]);
                  
          }
          else
         Award::create([
        'title'=> $request->input('title'),
        'description'=> $request->input('description'),
        'point'=>request()->input('point'),
        
         ]);
         

       
    }

    public function award(){
      $award=Award::all();
      return response($award);
    }

    public function remove($id){
      Award::destroy($id);
      return ("ok");
    }
}
