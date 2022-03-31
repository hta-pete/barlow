$(function(){

	$(".nav-btn").on("click", function(){
    
    $(this).toggleClass("open");

    if( $(this).hasClass("open") ){
      $(".header_nav").fadeIn("fast");
    } else{
      $(".header_nav").fadeOut("fast");
    }
    
  });
    
});




