document.addEventListener("DOMContentLoaded", function () {
  let password = document.querySelector("#password");
  let confirmPassword = document.querySelector("#confirmPassword");
  let error = document.querySelector("#error");

  function checkPasswordMatch() {
    if (password.value !== confirmPassword.value) {
      error.innerHTML = "* Passwords do not match";
    } else {
      error.innerHTML = "";
    }
  }

  // Event listener to check for password matching on input change
  password.addEventListener("input", checkPasswordMatch);
  confirmPassword.addEventListener("input", checkPasswordMatch);
});
