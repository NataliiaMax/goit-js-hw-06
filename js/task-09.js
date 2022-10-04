function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const spanRef = document.querySelector(".color");
const buttonRef = document.querySelector(".change-color");

console.log(spanRef);
console.log(buttonRef);
  
  
buttonRef.addEventListener("click", (onButtonClick) => {
  let randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  spanRef.textContent = randomColor;
});

