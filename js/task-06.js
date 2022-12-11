const input = document.querySelector("#validation-input");

input.addEventListener("blur", (event) => {
  if (Number(input.dataset.length) !== event.currentTarget.value.length) {
    input.classList.add("invalid");
  } else input.classList.replace("invalid", "valid");
});
