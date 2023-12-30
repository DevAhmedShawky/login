let logOut = document.querySelector("#log-out");
let user = document.querySelector("#user-name");
let userName = localStorage.getItem("name");

if (userName) {
  user.innerHTML = `welcome ${userName}`;
}

logOut.addEventListener("click", () => {
  localStorage.clear();
  window.location = "./index.html";
});
