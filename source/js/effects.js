$(document).ready(function() {


  function enter() {
    $(this).children("span").css("visibility", "visible");
  }

  function leave() {
    $(this).children("span").css("visibility", "hidden");
  }

  $(".navbar-nav > li > a").hover(enter, leave);



  $(window).scroll(function() {

    if ($(document).scrollTop() > 568) {
      $("#navbar-main").removeClass("navbar-transparent-bg");
      $("#navbar-main").addClass("navbar-lightdark-bg");
    } else {
      $("#navbar-main").removeClass("navbar-lightdark-bg");
      $("#navbar-main").addClass("navbar-transparent-bg");
    }

  });






  // Smooth scrolling.
  $("#navbar-main > li > a").on("click", function(e) {

    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 500, 'swing');

  });






});
