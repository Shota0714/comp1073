const products = [
    { name: 'Laptop', price: 1200 },
    { name: 'Mouse', price: 25 },
    { name: 'Keyboard', price: 75 },
    { name: 'Monitor', price: 300 },
    { name: 'Tablet', price: 400 },
];

// Filtering for affordable products
const affordableProducts = products.filter(product => product.price < 100);
const affordableList = document.getElementById('affordable-list');

for (let i = 0; i < affordableProducts.length; i++) {
    const product = affordableProducts[i];
    const listItem = document.createElement('li');
    listItem.textContent = `${product.name} $${product.price}`;
    affordableList.appendChild(listItem);
};
