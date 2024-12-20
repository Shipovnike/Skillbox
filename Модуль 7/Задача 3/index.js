let products = ["Яблоко", "Арбуз", "Банан", "Груша"];


function displayProducts() {
    const productList = document.getElementById('productList');
    productList.innerHTML = ''; 

    products.sort();

    products.forEach(product => {
        const listItem = document.createElement('li');
        listItem.textContent = product;
        productList.appendChild(listItem);
    });
}

function addProduct() {
    const newProduct = prompt("Введите название товара:");

    if (!newProduct) {
        alert("Название товара не введено!");
        return;
    }

    products.push(newProduct);
 
    displayProducts();
}

document.getElementById('addProductButton').addEventListener('click', addProduct);

displayProducts();
