const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.getElementById('ingredients');

  ingredients.forEach(ingredient => {
  const makeItem = document.createElement('li');
  makeItem.textContent = ingredient;
  makeItem.classList.add('item');
  const makeItems = makeItem;
  listEl.append(makeItems);
});


console.log(listEl);
