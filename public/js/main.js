$(function () {

    "use strict";
	 /* smooth scroll
  -------------------------------------------------------*/
	  $.scrollIt({

		easing: 'swing',      // the easing function for animation
		scrollTime: 900,       // how long (in ms) the animation takes
		activeClass: 'active', // class given to the active nav element
		onPageChange: null,    // function(pageIndex) that is called when page is changed
		topOffset: -70,
		upKey: 38,                // key code to navigate to the next section
        downKey: 40          // key code to navigate to the previous section

	  });

	 var win = $(window);


    win.on("scroll", function () {
      var wScrollTop  = $(window).scrollTop();

        if (wScrollTop > 100) {
            $(".navbar").addClass("navbar-colored");
        } else {
            $(".navbar").removeClass("navbar-colored");
        }
    });

	/* close navbar-collapse when a  clicked */
    $(".navbar-nav a").not('.dropdown-toggle').on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });

	/* close navbar-collapse when a  clicked */
    $('.dropdown').on('click', function () {
        $(this).toggleClass("show");
    });

	/* scroll-top-btn */
	var  scrollButton = $('.scroll-top-btn .fa');
    win.on('scroll', function () {
        if ($(this).scrollTop() >= 700) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
    });

    /* Click On scroll-top-btn */
    scrollButton.on('click', function () {
        $('html,body').animate({ scrollTop : 0 }, 1200);
    });

	/* wow */
	new WOW().init();

	/* counter */
	$('.count').counterUp({
        delay: 20,
        time: 1500
    });
});

$(window).on("load",function (){

     $('.load-wrapp').fadeOut(100);

});
let index = 1

function showText(text, warning, img, v) {
    document.getElementById("texto-pasos").innerText = text
    document.getElementById("advertencia-pasos").innerText = warning
    document.getElementById("pasos-image").src = img
    if (index != v) {
        if (v == 1)
            document.getElementById("pasos-video").src = "https://www.youtube.com/embed/4z7mEolwvI4"
        else
            document.getElementById("pasos-video").src = "https://www.youtube.com/embed/tgbNymZ7vqY"
    }
}
