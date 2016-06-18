$(document).ready(function() {

  function enter() {
    $(this).children("span").css("visibility", "visible");
  }

  function leave() {
    $(this).children("span").css("visibility", "hidden");
  }

  $(".navbar-nav > li > a").hover(enter, leave);

});
