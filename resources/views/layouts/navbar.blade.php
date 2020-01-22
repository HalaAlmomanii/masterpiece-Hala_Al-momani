<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css')}}">

<!-- FontAwesome CSS -->
<link rel="stylesheet" href="{{ asset('css/font-awesome.min.css') }}">

<!-- Swiper CSS -->
<link rel="stylesheet" href="{{ asset('css/swiper.min.css')}}">

<!-- Styles -->
 <!-- Styles -->
 
<link rel="stylesheet" href="{{ asset('css/style.css')}}">
 

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

</head>
<body class="contact-page">
<header class="site-header">
    <div class="header-bar">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-10 col-lg-2 order-lg-1">
                    <div class="site-branding">
                        <div class="site-title">
                        <img src="/images/logo.png" alt="logo">
                        </div><!-- .site-title -->
                    </div><!-- .site-branding -->
                </div><!-- .col -->

                <div class="col-2 col-lg-7 order-3 order-lg-2">
                    <nav class="site-navigation">
                        <div class="hamburger-menu d-lg-none">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div><!-- .hamburger-menu -->
                       
                        <ul>
                       
                            <li><a href="/">Home</a></li>
                            <li><a href="/Aboutus">About us</a></li>
                            <li><a href="/Contact">Contact Us</a></li>
                            @if (Auth::guard('admin')->check())
                   <li> <a href='/awards'>Awards</a></li>
                   <li> <a href='/category'>Category</a></li>
                   <li> <a href='/request'>Request</a></li>
                   <li><a href="/admin">Companies</a></li>
                    @endif
                    @if(Auth::guard('writer')->check())
                    <li><a href='/writer'>New Event</a></li>
                    <li><a href='/approved'>Approved Request</a></li>
                   <li> <a href='/pending'>Pending Request</a></li>
                  @endif
                    @if(Auth::user())
                    <li ><a href='/home'>Events</a></li>
                   <li> <a href='/profile'>Profile</a></li>
                  <li>  <a href='/similar'>Your Event</a></li>
                  @endif
                     </ul>

                        
                           
                                  
                                    

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
                    </nav><!-- .site-navigation -->
                </div><!-- .col -->
                
               
    
                                 
    <div class="col-lg-3 d-none d-lg-block order-2 order-lg-3">
                    <div class="hala">
                    @if(Auth::guard('admin')->check()||Auth::guard('writer')->check()||Auth::user()) 
                 <a class="btn gradient-bg"href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                  
                              Logout    </a>
                    @endif
                    @if(!Auth::guard('admin')->check()&&!Auth::guard('writer')->check()&&!Auth::user())
                <div class="select-locations">
                <select onchange="javascript:handleSelect(this)">
                     <option default hidden>Login</option>
                     <option value="/login/writer">Company</option>
                     <option value="/login">User</option>
                 </select>
                 <select onchange="javascript:handleSelect(this)">
                     <option hidden default>Registration </option>
                     <option value="/register/writer">Company</option>
                     <option  value="/register">User</option>
                 </select>
                  
                
                </div>
                
                @endif
               
                                      
                
                    </div><!-- .buy-tickets -->
                </div><!-- .col -->
            </div><!-- .row -->
        </div><!-- .container-fluid -->
    </div>

   
    
<!-- .site-header -->


                                    
                        
  
  @yield('nav')
        
    </div>


@extends('layouts.footer')