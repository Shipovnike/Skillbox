import { Delivery } from './delivery.js';

const deliveryArr = [
    new Delivery("Ольга", "ул. Вымыслов, д. 12", 8),
    new Delivery("Дмитрий", "ул. Задачная, д. 7", 3),
    new Delivery("Оля", "ул. Ткачей, д. 43", 11)
];

const deliveryListContainer = document.getElementById('delivery-list');

function displayDeliveries() {
    deliveryListContainer.innerHTML = '';
    deliveryArr.forEach(delivery => {
        const deliveryCard = delivery.createCard();
        deliveryListContainer.appendChild(deliveryCard);
    });
}

displayDeliveries();
