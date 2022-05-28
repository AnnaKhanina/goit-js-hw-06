const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const  ingredientsRef = ingredients.map(item => {
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = item;
  return li;
})

const listRef = document.querySelector('#ingredients');
listRef.append(...ingredientsRef);

