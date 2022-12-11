let counterValue = 0;
const decButton = document.querySelector('button[data-action="decrement"]');
const incButton = document.querySelector('button[data-action="increment"]');
const span = document.querySelector("#value");

const decrease = () => {
  counterValue -= 1;
  span.textContent = counterValue;
};

const increase = () => {
  counterValue += 1;
  span.textContent = counterValue;
};

decButton.addEventListener("click", decrease);
incButton.addEventListener("click", increase);
