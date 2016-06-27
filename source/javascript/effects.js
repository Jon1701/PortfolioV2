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
  // Portfolio Project Description Popouts.
  //////////////////////////////////////////////////////////////////////////////

  // When a .btn-portfolio-btn is clicked, need to find the value of the
  // data-portfolio-reference property of the clicked item.
  //
  // This value will reference the Description container
  // (.container-portfolio-project-description). We want to hide all those
  // containers, except for the container references by the currently
  // pressed Info button.
  //
  // TLDR: If "More Info" is pressed, hide all other Description containers
  // and only show the container for the selected portfolio project. Also, if
  // the same "More Info" button is pressed, close its Description.
  //
  $(".btn-portfolio-info").on("click", function() {

    // Get the data-portfolio-reference value for the clicked element.
    var currentReference = $(this).data("portfolio-reference");

    // Select all More Info buttons.
    var allReferences = $(".btn-portfolio-info").toArray();

    // Get a list of all data-portfolio-reference="" values attached to the
    // More Info buttons.
    allReferences = $(".btn-portfolio-info").map(function() {
      return $(this).data("portfolio-reference");
    }).get();

    // Delete the data-portfolio-reference value of the selected element.
    allReferences.splice(allReferences.indexOf(currentReference), 1);

    // Hide the Description containers for all others
    allReferences.forEach(function(val, idx, arr) {
      $("#" + val).addClass("hide");
    });

    // Show the container we want.
    $("#" + currentReference).toggleClass("hide");

    // Close Description container when clicked-up.
    $("#" + currentReference).mouseup(function() {
      $(this).addClass("hide");
    });

    // Close Description container when body is clicked.
    /*
    $("body").mouseup(function() {
     $("#" + currentReference).addClass("hide");
    });
    */


  });


});
