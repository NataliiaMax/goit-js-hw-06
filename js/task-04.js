
let counterValue = 0;
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const spanRef = document.querySelector('#value');
console.log(decrementButton);
console.log(incrementButton);
console.log(spanRef);


decrementButton.addEventListener("click", () => {
spanRef.textContent = counterValue -=1
})

incrementButton.addEventListener("click", () => {
  spanRef.textContent = counterValue += 1;
});



