<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Category;
use App\User;
class CategoryController extends Controller
{
   public function favcategory()
   {
     $id=Auth::id();
     $info=User::where('id', $id)->with('category')->get();
     $category=Category::All();
     return response([$info,$category]);
   }

   public function index()
   {
     $category=Category::All();
     return response($category);
   }

   public function category($type){
    Category::create([
      'type'=>$type
    ]);
    return ("ok");
  }
   public function remove($id){
    Category::destroy($id);
    return ("ok");
  }

}
