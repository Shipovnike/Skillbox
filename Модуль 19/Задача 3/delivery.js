export class Delivery {
    constructor(customerName, address, distance, status = 'delivery') {
        this.customerName = customerName;
        this.address = address;
        this.distance = distance; 
        this.status = status; 
    }

    createCard(index, openEditModal, showDistance) {
        const card = document.createElement('div');
        card.className = 'delivery-card';

        const nameElement = document.createElement('h2');
        nameElement.textContent = this.customerName;

        const addressElement = document.createElement('p');
        addressElement.textContent = `Адрес: ${this.address}`;

        const statusElement = document.createElement('p');
        statusElement.textContent = `Статус: ${this.status}`;

        switch (this.status) {
            case 'delivered':
                card.style.borderColor = 'green';
                break;
            case 'canceled':
                card.style.borderColor = 'red';
                break;
            default:
                card.style.borderColor = 'orange';
                break;
        }

        const editButton = document.createElement('button');
        editButton.textContent = 'Изменить';
        editButton.onclick = (event) => {
            event.stopPropagation(); 
            openEditModal(index); 
        };

        card.onclick = () => showDistance(this.distance);
        card.appendChild(nameElement);
        card.appendChild(addressElement);
        card.appendChild(statusElement);
        card.appendChild(editButton);

        return card;
    }
}
