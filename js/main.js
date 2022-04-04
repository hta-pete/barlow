$(function(){

	$(".nav-btn").on("click", function(){
    
    $(this).toggleClass("open");

    if( $(this).hasClass("open") ){
      $(".header_nav").fadeIn("fast");
    } else{
      $(".header_nav").fadeOut("fast");
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




