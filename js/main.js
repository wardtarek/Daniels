var nameInputSign = document.getElementById("name");
var emailInputSign = document.getElementById("email");
var submitBtn = document.getElementById("submitBtn");
var nameAlert = document.getElementById("nameAlert");
var emailAlert = document.getElementById("emailAlert");

submitBtn.addEventListener("click", checkInput);
function checkInput() {
  validName();
  validEmail();
}
nameInputSign.addEventListener("change", validName);
function validName() {
  var regex = /^[a-zA-Z]{2,}$/;
  if (regex.test(nameInputSign.value)) {
    nameInputSign.classList.add("is-valid");
    nameInputSign.classList.remove("is-invalid");
    nameAlert.classList.add("d-none");
    return true;
  } else {
    nameInputSign.classList.add("is-invalid");
    nameInputSign.classList.remove("is-valid");
    nameAlert.classList.remove("d-none");
    return false;
  }
}
emailInputSign.addEventListener("change", validEmail);
function validEmail() {
  var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (regex.test(emailInputSign.value)) {
    emailInputSign.classList.add("is-valid");
    emailInputSign.classList.remove("is-invalid");
    emailAlert.classList.add("d-none");
    return true;
  } else {
    emailInputSign.classList.add("is-invalid");
    emailInputSign.classList.remove("is-valid");
    emailAlert.classList.remove("d-none");
    return false;
  }
}

$(window).on("scroll", () => {
  let scrollTop = $(window).scrollTop();
  if (scrollTop >= $("#About").offset().top) {
    $("nav").addClass("scrolled");
  } else {
    $("nav").removeClass("scrolled");
  }
});

$(document).ready(() => {
  $(".spinner").fadeOut(300, () => {
    $(".loadingScreen").fadeOut(() => {
      $("body").css("overflow", "auto");
    });
  });
});

// scroll
$(".navbar-nav .nav-link").on("click", (e) => {
  let selected = $(e.target).attr("href");
  let offset = $(selected).offset().top;
  $("html, body").animate({ scrollTop: offset }, 1000);
});
