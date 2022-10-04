const ulRef = document.querySelector("#categories");
const numberCategories = ulRef.querySelectorAll(".item").length;

console.log(`Number of categories: ${numberCategories}`);

const listRef = document.querySelectorAll(".item");

listRef.forEach((el) => {
  let list = el.lastElementChild.children.length;
  let category = el.firstElementChild;
  console.log(`Category: ${category.textContent}`);
  console.log(`Elements: ${list}`);
});
