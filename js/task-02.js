const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const  ingredientsRef = ingredients.map(item => {
  const liRef = document.createElement('li');
  liRef.classList.add('item');
  liRef.textContent = item;
  return liRef;
})

const listRef = document.querySelector('#ingredients');
listRef.append(...ingredientsRef);

