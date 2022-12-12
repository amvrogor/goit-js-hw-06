const input = document.querySelector("#validation-input");

input.addEventListener("blur", (event) => {
  if (Number(input.dataset.length) !== event.currentTarget.value.length) {
    input.classList.add("invalid");
    input.classList.remove("valid");
  } else {
    input.classList.add("valid");
    input.classList.remove("invalid");
  }
});
