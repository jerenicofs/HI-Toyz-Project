//Hamburger Menu
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const ham = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!ham.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

function submitForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let gender = document.getElementsByName("gender");
  let major = document.getElementById("major").value;
  let tnc = document.getElementById("tnc").checked;
  let password = document.getElementById("password").value;
  console.log(name);
  console.log(email);

  let genderSelected = "";
  gender.forEach((element) => {
    console.log(element.checked);
    console.log(element.value);

    if (element.checked == true) {
      genderSelected = element.value;
    }
  });

  console.log(major);
  console.log(tnc);

  var err = document.getElementById("err");

  if (name.length == 0) {
    err.style.display = "block";

    err.innerHTML = "Name must be filled!";
  } else if (!email.includes("@") && !email.includes(".com")) {
    err.style.display = "block";

    err.innerHTML = "Email must be valid (contains @ and .com!)";
  } else if (password.length == 0) {
    err.style.display = "block";

    err.innerHTML = "Password must be filled!";
  } else if (genderSelected == "") {
    err.style.display = "block";

    err.innerHTML = "Gender must be selected!";
  } else if (major == "default") {
    err.style.display = "block";

    err.innerHTML = "Major must be selected!";
  }

  if (tnc == false) {
    err.style.display = "block";

    err.innerHTML = "Terms and condition must be checked!";
  }
}
