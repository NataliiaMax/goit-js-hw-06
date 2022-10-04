const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};
console.log(refs.input);
console.log(refs.span);

refs.input.addEventListener("input", (onInputChange) => {
  if (onInputChange.currentTarget.value) {
    refs.span.textContent = onInputChange.currentTarget.value;
  } else {
    refs.span.textContent = "Anonymous";
  }
});
