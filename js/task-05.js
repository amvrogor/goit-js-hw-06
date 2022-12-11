const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  const query = event.currentTarget.value;
  if (!query) {
    span.textContent = "Anonymous";
  } else span.textContent = query;
});
