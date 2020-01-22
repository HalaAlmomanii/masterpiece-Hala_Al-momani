<?php
Route::view('/', 'welcome');
Route::view('/Contact', 'Contact');
Route::view('/Aboutus', 'Aboutus');
Auth::routes();

Route::get('/login/admin', 'Auth\LoginController@showAdminLoginForm')->name('login.admin');
Route::get('/login/writer', 'Auth\LoginController@showWriterLoginForm')->name('login.writer');
Route::get('/register/admin', 'Auth\RegisterController@showAdminRegisterForm')->name('register.admin');
Route::get('/register/writer', 'Auth\RegisterController@showWriterRegisterForm')->name('register.writer');

Route::post('/login/admin', 'Auth\LoginController@adminLogin');
Route::post('/login/writer', 'Auth\LoginController@writerLogin');
Route::post('/register/admin', 'Auth\RegisterController@createAdmin')->name('register.admin');
Route::post('/register/writer', 'Auth\RegisterController@createWriter')->name('register.writer');
Route::post('/createevent','EventController@createevent');
Route::get('/pendingevent','EventController@pendingevent');
Route::get('/editevent/{id}','EventController@editevent');
Route::post('/updateevent','EventController@updateevent');
Route::get('/removeevent/{id}','EventController@removeevent');
Route::get('/approvedevent','EventController@approvedevent');

Route::get('/allrequest','EventController@allevent') ;
Route::get('/reject/{id}','EventController@rejectevent');
Route::get('/accept/{id}','EventController@acceptevent');
Route::post('/award','AwardController@createaward');


Route::get('/userinfo','UserController@userinfo');
Route::get('/award','AwardController@award');
Route::get('/calim/{point}','UserController@calim');
Route::post('/editprofile','UserController@edit');
Route::post('/test','UserController@test');
Route::get('/favcategory','CategoryController@favcategory');

Route::get('/allevent','EventController@index');
Route::get('/eventdetail/{id}','EventController@detail');

Route::get('/userfav/{id}','UserController@favevent');
Route::get('/deluserfav/{id}','UserController@delfavevent');
Route::get('/reservation','ReservationController@reservation');
Route::get('/newbook/{id}/{total}','ReservationController@book');

Route::get('/allfav','UserController@userfav');
Route::get('/getsimilar','UserController@similar');
Route::post('/filter','EventController@filter');
Route::post('/generalfilter','EventController@Gfilter');
Route::get('/allcategory','CategoryController@index');
Route::view('/home', 'home')->middleware('auth');
Route::view('/admin','admin');
Route::view('/writer','writer');





// Reacte-route
Route::view('/request','admin');
Route::view('/awards','admin');
Route::view('/Aevent/{id}','admin');
Route::view('/category','admin');
Route::view('/company','writer');
Route::view('/approved','writer');
Route::view('/pending','writer');
Route::view("/data/{id}",'writer');
Route::view('/profile','home');
Route::view('/similar','home');
Route::view('/event/{id}','home');

Route::get('/Admin/allEvent','UserController@getcompany');
Route::get('/ACevent/{id}','UserController@getevent');
Route::get('/newcategory/{id}','CategoryController@category');
Route::get('/delcategory/{id}','CategoryController@remove');
Route::get('/delaward/{id}','AwardController@remove');






