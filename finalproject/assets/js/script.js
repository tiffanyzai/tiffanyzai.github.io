$(document).ready(function() {


  $("#carousel-next").click(function(){
    var margin_value = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (margin_value == -1920) {
        return false;
    } else {
      $("#carousel").css("margin-left", margin_value - 960);
    }

  });
  $("#carousel-prev").click(function(){
    var margin_value = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (margin_value == 0) {
        return false;
    } else {
      $("#carousel").css("margin-left", margin_value + 960);
    }

  });

 $(".nav-item").click(function(){
   $("body").removeClass("no-scroll");
   $('html, body').animate({
      scrollTop: $( $.attr(this, 'href')).offset().top
    }, 300);
  });

  // if ($("#about-img").hasClass(".overlay")){
  //   $("#about-img").removeClass(".overlay");
  // }
  // else{
  //   $("#profile-pic").hover(function(){
  //   $("#about-img").addClass(".overlay");
  // });
  // }
  // $("#profile-pic").hover(function(){
  //   $(".about-img").addClass("overlay");
  // });

  // if ((".about-img").hasClass("overlay")){
  //   $(".about-img").hover(function(){
  //   $(".about-img").removeClass("overlay");
  //   });
  // }
  // else{
  //   return false;
  // }



});
