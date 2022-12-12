function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");
const boxes = document.querySelector("#boxes");
boxes.style.display = "flex";
boxes.style.alignItems = "end";
boxes.style.flexWrap = "wrap";
let boxSize = 30;

function createBoxes() {
  const amount = Number(input.value);
  for (let i = 1; i <= amount; i += 1) {
    boxSize += 10;
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.margin = "10px";
    box.style.backgroundColor = getRandomHexColor();
    boxes.append(box);
  }
}

create.addEventListener("click", createBoxes);
destroy.addEventListener("click", (event) => {
  boxSize = 30;
  boxes.innerHTML = "";
});
