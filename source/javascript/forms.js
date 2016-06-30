$(document).ready(function() {

  //////////////////////////////////////////////////////////////////////////////
  // Callback function to test if the Name input field is valid.
  //
  //  Name must have leading and following whitespace trimmed.
  //  Minimum 3 characters
  //
  //////////////////////////////////////////////////////////////////////////////
  var testNameField = function() {

    // Current value of the text field.
    var currentValue = $(this).val().trim();

    // Current value must be of at least length 3 for the field to be valid.
    if (currentValue.length >= 3) {

      // Set flag.
      nameIsValid = true;

      // Indicate validity
      $(this).removeClass("field-invalid");
      $(this).addClass("field-valid");

    } else if (currentValue.length === 0) {

      // Set flag.
      nameIsValid = false;

      // Indicate neutrality.
      $(this).removeClass("field-invalid");
      $(this).removeClass("field-valid");

    } else {

      // Set flag.
      nameIsValid = false;

      // Indicate invalidity.
      $(this).removeClass("field-valid");
      $(this).addClass("field-invalid");
    }
  };

  //////////////////////////////////////////////////////////////////////////////
  // Callback function to test if the Email input field is valid.
  //
  //  Email must match valid regex.
  //////////////////////////////////////////////////////////////////////////////
  var testEmailField = function() {

    // Current value of the text field.
    var email = $(this).val().trim();

    // Test email.
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    // Current value must be of at least length 3 for the field to be valid.
    if (re.test(email)) {

      // Set flag.
      emailIsValid = true;

      // Indicate validity.
      $(this).removeClass("field-invalid");
      $(this).addClass("field-valid");

    } else if (email.length === 0) {

      // Set flag.
      emailIsValid = false;

      // Indicate neutrality.
      $(this).removeClass("field-invalid");
      $(this).removeClass("field-valid");

    } else {

      // Set flag.
      emailIsValid = false;

      // Indicate invalidity.
      $(this).removeClass("field-valid");
      $(this).addClass("field-invalid");

    }
  };

  //////////////////////////////////////////////////////////////////////////////
  // Callback function to test if the Message textarea field is valid.
  //
  //  Message must have leading and following whitespace trimmed.
  //  Minimum 10 characters.
  //////////////////////////////////////////////////////////////////////////////
  var testMessageField = function() {

    // Current value of the text field.
    var currentValue = $(this).val().trim();

    // Current value must be of at least length 10 for the field to be valid.
    if (currentValue.length >= 10) {

      // Set flag.
      messageIsValid = true;

      // Indicate validity
      $(this).removeClass("field-invalid");
      $(this).addClass("field-valid");

    } else if (currentValue.length === 0) {

      // Set flag.
      messageIsValid = false;

      // Indicate neutrality.
      $(this).removeClass("field-invalid");
      $(this).removeClass("field-valid");

    } else {

      // Set flag.
      messageIsValid = false;

      // Indicate invalidity.
      $(this).removeClass("field-valid");
      $(this).addClass("field-invalid");
    }

  }

  // Action.
  var action = atob("aHR0cHM6Ly9mb3Jtc3ByZWUuaW8vam9uLmJhbG9uQGFsdW0udXRvcm9udG8uY2E=");

  // Uncomment during development to prevent accidental spam.
  //action = "www.jonbalon.io";

  // Set form action.
  $("#form-contact").attr("action", action);

  // Alert box.
  var alertBox = $("#section-contact .alert-success");

  // Hide alert box.
  alertBox.hide();

  // Error free flags.
  var nameIsValid = false;
  var emailIsValid = false;
  var messageIsValid = false;

  // Check if name is valid.
  $("#field-name").on("input", testNameField);

  // Check if email is valid.
  $("#field-email").on("input", testEmailField);

  // Check if message is valid.
  $("#field-message").on("input", testMessageField);

  // On submit, check if all fields are valid, and send the request.
  $("#form-contact").submit(function(event) {

    // Check if all fields are valid.
    if (nameIsValid && emailIsValid && messageIsValid) { // All valid.

      // Popup message and clear form.
      $("#section-contact .alert-success").fadeIn("slow", function() {
        $(this).show();

        // Clear the form.
        $("#field-name").val("");
        $("#field-email").val("");
        $("#field-message").val("");

        // Reset indicator.
        $("#field-name").removeClass("field-valid");
        $("#field-email").removeClass("field-valid");
        $("#field-message").removeClass("field-valid");

        return false;

      });

      return false;

    } else { // Invalid, prevent submission.

      // Prevent submit.
      event.preventDefault();
      return false;
    }

  });

  // Hide the alertbox if there is a change to the text input.
  $("#form-contact input").keydown(function() {
    alertBox.hide();
  });
  $("#form-contact textarea").keydown(function() {
    alertBox.hide();
  });

  // Close the alertbox if clicked.
  $("#form-alertbox").on("click", function() {
    $(this).fadeOut("slow", function() {
      $(this).hide()
    });
  })

});
