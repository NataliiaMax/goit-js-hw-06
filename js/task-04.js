// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

const containerCounterValue = document.querySelectorAll("#counter button");
let counterValue = 0;
  const span  = document.querySelectorAll("#value");
// console.log(containerCounterValue);
console.log(span);
const decrementButton = document.querySelectorAll('#counter button[data-action="decrement"]');
const incrementButton = document.querySelectorAll('#counter button[data-action="increment"]');
console.log(decrementButton);
console.log(incrementButton);

// console.log(document.getElementById('value').innerHTML);
// console.log();
// containerCounterValue.forEach(el => {
//     el.addEventListener('click', onContainerCounterValueClick);
// });


// function fncontainerCounterValue() {
//   if (decrementButton.addEventListener("click", onContainerCounterValueClick)) {
//     return (document.getElementById("value").innerHTML = counterValue -= 1);
//   }
//   if (incrementButton.addEventListener("click", onContainerCounterValueClick)) {
//     return (document.getElementById("value").innerHTML = counterValue += 1);
//   }
// };

// fncontainerCounterValue(containerCounterValue);

// decrementButton.forEach(el => {
//     el.addEventListener('click', onContainerCounterValueClick);
//     counterValue -= 1;
//     return (document.getElementById("value").innerHTML = counterValue);
// }
// );

// incrementButton.forEach((el) => {
//     el.addEventListener("click", onContainerCounterValueClick);
//  document.getElementById("value").innerHTML = counterValue += 1;
// });

function onContainerCounterValueClick() {
// if (decrementButton.addEventListener("click", onContainerCounterValueClick)) {
//     counterValue -= 1;
//     return (document.getElementById("value").innerHTML = counterValue);
// }
// if (incrementButton.addEventListener("click", onContainerCounterValueClick)) {
//     counterValue += 1
//   return (document.getElementById("value").innerHTML = counterValue);
// }
    console.log("Click");
   
};

function avb() {
          
    if (decrementButton.forEach(el => {
        el.addEventListener('click', onContainerCounterValueClick)
    })) {
        counterValue -= 1;
        return (document.getElementById("value").innerHTML = counterValue);
    };
    if (incrementButton.forEach((el) => {
        el.addEventListener("click", onContainerCounterValueClick)
    })) {
        counterValue += 1;
        return (document.getElementById("value").innerHTML = counterValue);
    }
};


