// Creat Variable
let userName = document.querySelector("#name");
let userEmail = document.querySelector("#mail");
let pas = document.querySelector("#password");
let submit = document.querySelector("#submit");
let valid = document.querySelector(".valid");
let signIn = document.querySelector("#sign-in");
let validateAlertName = document.querySelector(".alert");
let validateAlertEmail = document.querySelector(".alert-email");
let validateAlertPassword = document.querySelector(".alert-password");
let userDate = [];

if (localStorage.getItem("name")) {
  window.location = "./home.html";
}

if (localStorage.getItem("data")) {
  userDate = JSON.parse(localStorage.getItem("data"));
}

function addUserData() {
  if (validateName() && validateEmail() && validatePassword()) {
    for (let i = 0; i < userDate.length; i++) {
      if (userDate[i].email === userEmail.value) {
        valid.innerHTML = "email already exists";
        valid.classList.remove("active");
        return false;
      }
    }
    let data = {
      name: userName.value,
      email: userEmail.value,
      password: pas.value,
    };
    userDate.push(data);
    localStorage.setItem("data", JSON.stringify(userDate));
    clearInputValues();
    window.location = "./index.html";
  }
}

// Function To Clear Values Of Input
function clearInputValues() {
  userName.value = "";
  userEmail.value = "";
  pas.value = "";
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  addUserData();
});

signIn.addEventListener("click", () => {
  window.location = "./index.html";
});


// Validation For Name
function validateName() {
  let nameRejx = /^[A-Z][a-z]{0,}$/;
  if (nameRejx.test(userName.value)) {
    userName.classList.add("is-valid");
    userName.classList.remove("is-invalid");
    validateAlertName.classList.add("d-none");
    return true;
  } else {
    userName.classList.add("is-invalid");
    userName.classList.remove("is-valid");
    validateAlertName.classList.remove("d-none");
    return false;
  }
}
userName.addEventListener("blur", validateName);

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
  let pasRejx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
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
