const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const arr = ingredients.map((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  li.classList.add("item");
  return li;
});
list.append(...arr);

// ingredients.reduce((acc, element) => {
//   const ingredient = (acc = element);
//   const li = document.createElement("li");
//   li.textContent = ingredient;
//   li.classList.add("item");
//   list.append(li);
// }, 0);

// const markup = ingredients
//   .map((ingredient) => `<li class="item">${ingredient}</li>`)
//   .join("");
// list.innerHTML = markup;
