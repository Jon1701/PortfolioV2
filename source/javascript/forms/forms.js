var $ = require('jquery');

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

  // Alert box.
  var alertBoxSuccess = $("#section-contact .alert-success");
  var alertBoxDanger = $("#section-contact .alert-danger");

  // Hide alert box.
  alertBoxSuccess.hide();
  alertBoxDanger.hide();

  // Error free flags.
  var nameIsValid = false;
  var emailIsValid = false;
  var messageIsValid = false;

  // Check if name is valid.
  $("#field-name").on("input", testNameField);

  // Check if email is valid.
  $("#field-email").on("input", testEmailField);

  // Check if gotcha is empty.
  var checkGotchaEmpty = $("#field-gotcha").val() === "";

  // Check if message is valid.
  $("#field-message").on("input", testMessageField);

  // On submit, check if all fields are valid, and send the request.
  $("#form-btn-submit").on("click", function(event) {

    // Prevent submit.
    event.preventDefault();

    // Check if all fields are valid.
    if (nameIsValid && emailIsValid && messageIsValid && checkGotchaEmpty) { // All valid.

      // Send email via AJAX.
      $.ajax({
          url: atob("aHR0cHM6Ly9mb3Jtc3ByZWUuaW8vam9uLmJhbG9uQGFsdW0udXRvcm9udG8uY2E="),
          method: "POST",
          data: {
            name: $("#field-name").val(),
            _replyto: $("#field-email").val(),
            message: $("#field-message").val()
          },
          dataType: "json",
          success: function() {

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

              // Reset flags
              nameIsValid = false;
              emailIsValid = false;
              messageIsValid = false;

            });

            return false;
          }
      });

    } else { // Invalid, prevent submission.

      // Prevent submit.
      event.preventDefault();

      // Show error message.
      $("#section-contact .alert-danger").fadeIn("fast", function() {
        $(this).show();
      });

      return false;
    }

  });

  // Hide the alertbox if there is a change to the text input.
  $("#form-contact input").keydown(function() {
    alertBoxSuccess.hide();
    alertBoxDanger.hide()
  });
  $("#form-contact textarea").keydown(function() {
    alertBoxSuccess.hide();
    alertBoxDanger.hide();
  });

  // Close the alertbox if clicked.
  $("#form-alertbox-success").on("click", function() {
    $(this).fadeOut("slow", function() {
      $(this).hide();
    });
  })
  $("#form-alertbox-danger").on("click", function() {
    $(this).fadeOut("slow", function() {
      $(this).hide()
    });
  })

});
