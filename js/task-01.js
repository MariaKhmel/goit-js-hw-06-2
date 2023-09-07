const refs = {
    items: document.querySelectorAll('.item'),
    categoryName: document.querySelectorAll('li.item'),
}

const { items, categoryName } = refs;

console.log(`Number of categories:${items.length}`);
categoryName.forEach(category => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.children.length}`);
})