var mobile = "";
var email = "";
localStorage.setItem("New_email", email);
localStorage.setItem("New_number", mobile);
document.querySelector("#mob").addEventListener("click", function () {
  window.location.assign("mobile.html");
  console.log("clicked");
});
document.querySelector("#mail").addEventListener("click", function () {
  window.location.assign("mobile.html");
  // console.log("clicked");
});
