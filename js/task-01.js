const ulRef = document.querySelector("#categories");
const numberCategories = ulRef.querySelectorAll(".item").length;

console.log(`Number of categories: ${numberCategories}`);

const listRef = document.querySelectorAll(".item");

listRef.forEach((el) => {
  const list = el.querySelectorAll("ul > li").length;
  let category = el.querySelector("h2");

  console.log(`Category: ${category.textContent}`);
  console.log(`Elements: ${list}`);
});
