@extends('layouts.navbar')
@section('nav')
<div class="page-header contact-page-header">

</header>
    </div>
   

<br>
<br>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card " style="border-color:rgba(88,20,121,1) ">
                <div class="card-header  " style="background-color:rgba(88,20,121,1)">
             
              <h4 class='entry-title text-white'>  {{ isset($url)&&$url==="writer" ? "Company Login" : "Login"}} </h4>
             @if(isset($url)&&$url==="admin")
             <h4 class='entry-title text-white'>  Admin </h4>
              @endif
                 
                </div>

                <div class="card-body" >
                    @isset($url)
                    <form method="POST" action='{{ url("login/$url") }}' aria-label="{{ __('Login') }}">
                    @else
                    <form method="POST" action="{{ route('login') }}" aria-label="{{ __('Login') }}">
                    @endisset
                        @csrf

                        <div class="form-group row">
                            <label for="email" class="col-sm-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required autofocus>

                                @if ($errors->has('email'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div><br>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>

                                @if ($errors->has('password'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div><br>

                        <div class="form-group row">
                            <div class="col-md-6 offset-md-4">
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}> {{ __('Remember Me') }}
                                    </label>
                                </div>
                            </div>
                        </div><br>

                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button   class="btn gradient-bg" type="submit">
                                    {{ __('Login') }}
                                </button>

                                <a class="btn btn-link" href="{{ route('password.request') }}">
                                    {{ __('Forgot Your Password?') }}
                                </a>
                            </div><br>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>


<br><br><br>

@endsection
