// Creat Variable

let userEmail = document.querySelector("#mail");
let pas = document.querySelector("#password");
let submit = document.querySelector("#submit");
let valid = document.querySelector(".valid");
let signUP = document.querySelector("#sign-up");
let validResult = document.querySelector(".result-valid");
let validateAlertEmail = document.querySelector(".alert-email");
let validateAlertPassword = document.querySelector(".alert-password");
let userDate = [];

if (localStorage.getItem("name")) {
  window.location = "./home.html";
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (validateEmail() && validatePassword()) {
    if (localStorage.getItem("data")) {
      userDate = JSON.parse(localStorage.getItem("data"));
      for (let i = 0; i < userDate.length; i++) {
        if (
          userDate[i].email == userEmail.value &&
          userDate[i].password == pas.value
        ) {
          localStorage.setItem("name", userDate[i].name);
          validResult.innerHTML = "";
          window.location = "./home.html";
        } else {
          validResult.innerHTML = `Email Or Password Is Wrong`;
        }
      }
    } else {
      // validResult.style.display = "block";
      validResult.innerHTML = `account isn’t registered with us`;
    }
  }
});

// Go to the registration page When Onclick SignUp Button
signUP.addEventListener("click", () => {
  window.location = "./signup.html";
});

// Validation For Email
function validateEmail() {
  let emailRejx =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailRejx.test(userEmail.value)) {
    userEmail.classList.add("is-valid");
    userEmail.classList.remove("is-invalid");
    validateAlertEmail.classList.add("d-none");
    return true;
  } else {
    userEmail.classList.add("is-invalid");
    userEmail.classList.remove("is-valid");
    validateAlertEmail.classList.remove("d-none");
    return false;
  }
}
userEmail.addEventListener("blur", validateEmail);

// Validation For Password
function validatePassword() {
  let pasRejx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  if (pasRejx.test(pas.value)) {
    pas.classList.add("is-valid");
    pas.classList.remove("is-invalid");
    validateAlertPassword.classList.add("d-none");
    return true;
  } else {
    pas.classList.add("is-invalid");
    pas.classList.remove("is-valid");
    validateAlertPassword.classList.remove("d-none");
    return false;
  }
}
pas.addEventListener("blur", validatePassword);
