const categories = document.querySelector("#categories").children;
console.log("Number of categories: ", categories.length);

const items = document.querySelectorAll(".item");
items.forEach((item) => {
  console.log("Category: ", item.querySelector("h2").textContent);
  console.log("Elements: ", item.querySelector("ul").children.length);
});
