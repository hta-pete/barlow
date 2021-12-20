$(function(){

	var $window = $(window);
	var raf           = requestAnimationFrame;
	var lastScrollTop = $window.scrollTop();

	if (raf) {
		loop();
	}

	function loop() {

		var scrollTop = $window.scrollTop();
		var y         = (scrollTop > lastScrollTop) ? 'down' : ((scrollTop === lastScrollTop) ? 'none' : 'up');

		if (lastScrollTop === scrollTop) {
			raf(loop);
			return;
		} else {
			lastScrollTop = scrollTop;
			raf(loop);
		}

		if( y == 'down' && scrollTop > 0 ){
			//show
		} else{
			//hide
		}

		if( scrollTop > $('.hero .slide-img').height() ) {
			//active
		} else {
			//remove active
		}

		lastScrollTop = scrollTop;

	}


	$('.what-we-do-slider').slick({
		dots: true,
	  infinite: true,
	  speed: 500,
	  prevArrow: $('.slider_prev-btn'),
	  nextArrow: $('.slider_next-btn'),
	  customPaging : function(slider, i) {
      return '<span></span>';
    },
	});


});







