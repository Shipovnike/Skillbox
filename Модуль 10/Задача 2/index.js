const addButton = document.getElementById('addButton');
const removeButton = document.getElementById('removeButton');
const itemList = document.getElementById('itemList');

addButton.addEventListener('click', function() {
    const newItem = document.createElement('li'); 
    newItem.textContent = 'Новый элемент списка'; 
    itemList.appendChild(newItem);
});

removeButton.addEventListener('click', function() {
    const lastItem = itemList.lastElementChild; 
    if (lastItem) {
        itemList.removeChild(lastItem); 
    }
});
