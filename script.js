let inputs = document.querySelectorAll("input");
inputs.forEach((input) =>
  input.addEventListener("change", (e) => {
    label = e.target.closest(".userBox").querySelector("label");
    if (input.value != "") {
      label.style.top = "-20px";
      label.style.color = "#" + "03e9f4";
      label.style.fontSize= "12px";
      console.log(input.value);
    }else{
        label.style.top = "0px";
        label.style.fontSize= "18px";
    }
  }),
);
