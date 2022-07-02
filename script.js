let inputs = document.querySelectorAll("input");
inputs.forEach((input) =>
  input.addEventListener("change", (e) => {
    label = e.target.closest(".userBox").querySelector("label");
    if (input.value != "") {
      label.style.top = "-30px";
      console.log(input.value);
    }else{
        label.style.top = "0px";
    }
  }),
);
