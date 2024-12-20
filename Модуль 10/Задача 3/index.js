let prices = [100, 500, 250, 750, 300];

const priceList = document.getElementById('priceList');
const sortAscButton = document.getElementById('sortAscButton');
const sortDescButton = document.getElementById('sortDescButton');

function displayPrices() {
    priceList.innerHTML = '';
    
    prices.forEach(price => {
        const listItem = document.createElement('li');
        listItem.textContent = price + ' ₽';
        priceList.appendChild(listItem);
    });
}

function sortPricesAsc() {
    prices.sort((a, b) => a - b); 
    displayPrices(); 
}

function sortPricesDesc() {
    prices.sort((a, b) => b - a); 
    displayPrices();
}

sortAscButton.addEventListener('click', sortPricesAsc);
sortDescButton.addEventListener('click', sortPricesDesc);

displayPrices();

