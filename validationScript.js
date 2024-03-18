    // JavaScript code for form validation
	// Prevent form from submitting
    document.getElementById("myForm").addEventListener("submit", function(event) {
      // Retrieve the input field value
      let inputField = document.getElementById("input");
      let value = inputField.value;

      // Regular expression pattern for alphanumeric input
      var pattern = /^[a-zA-Z0-9]+$/;

      // Check if the input value matches the pattern
      if(!pattern.test(value)) {
        alert("Only use alphanumeric characters");
        event.preventDefault();
      } else {
        alert("Valid input");

      }
    });

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message