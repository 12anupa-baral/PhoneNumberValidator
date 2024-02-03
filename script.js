document.addEventListener("DOMContentLoaded", function () {
  let regex = /^(?:\+977)?[\s-]?\d{3}[\s-]?\d{4}[\s-]?\d{2,3}$/;

  let check = document.getElementById("check-btn");
  let clear = document.getElementById("clear-btn");
  let input = document.getElementById("user-input");
  let result = document.getElementById("results-div");

  check.addEventListener("click", function () {
    validatePhoneNumber();
  });

  clear.addEventListener("click", function () {
    clearInput();
  });

  function validatePhoneNumber() {
    if (input.value === "") {
      alert("Please provide a phone number");
      return;
    } else {
      if (regex.test(input.value)) {
        result.innerText = "Valid Nepali number: " + input.value;
      } else {
        result.innerText = "Invalid Nepali number: " + input.value;
      }
    }
  }

  function clearInput() {
    input.value = "";
    result.innerText = "";
  }
});
