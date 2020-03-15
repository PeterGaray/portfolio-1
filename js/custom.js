// sticky navbar
$(document).ready(function () {
	$(".navbar").sticky({
		topSpacing: 0
	});
});

// smooth scroll
$(document).ready(function () {
	$('.scrollto a[href*=#]:not([href=#])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - 50
				}, 1000);
				return false;
			}
		}
	});
});

// scroll to top
$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 800) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});

// parallax
$(function() {
    $.stellar();
});

// main flex slider
$(window).load(function() {
    $('.main-flex-slider').flexslider({
        slideshowSpeed: 5000,
        directionNav: false,
        animation: "fade",
        controlNav: false
    });
});

// owl carousel
$(document).ready(function() {
    $("#testi-carousel").owlCarousel({
        items: 1,
		loop:true,
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true
    });
});

// counter up
jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 100,
        time: 800
    });
});

// magnific popup
jQuery(document).ready(function($) {
	$('.show-image').magnificPopup({
		type: 'image'
	});
});

// wow animate
var wow = new WOW(
        {
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 100, // distance to the element when triggering the animation (default is 0)
            mobile: false // trigger animations on mobile devices (true is default)
        }
);
wow.init();