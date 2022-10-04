function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divRef = document.querySelector("#controls");
const buttonCreateRef = document.querySelector("#controls button[data-create]");
const buttonDestroyRef = document.querySelector(
  "#controls button[data-destroy]"
);
const inputRef = document.querySelector("#controls input");
const wrapperRef = document.querySelector("#boxes");

console.log(divRef);
console.log(buttonCreateRef);
console.log(buttonDestroyRef);
console.log(inputRef);

inputRef.addEventListener("input", (event) => {
  buttonCreateRef.addEventListener("click", (onButtonClick) => {
    let amount = inputRef.value;
    function createBoxes(amount) {
      let basicSize = 30;
      const wrapperRef = document.createElement("div"[amount]);
      wrapperRef.append(div[(id = "boxes")]);
 

      for (let i = 0; i < amount; i += 1) {
        let sizeBoxes = (basicSize += i + 10);
        wrapperRef.style.width = `${sizeBoxes}px`;
        wrapperRef.style.height = `${sizeBoxes}px`;
        wrapperRef.style.backgroundColor = getRandomHexColor;
      }
    }
  });
});

function destroyBoxes() {
  buttonDestroyRef.addEventListener("click", (onButtonDestroyClick) => {
    inputRef.innerHTML = '';
  });
}
destroyBoxes();

// var render = document.querySelector('[data-action="render"]');
// var destroy = document.querySelector('[data-action="destroy"]');
// var boxes = document.getElementById("boxes");
// render.addEventListener("click", getAmount);
// destroy.addEventListener("click", destroyBoxes);

// function getAmount() {
//   var amount = +document.querySelector("#controls input").value;
//   createBoxes(amount);
// }

// function createBoxes(amount) {
//   var basicSize = 30;
//   var fragment = document.createDocumentFragment();
//   for (var i = 0; i < amount; i++) {
//     var size = basicSize + i * 10;
//     var div = document.createElement("div");
//     div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
//     fragment.appendChild(div);
//   }
//   boxes.appendChild(fragment);
// }

// function destroyBoxes() {
//   boxes.innerHTML = "";
// }

// function random() {
//   return Math.floor(Math.random() * 256);
// }

// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
