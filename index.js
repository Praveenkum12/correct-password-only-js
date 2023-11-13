"use strict";

const inputEl = document.querySelector("input");
const btnEl = document.querySelector(".submit-btn");
let status;

function checkingStatus(status) {
  if (status === "correct") {
    btnEl.classList.remove("right");
    btnEl.classList.remove("left");
    btnEl.classList.add("correct");
  }
  if (status === "left") {
    btnEl.classList.remove("right");
    btnEl.classList.add("left");
  }
  if (status === "right") {
    btnEl.classList.remove("left");
    btnEl.classList.add("right");
  }
  if (status === "empty") {
    btnEl.classList.remove("right");
    btnEl.classList.remove("left");
    btnEl.classList.remove("correct");
  }
}

inputEl.addEventListener("input", function (e) {
  const password = inputEl.value;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSymbol = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);
  const hasMinLength = password.length >= 8;

  if (hasUppercase && hasLowercase && hasNumber && hasSymbol && hasMinLength) {
    status = "correct";
    checkingStatus(status);
  } else if (!password) {
    status = "empty";
    checkingStatus(status);
  } else {
    status = "incorrect";
  }
});

btnEl.addEventListener("mouseenter", function () {
  if (!status) return;
  if (status === "incorrect" || status === "right") {
    status = "left";
    checkingStatus(status);
  } else if (status === "left") {
    status = "right";
    checkingStatus(status);
  }
});

btnEl.addEventListener("click", function (e) {
  e.preventDefault();
  if (status === "correct") {
    let isOkay = window.confirm("Password is very strong!!");
    if (isOkay) {
      status = undefined;
      inputEl.value = "";
    }
  } else {
    alert(
      "Your password must have 1 uppcase, 1 lowercase, 1 number, 1 special character and also the length should be greater than 8"
    );
  }
});
