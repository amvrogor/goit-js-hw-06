const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
    return;
  }
  console.log({ email: email.value, password: password.value });
  event.currentTarget.reset();
  return;
}
