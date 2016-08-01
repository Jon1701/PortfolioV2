$(document).ready(function() {

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
