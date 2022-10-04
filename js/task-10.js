function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

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
  let fragmentRef = document.createDocumentFragment();

  for (let i = 0; i < amount; i += 1) {
    let containerRef = document.createElement("div");
    let basicSize = 30;
    let sizeBoxes = basicSize + i * 10;
    containerRef.style.width = `${sizeBoxes}px`;
    containerRef.style.height = `${sizeBoxes}px`;
    let randomColor = getRandomHexColor();
    containerRef.style.backgroundColor = randomColor;
    console.log(containerRef);
    fragmentRef.appendChild(containerRef);
  }
  wrapperRef.appendChild(fragmentRef);
  console.log(wrapperRef);
});

buttonDestroyRef.addEventListener("click", (destroyBoxes) => {
  inputRef.value = "";
});
