var $ = require('jquery');

$(document).ready(function() {

  //////////////////////////////////////////////////////////////////////////////
  // Function to calculate the start and ending positions of the Home, About Me,
  // Portfolio, and Contact Me sections.
  //////////////////////////////////////////////////////////////////////////////
  function getSectionDimensions() {

    // Shorthand variables to access DOM elements.
    var $home = $("#section-home");
    var $aboutme = $("#section-aboutme");
    var $portfolio = $("#section-portfolio");
    var $contact = $("#section-contact");

    // Return an object containing the start and end positions for each section.
    return {
      'home': {
        'start': $home.offset().top,
        'end': $home.offset().top + $home.outerHeight()
      },
      'aboutme': {
        'start': $aboutme.offset().top,
        'end': $aboutme.offset().top + $aboutme.outerHeight()
      },
      'portfolio': {
        'start': $portfolio.offset().top,
        'end': $portfolio.offset().top + $portfolio.outerHeight()
      },
      'contact': {
        'start': $contact.offset().top,
        'end': $contact.offset().top + $contact.outerHeight()
      }
    }// end return/
  }// end function.

  //////////////////////////////////////////////////////////////////////////////
  // Function to calculate the start and ending positions of the Home, About Me,
  // Portfolio, and Contact Me sections.
  //////////////////////////////////////////////////////////////////////////////
  $(window).scroll(function() {

    // Current offset from top of page + 100px.
    var screenTop = $(document).scrollTop() + 100;

    // Get dimensions and position of each section.
    sectionDimensions = getSectionDimensions();

    // Check to see if the current screen position is inside any of the Home,
    // About me, portfolio, contact sections.
    if (screenTop >= sectionDimensions.home.start && screenTop < sectionDimensions.home.end) {

      // If inside the Home section, remove navbar .active classes,
      // and add .active class to Home nav item.
      $(".container-items li").removeClass('active');
      $(".container-items li:nth-child(1)").addClass('active');

    } else if (screenTop >= sectionDimensions.aboutme.start && screenTop < sectionDimensions.aboutme.end) {

      // If inside the About Me section, remove navbar .active classes,
      // and add .active class to About Me nav item.
      $(".container-items li").removeClass('active');
      $(".container-items li:nth-child(2)").addClass('active');

    } else if (screenTop >= sectionDimensions.portfolio.start && screenTop < sectionDimensions.portfolio.end) {

      // If inside the Portfolio section, remove navbar .active classes,
      // and add .active class to Portfolio nav item.
      $(".container-items li").removeClass('active');
      $(".container-items li:nth-child(3)").addClass('active');

    } else if (screenTop >= sectionDimensions.contact.start && screenTop < sectionDimensions.contact.end) {

      // If inside the Contact Me section, remove navbar .active classes,
      // and add .active class to Contact me nav item.
      $(".container-items li").removeClass('active');
      $(".container-items li:nth-child(4)").addClass('active');

    } // end if.

  });

  //////////////////////////////////////////////////////////////////////////////
  // Navbar item hover effects.
  //////////////////////////////////////////////////////////////////////////////
  $("#navbar-main .container-items li").on("click", function(event) {

    // Prevent default action.
    event.preventDefault();

    // Remove existing .active classes from navbar items.
    $("#navbar-main .container-items li").removeClass("active");

    // Add .active class to the clicked navbar item.
    $(this).addClass("active");

    // Get the hyperlink.
    var hyperlink = $(this).children('a').attr('href');

    $("html, body").animate({
      scrollTop: $(hyperlink).offset().top
    }, 500);
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
  $(".button-moreinfo").on("click", function() {

    // Get the data-portfolio-reference value for the clicked element.
    var currentReference = $(this).data("portfolio-reference");

    // Select all More Info buttons.
    var allReferences = $(".button-moreinfo").toArray();

    // Get a list of all data-portfolio-reference="" values attached to the
    // More Info buttons.
    allReferences = $(".button-moreinfo").map(function() {
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

  });

});
