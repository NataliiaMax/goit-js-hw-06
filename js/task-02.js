const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector("#ingredients"); 

const makeNewListIngredients = (options) => {
  return options.map(option => {
 
    const listEl = document.createElement('li');
    listEl.classList.add('item');
    listEl.textContent = option;
    
    return listEl
  })
};

const elements = makeNewListIngredients(ingredients);
listIngredients.append(...elements);
console.log(elements);




