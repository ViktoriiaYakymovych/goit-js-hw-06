const listEl = document.getElementById('categories');
console.log(`Number of categories: ${listEl.children.length}`);

const headEl = document.querySelectorAll('h2');

const categoryEl = headEl.forEach(elem => {
    console.log(`Category: ${elem.textContent} Elements: ${elem.nextElementSibling.children.length}`);
});



