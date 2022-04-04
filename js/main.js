$(function(){

	$(".nav-btn").on("click", function(){
    
    $(this).toggleClass("open");

    if( $(this).hasClass("open") ){
      $(".header_nav").fadeIn("fast");
      $('body, html').css({ overflow:"hidden" });
    } else{
      $(".header_nav").fadeOut("fast");
      $('body, html').css({ overflow:"scroll" });
    }
    
  });

  $('.page-slider .slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow: $('.slider-prev'),
    nextArrow: $('.slider-next')
  });
 
});




