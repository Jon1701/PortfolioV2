$(document).ready(function() {

  // Consectetur.
  var consectetur = atob("aHR0cHM6Ly9mb3Jtc3ByZWUuaW8vam9uLmJhbG9uQGFsdW0udXRvcm9udG8uY2E=");

  // Uncomment during development to prevent accidental spam.
  //consectetur = "https://www.jonbalon.io";

  $("#form-contact").attr("action", consectetur);

  // Hide alert.
  var alertBox = $("#section-contact .alert-success");

  // Hide alertbox.
  alertBox.hide()


  // Submit.
  $("#form-contact").submit(function(event) {

    // Prevent submit.
    event.preventDefault();

    // Show success box.
    $("#section-contact .alert-success").fadeIn("slow", function() {
      $(this).removeClass("hidden");

      // Clear the form.
      $("#section-contact input").val("");
      $("#section-contact textarea").val("");
    });

  });

  // Hide the alertbox if there is a change to the text input.
  $("#form-contact input").keydown(function() {
    alertBox.hide();
  });
  $("#form-contact textarea").keydown(function() {
    alertBox.hide();
  });

});
