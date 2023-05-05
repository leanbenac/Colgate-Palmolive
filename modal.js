// VALIDATION EMAIL
const myForm = document.getElementById("myForm");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");
const emailSuccess = document.getElementById("email-success");

function validateEmail() {
  const emailValue = emailInput.value;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regex.test(emailValue)) {
    emailInput.classList.remove("invalid");
    emailError.textContent = "";
    return true;
  } else {
    emailInput.classList.add("invalid");
    emailError.innerHTML = "Please, enter a valid email address!";
    return false;
  }
}

myForm.addEventListener("submit", function (event) {
  if (!validateEmail()) {
    event.preventDefault();
  } else {
    emailSuccess.classList.remove("hidden-sent");
    emailInput.value = "";
    setTimeout(function () {
      emailSuccess.classList.add("hidden-sent");
    }, 3000);
    event.preventDefault();
  }
});

// MODAL
const subscribeBtn = document.getElementById("subscribe-btn");
const modal = document.getElementById("modal");

subscribeBtn.onclick = function () {
  modal.classList.add("show");
};

const closeBtn = document.getElementsByClassName("close-modal")[0];
closeBtn.onclick = function () {
  modal.classList.remove("show");
};