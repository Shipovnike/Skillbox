import { Delivery } from './delivery.js';

const deliveryArr = [
    new Delivery("Ольга", "ул. Вымыслов, д. 12", 8, "delivery"),
    new Delivery("Дмитрий", "ул. Задачная, д. 7", 3, "delivered"),
    new Delivery("Оля", "ул. Ткачей, д. 43", 11, "canceled")
];

const deliveryListContainer = document.getElementById('delivery-list');
const editModal = document.getElementById('edit-modal');
const distanceModal = document.getElementById('distance-modal');
const closeButton = document.querySelector('.close-button');
const saveButton = document.getElementById('save-button');
const closeDistanceButton = distanceModal.querySelector('.close-button');

function displayDeliveries() {
    deliveryListContainer.innerHTML = '';
    deliveryArr.forEach((delivery, index) => {
        const deliveryCard = delivery.createCard(index, openEditModal, showDistance);
        deliveryListContainer.appendChild(deliveryCard);
    });
}

function openEditModal(index) {
    const delivery = deliveryArr[index];
    document.getElementById('customer-name').value = delivery.customerName;
    document.getElementById('address').value = delivery.address;
    document.getElementById('distance').value = delivery.distance;
    document.getElementById('status').value = delivery.status;
    
    editModal.style.display = 'block';

    saveButton.onclick = () => {
        delivery.customerName = document.getElementById('customer-name').value;
        delivery.address = document.getElementById('address').value;
        delivery.distance = parseFloat(document.getElementById('distance').value);
        delivery.status = document.getElementById('status').value;

        editModal.style.display = 'none';
        displayDeliveries(); 
    };
}

function showDistance(distance) {
    document.getElementById('distance-info').textContent = `Расстояние: ${distance} км`;
    distanceModal.style.display = 'block';
}

closeButton.onclick = () => {
    editModal.style.display = 'none';
};

closeDistanceButton.onclick = () => {
    distanceModal.style.display = 'none';
};

window.onclick = (event) => {
    if (event.target === editModal) {
        editModal.style.display = 'none';
    }
    if (event.target === distanceModal) {
        distanceModal.style.display = 'none';
    }
};

displayDeliveries();
