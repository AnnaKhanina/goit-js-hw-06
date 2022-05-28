function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const refs = {
  changeColorBtn: document.querySelector('.change-color'),
  color: document.querySelector('.color'),
};

refs.changeColorBtn.addEventListener('click', () => {
  const colorRandom = getRandomHexColor();
  
  document.body.style.backgroundColor = colorRandom;
  refs.color.textContent = colorRandom;
});
