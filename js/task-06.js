const inputRef = document.querySelector("#validation-input");
console.log(inputRef);

inputRef.addEventListener("blur", (onInputBlur) => {
  let input = inputRef.value.length;

  if (input === parseInt(inputRef.dataset.length)) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }

  console.log(input);
});

console.log(inputRef.value.length);
