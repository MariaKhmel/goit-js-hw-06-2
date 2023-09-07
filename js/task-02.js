const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');


const markUp = ingredients.map(el => {
  const item = document.createElement('li');
  item.textContent = el;
  item.classList.add('item')
  return item;

});
  
ingredientsList.append(...markUp);