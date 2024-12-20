document.addEventListener("DOMContentLoaded", function() {
    const preloader = document.getElementById('preloader');

    preloader.style.display = 'block';

    setTimeout(() => {
        preloader.style.display = 'none';
        loadItems();
    }, 500); 

    document.getElementById('itemForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        addItem();
    });
});

function loadItems() {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    const itemsBody = document.getElementById('itemsBody');
    
    itemsBody.innerHTML = '';
    
    items.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = 
            `<td>${item.name}</td>
            <td>${item.shelf}</td>
            <td>${item.weight}</td>
            <td>${item.storageTime}</td>
            <td><button onclick="deleteItem(${index})">Удалить</button></td>`
        ;
        itemsBody.appendChild(row);
    });
}

function addItem() {
    const name = document.getElementById('name').value;
    const shelf = document.getElementById('shelf').value;
    const weight = document.getElementById('weight').value;
    const storageTime = document.getElementById('storageTime').value;
    const items = JSON.parse(localStorage.getItem('items')) || [];
    
    items.push({ name, shelf, weight, storageTime });
    
    localStorage.setItem('items', JSON.stringify(items));
    
    window.location.href = 'index.html';
}

function deleteItem(index) {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    
    items.splice(index, 1);
    
    localStorage.setItem('items', JSON.stringify(items));
    
    loadItems(); 
}

function sortTable(columnIndex) {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    
    items.sort((a, b) => {
        if (columnIndex === 2) {
            return parseFloat(a.weight) - parseFloat(b.weight);
        }
        return a[columnIndex].localeCompare(b[columnIndex]);
    });

    localStorage.setItem('items', JSON.stringify(items));
    
    loadItems();
}
