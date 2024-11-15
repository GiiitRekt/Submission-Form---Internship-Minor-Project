document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('myForm');

  form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent form from submitting immediately
      validateForm(); // Call the validation function
  });

  function validateForm() {
      clearErrors(); // Clear previous error messages

      // Get form values
      const fullName = document.getElementById('fullName').value.trim();
      const email = document.getElementById('email').value.trim();
      const phoneNumber = document.getElementById('phone').value.trim();
      const password = document.getElementById('password').value.trim();
      const confirmPassword = document.getElementById('confirmPassword').value.trim();

      // Initialize validation flag
      let isValid = true;

      // Validate Full Name
      if (fullName.length < 5) {
          setError('nameError', 'Name must be at least 5 characters long');
          isValid = false;
      }

      // Validate Email
      if (!email.includes('@')) {
          setError('emailError', 'Email must contain @');
          isValid = false;
      }

      // Validate Phone Number
      if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
          setError('phoneError', 'Phone number must be a 10-digit number');
          isValid = false;
      }
      if (phoneNumber === '123456789') {
          setError('phoneError', 'Phone number cannot be 123456789');
          isValid = false;
      }

      // Validate Password
      if (password.toLowerCase() === 'password') {
          setError('passwordError', 'Password should not be "password"');
          isValid = false;
      }
      if (password === fullName) {
          setError('passwordError', 'Password should not be your name');
          isValid = false;
      }
      if (password.length < 8) {
          setError('passwordError', 'Password must be at least 8 characters long');
          isValid = false;
      }

      // Validate Confirm Password
      if (password !== confirmPassword) {
          setError('confirmPasswordError', 'Passwords do not match');
          isValid = false;
      }

      // If all validations pass, submit the form
      if (isValid) {
          setTimeout(function() {
              alert('Form submitted successfully');
              form.submit();
          }, 100); // Delay to ensure error clearing happens before alert
      }
  }

  function setError(elementId, message) {
      document.getElementById(elementId).innerText = message; // Set error message for a specific element
  }

  function clearErrors() {
      document.querySelectorAll('.error').forEach(errorElement => {
          errorElement.innerText = ''; // Clear all error messages
      });
  }
});
