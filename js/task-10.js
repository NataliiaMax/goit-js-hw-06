function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonCreateRef = document.querySelector("#controls button[data-create]");
const buttonDestroyRef = document.querySelector(
  "#controls button[data-destroy]"
);
const inputRef = document.querySelector("#controls input");
const wrapperRef = document.querySelector("#boxes");

console.log(buttonCreateRef);
console.log(buttonDestroyRef);
console.log(inputRef);

buttonCreateRef.addEventListener("click", (createBoxes) => {
  let amount = inputRef.value;
  console.log(amount);
  let fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i += 1) {
    let containerRef = document.createElement("div");
    let basicSize = 30;
    let sizeBoxes = basicSize + i * 10;
    containerRef.style.width = `${sizeBoxes}px`;
    containerRef.style.height = `${sizeBoxes}px`;
    let randomColor = getRandomHexColor();
    containerRef.style.backgroundColor = randomColor;
    console.log(containerRef);
    fragment.appendChild(containerRef);
  }
  boxes.appendChild(fragment);
  console.log(wrapperRef);

  console.log(boxes);
});


buttonDestroyRef.addEventListener("click", (destroyBoxes) => {
  inputRef.value = "";
});
