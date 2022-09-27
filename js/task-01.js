const numberCategories = document.querySelector("ul").children.length;
console.log(`Number of categories: ${numberCategories}`);

const list = document.querySelector('#categories').children;
for (let element of list) {
    let category = element.firstElementChild.textContent;   
    let quantityElements = element.lastElementChild.children.length;
    console.log(`Category: ${category} \nElements: ${quantityElements}`);
};