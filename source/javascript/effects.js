$(document).ready(function() {

  //////////////////////////////////////////////////////////////////////////////
  // Navbar mouseover/mouseleave effect.
  //////////////////////////////////////////////////////////////////////////////

  // Callback function: show the > symbol on navbar links.
  function mouseEnter() {
    $(this).children("span").css("visibility", "visible");
  }

  // Callback function: hide the > symbol on navbar links.
  function mouseLeave() {
    $(this).children("span").css("visibility", "hidden");
  }

  // Perform effect when mouse enters/leaves a navbar link.
  $(".navbar-nav > li > a").hover(mouseEnter, mouseLeave);

  //////////////////////////////////////////////////////////////////////////////
  // Navbar background effect
  //////////////////////////////////////////////////////////////////////////////

  // Effect triggers when window scrolls.
  $(window).scroll(function() {

    // When scrolled more than 100px from the top,
    if ($(document).scrollTop() > 100) {

      // Remove transparent background.
      $("#navbar-main").removeClass("navbar-transparent-bg");

      // Apply a light dark background.
      $("#navbar-main").addClass("navbar-lightdark-bg");

    } else { // When not scrolled more than 100 from the top,

      // Remove light dark background.
      $("#navbar-main").removeClass("navbar-lightdark-bg");

      // Apply transparent background.
      $("#navbar-main").addClass("navbar-transparent-bg");

    }

  });

  //////////////////////////////////////////////////////////////////////////////
  // Navbar link jump effect.
  //////////////////////////////////////////////////////////////////////////////

  // When a navbar link is clicked,
  $("#navbar-main > li > a").on("click", function(event) {

    // Do not immediately go to the desired section.
    event.preventDefault();

    // Get the link anchor.
    var target = this.hash;
    var $target = $(target);

    // Smooth transition to the section.
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 500, 'swing');

  });

  //////////////////////////////////////////////////////////////////////////////
  // Popovers.
  //////////////////////////////////////////////////////////////////////////////
  $('[data-toggle="popover"]').popover({
    container: 'body',
    html:true,
  });

});
