
let counterValue = 0;
const decrementButton = document.querySelectorAll('#counter button[data-action="decrement"]');
const incrementButton = document.querySelectorAll('#counter button[data-action="increment"]');
console.log(decrementButton);
console.log(incrementButton);

decrementButton.forEach(el => {
    el.addEventListener("click", (dec) => {
        counterValue -= 1;
        return (document.getElementById("value").innerHTML = counterValue);
      })
         }
);

incrementButton.forEach((el) => {
  el.addEventListener("click", (inc) => {
    counterValue += 1;
    return (document.getElementById("value").innerHTML = counterValue);
    });
 });

