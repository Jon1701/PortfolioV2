$(document).ready(function() {

  // Find the HTML, CSS, JS images. Trigger on click.
  $(".w3c-logo-container > img").on("click", function() {

    // Get the classes of the clicked element.
    var classes = $(this).attr("class");

    // Change background colour based on the inner colour of the HTML, CSS, JS
    // badges.
    if (classes.indexOf("html") > -1) { // HTML
      $(".navbar-lightdark-bg").css("background-color", "rgba(241,102,43,0.9)");
    } else if (classes.indexOf("css") > -1) { //CSS
      $(".navbar-lightdark-bg").css("background-color", "rgba(54,156,214,0.9)");
    } else if (classes.indexOf("js") > -1) { //JS
      $(".navbar-lightdark-bg").css("background-color", "rgba(242,191,34,0.9)");
    }

  });

});
