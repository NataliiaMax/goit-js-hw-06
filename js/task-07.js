
const inputRef = document.querySelector("#font-size-control");
console.log(inputRef);

const spanRef = document.querySelector("#text");
console.log(spanRef);

inputRef.addEventListener("input", (onInputChange) => {
    spanRef.style.fontSize = inputRef.value + 'px'
});