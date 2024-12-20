import { EditDelivery } from './delivery.js';

const deliveryArr = [
    new EditDelivery("Ольга", "ул. Вымыслов, д. 12", 8, "delivery"),
    new EditDelivery("Дмитрий", "ул. Задачная, д. 7", 3, "delivered"),
    new EditDelivery("Оля", "ул. Ткачей, д. 43", 11, "canceled")
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
