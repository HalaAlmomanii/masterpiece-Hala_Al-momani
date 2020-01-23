<footer class="site-footer">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <figure class="footer-logo">
                    <a href="#"><img src="{{asset('images/logo.png')}}" alt="logo"></a>
                </figure>

              

                <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->

                <div class="footer-social">
                    <ul class="flex flex-wrap justify-content-center align-items-center">
                        <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                        <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>
<script src="{{ asset('js/app.js') }}" defer></script>
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
@yield('fot')