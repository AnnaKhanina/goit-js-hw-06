const categoriesListRef = document.querySelector('#categories');
const numberOfCategories = categoriesListRef.children.length;

console.log(`Number of categories: ${numberOfCategories}`);

[...categoriesListRef.children].forEach((item) => {
    const categoryHeader = item.querySelector('h2').textContent;
    const amountOfCategoryElements = item.querySelectorAll('li').length;

    console.log(`Category: ${categoryHeader}`);
    console.log(`Elements: ${amountOfCategoryElements}`);
});