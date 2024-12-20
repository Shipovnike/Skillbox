export class Delivery {
    constructor(customerName, address, distance, status = 'delivery') {
        this.customerName = customerName;
        this.address = address;
        this.distance = distance;
        this.status = status;
    }

    createCard() {
        const card = document.createElement('div');
        card.className = 'delivery-card';

        const nameElement = document.createElement('h2');
        nameElement.textContent = this.customerName;

        const addressElement = document.createElement('p');
        addressElement.textContent = `Адрес: ${this.address}`;

        const distanceElement = document.createElement('p');
        distanceElement.textContent = `Расстояние: ${this.distance} км`;

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
        editButton.onclick = () => this.editDelivery();

        card.appendChild(nameElement);
        card.appendChild(addressElement);
        card.appendChild(distanceElement);
        card.appendChild(statusElement);
        card.appendChild(editButton);

        return card;
    }

    editDelivery() {
    }
}

export class EditDelivery extends Delivery {
    constructor(customerName, address, distance, status) {
        super(customerName, address, distance, status);
    }

    editDelivery() {
        const modal = document.getElementById('edit-modal');
        const nameInput = document.getElementById('customer-name');
        const addressInput = document.getElementById('address');
        const distanceInput = document.getElementById('distance');
        const statusSelect = document.getElementById('status');

        nameInput.value = this.customerName;
        addressInput.value = this.address;
        distanceInput.value = this.distance;
        statusSelect.value = this.status;

        modal.style.display = 'flex';

        const saveButton = document.getElementById('save-button');
        saveButton.onclick = () => {
            this.customerName = nameInput.value;
            this.address = addressInput.value;
            this.distance = parseFloat(distanceInput.value);
            this.status = statusSelect.value;
            modal.style.display = 'none';
            const deliveryListContainer = document.getElementById('delivery-list');
            deliveryListContainer.innerHTML = '';
            displayDeliveries();
        };

        const closeButton = document.querySelector('.close-button');
        closeButton.onclick = () => {
            modal.style.display = 'none';
        };
        
        window.onclick = (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };
    }
}
