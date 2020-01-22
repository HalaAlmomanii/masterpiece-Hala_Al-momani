@extends('layouts.navbar')

@section('nav')

    <div class="swiper-container hero-slider">
        <div class="swiper-wrapper">
            <div class="swiper-slide" data-date="2020/05/01" style="background:url('images/header-bg.jpg') no-repeat">
                <div class="hero-content">
                    <div class="container">
                        <div class="row">
                            <div class="col flex flex-column justify-content-center">
                                <div class="entry-header">
                                    <div class="countdown flex align-items-center">
                                        <div class="countdown-holder flex align-items-baseline">
                                            <span class="dday"></span>
                                            <label>Days</label>
                                        </div><!-- .countdown-holder -->

                                        <div class="countdown-holder flex align-items-baseline">
                                            <span class="dhour"></span>
                                            <label>Hours</label>
                                        </div><!-- .countdown-holder -->

                                        <div class="countdown-holder flex align-items-baseline">
                                            <span class="dmin"></span>
                                            <label>Minutes</label>
                                        </div><!-- .countdown-holder -->

                                        <div class="countdown-holder flex align-items-baseline">
                                            <span class="dsec"></span>
                                            <label>Seconds</label>
                                        </div><!-- .countdown-holder -->
                                    </div><!-- .countdown -->

                                    <h2 class="entry-title"> We have the best events. <br>Get your tiket now!</h2>
                                </div><!--- .entry-header -->

                                <div class="entry-footer">
                                <div>
                                </div>
                                
                                    <a class="btn gradient-bg" href="#">Order here</a>
                                </div><!-- .entry-footer" -->
                            </div><!-- .col -->
                        </div><!-- .container -->
                    </div><!-- .hero-content -->
                </div><!-- .swiper-slide -->
            </div><!-- .swiper-wrapper -->

           

        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>

        <!-- Add Arrows -->
        <div class="swiper-button-next flex justify-content-center align-items-center">
            <span><svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"/></svg></span>
        </div>

        <div class="swiper-button-prev flex justify-content-center align-items-center">
            <span><svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1203 544q0 13-10 23l-393 393 393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z"/></svg></span>
        </div>
    </div><!-- .swiper-container -->
</header><!-- .site-header -->

<div class="homepage-info-section">
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-4 col-lg-5">
                <figure>
                    <img src="images/logo-2.png" alt="logo">
                </figure>
            </div>

            <div class="col-12 col-md-8 col-lg-7">
                <header class="entry-header">
                    <h2 class="entry-title">What is Agenda and why choose our services?</h2>
                </header>

                <div class="entry-content">
                    <p>AGENDA is THE place to show off your outstanding event design, distinctive activities and unique sessions. Show off your greatness in a way that shouts </p>
                </div>

                <footer class="entry-footer">
                   
                </footer>
            </div>
        </div>
    </div>
</div>

<div class="homepage-featured-events">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="featured-events-wrap flex flex-wrap justify-content-between">
                    <div class="event-content-wrap positioning-event-1">
                        <figure>
                            <a href="#"><img src="images/1.jpg" alt="1"></a>
                        </figure>

                        <header class="entry-header">
                            <h3 class="entry-title">Michael Smith in concert</h3>

                            <div class="posted-date">August 25</div>
                        </header>
                    </div>

                    <div class="event-content-wrap positioning-event-2">
                        <figure>
                            <a href="#"><img src="images/2.jpg" alt=""></a>
                        </figure>

                        <header class="entry-header">
                            <h3 class="entry-title">Street art fest</h3>

                            <div class="posted-date">November 28</div>
                        </header>
                    </div>

                    <div class="event-content-wrap positioning-event-3">
                        <figure>
                            <a href="#"><img src="images/3.jpg" alt=""></a>
                        </figure>

                        <header class="entry-header">
                            <h3 class="entry-title">Anabelle in concert</h3>

                            <div class="posted-date">August 28</div>
                        </header>
                    </div>

                    <div class="event-content-wrap positioning-event-4 half">
                        <figure>
                        <a href="#"><img src="images/autumn.jpg" alt=""></a>
                        </figure>
                    </div>

                    <div class="event-content-wrap positioning-event-5 half">
                        <figure>
                            <a href="#"><img src="images/check-july.png" alt=""></a>
                        </figure>
                    </div>

                    <div class="event-content-wrap positioning-event-6 half">
                        <figure>
                            <a href="#"><img src="images/summer-festivals.jpg" alt=""></a>
                        </figure>
                    </div>

                    <div class="event-content-wrap positioning-event-7">
                        <figure>
                            <a href="#"><img src="images/90.jpg" alt=""></a>
                        </figure>

                        <header class="entry-header">
                            <h3 class="entry-title">90’s Disco Night</h3>

                            <div class="posted-date">August 28</div>
                        </header>
                    </div>

                    <div class="event-content-wrap positioning-event-8">
                        <figure>
                            <a href="#"><img src="images/modern.jpg" alt="1"></a>
                        </figure>

                        <header class="entry-header">
                            <h3 class="entry-title">Modern Ballet</h3>

                            <div class="posted-date">April 25</div>
                        </header>
                    </div>

                    <div class="event-content-wrap positioning-event-9">
                        <figure>
                            <a href="#"><img src="images/smoke.jpg" alt=""></a>
                        </figure>

                        <header class="entry-header">
                            <h3 class="entry-title">Smoke show</h3>

                            <div class="posted-date">August 28</div>
                        </header>
                    </div>

                    <div class="event-content-wrap positioning-event-10 half">
                        <figure>
                            <a href="#"><img src="images/summer-festival.jpg" alt=""></a>
                        </figure>
                    </div>

                    <div class="event-content-wrap positioning-event-11 half">
                        <figure>
                            
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>




            <div class="homepage-next-events">
    <div class="container">
        <div class="row">
            <div class="next-events-section-header">
                <h2 class="entry-title" style="margin-left:470px;" >Loaders</h2>
                <p></p>
            </div>
        </div>
            <div class="entry-content elements-container">
                <div class="row">
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div class="circular-progress-bar">
                            <div class="circle" id="festivals">
                                <strong></strong>
                            </div>

                            <h3 class="entry-title">Festivals</h3>
                            
                        </div>
                    </div>

                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div class="circular-progress-bar">
                            <div class="circle" id="concerts">
                                <strong></strong>
                            </div>

                            <h3 class="entry-title">Concerts</h3>
                            
                        </div>
                    </div>

                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div class="circular-progress-bar">
                            <div class="circle" id="conference">
                                <strong></strong>
                            </div>

                            <h3 class="entry-title">Conference</h3>
                            
                        </div>
                    </div>

                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div class="circular-progress-bar">
                            <div class="circle" id="new_artists">
                                <strong></strong>
                            </div>

                            <h3 class="entry-title">New artists</h3>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
            <div class="homepage-next-events">
    <div class="container">
        <div class="row">
            <div class="next-events-section-header">
                <h2 style="margin-left:450px;" class="entry-title">Milestones</h2>
                <p ></p>
            </div>
        </div>
            <div class="entry-content elements-container">
                <div class="row">
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div class="counter-box">
                            <div class="flex justify-content-center align-items-center">
                                <img src="images/mic-icon.png" alt="">
                            </div>

                            <div class="entry-content">
                                <div class="start-counter" data-to="149" data-speed="2000">5555</div>

                                <h3 class="entry-title">Concerts/Year</h3>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div class="counter-box">
                            <div class="flex justify-content-center align-items-center">
                                <img src="images/bulb-icon.png" alt="">
                            </div>

                            <div class="entry-content">
                                <div class="start-counter" data-to="2391" data-speed="2000">5555</div>

                                <h3 class="entry-title">Concerence stpeackers</h3>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div class="counter-box">
                            <div class="flex justify-content-center align-items-center">
                                <img src="images/diomond-icon.png" alt="">
                            </div>

                            <div class="entry-content">
                                <div class="start-counter" data-to="245" data-speed="2000">5555</div>

                                <h3 class="entry-title">Amazing Ideas</h3>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div class="counter-box">
                            <div class="flex justify-content-center align-items-center">
                                <img src="images/calendar-icon.png" alt="">
                            </div>

                            <div class="entry-content">
                                <div class="start-counter" data-to="128" data-speed="2000">5555</div>

                                <h3 class="entry-title">Calendar Events</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


<div  class="homepage-regional-events">
   
               

                <div class="events-partners">
                    <header class="entry-header">
                        <h2 class="entry-title">Partners</h2>
                    </header>

                    <div class="events-partners-logos flex flex-wrap justify-content-between align-items-center">
                        <div class="event-partner-logo">
                            <a href="#"><img src="images/pixar.png" alt=""></a>
                        </div>

                        <div class="event-partner-logo">
                            <a href="#"><img src="images/the-pirate.png" alt=""></a>
                        </div>

                        <div class="event-partner-logo">
                            <a href="#"><img src="images/himalayas.png" alt=""></a>
                        </div>

                        <div class="event-partner-logo">
                            <a href="#"><img src="images/sa.png" alt=""></a>
                        </div>

                        <div class="event-partner-logo">
                            <a href="#"><img src="images/south-porth.png" alt=""></a>
                        </div>

                        <div class="event-partner-logo">
                            <a href="#"><img src="images/himalayas.png" alt=""></a>
                        </div>

                        <div class="event-partner-logo">
                            <a href="#"><img src="images/sa.png" alt=""></a>
                        </div>

                        <div class="event-partner-logo">
                            <a href="#"><img src="images/south-porth.png" alt=""></a>
                        </div>

                        <div class="event-partner-logo">
                            <a href="#"><img src="images/pixar.png" alt=""></a>
                        </div>

                        <div class="event-partner-logo">
                            <a href="#"><img src="images/the-pirate.png" alt=""></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>

<div class="newsletter-subscribe">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <header class="entry-header">
                    <h2 class="entry-title">Subscribe to our newsletter to get the latest trends & news</h2>
                    <p>Join our database NOW!</p>
                </header>

                <div class="newsletter-form">
                    <form class="flex flex-wrap justify-content-center align-items-center">
                        <div class="col-md-12 col-lg-3">
                            <input type="text" placeholder="Name">
                        </div>

                        <div class="col-md-12 col-lg-6">
                            <input type="email" placeholder="Your e-mail">
                        </div>

                        <div class="col-md-12 col-lg-3">
                            <input class="btn gradient-bg" type="submit" value="Subscribe">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

<div class="back-to-top flex justify-content-center align-items-center">
    <span><svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1395 1184q0 13-10 23l-50 50q-10 10-23 10t-23-10l-393-393-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z"/></svg></span>
</div>
<script type='text/javascript' src="{{ asset('js/jquery.js') }}"></script>
<script type='text/javascript' src="{{ asset('js/masonry.pkgd.min.js')}}"></script>
<script type='text/javascript' src="{{ asset('js/jquery.collapsible.min.js')}}"></script>
<script type='text/javascript' src="{{ asset('js/swiper.min.js')}}"></script>
<script type='text/javascript' src="{{ asset('js/jquery.countdown.min.js')}}"></script>
<script type='text/javascript' src="{{ asset('js/circle-progress.min.js')}}"></script>
<script type='text/javascript' src="{{ asset('js/jquery.countTo.min.js')}}"></script>
<script type='text/javascript' src="{{ asset('js/custom.js')}}"></script>

<script type="text/javascript">
function handleSelect(elm)
{
window.location = elm.value;
}
</script>
    </body>
</html>
