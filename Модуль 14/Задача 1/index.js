const filmForm = document.getElementById('filmForm');
const filmTableBody = document.querySelector('#filmTable tbody');
const sortSelect = document.getElementById('sortSelect');
const errorMessage = document.getElementById('errorMessage');

let films = JSON.parse(localStorage.getItem('films')) || [];

function displayFilms() {
    filmTableBody.innerHTML = '';
    films.forEach((film, index) => {
        const row = document.createElement('tr');
        row.innerHTML = 
            `<td>${film.title}</td>
            <td>${film.genre}</td>
            <td>${film.year}</td>
            <td>${film.watched ? 'Да' : 'Нет'}</td>
            <td>
                <button onclick="editFilm(${index})">Редактировать</button>
                <button onclick="deleteFilm(${index})">Удалить</button>
            </td>`
        ;
        filmTableBody.appendChild(row);
    });
}

filmForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const genre = document.getElementById('genre').value;
    const year = document.getElementById('year').value;
    const watched = document.getElementById('watched').checked;

    if (!title || !genre || !year) {
        errorMessage.textContent = "Пожалуйста, заполните все поля.";
        return;
    }

    errorMessage.textContent = "";

    const newFilm = { title, genre, year, watched };
    films.push(newFilm);
    localStorage.setItem('films', JSON.stringify(films));
    displayFilms();

    filmForm.reset();
});

function deleteFilm(index) {
    films.splice(index, 1);
    localStorage.setItem('films', JSON.stringify(films));
    displayFilms();
}

function editFilm(index) {
    const film = films[index];
    document.getElementById('title').value = film.title;
    document.getElementById('genre').value = film.genre;
    document.getElementById('year').value = film.year;
    document.getElementById('watched').checked = film.watched;
    deleteFilm(index);
}

sortSelect.addEventListener('change', function() {
    const sortBy = this.value;

    films.sort((a, b) => {
        if (a[sortBy] > b[sortBy]) return 1;
        if (a[sortBy] < b[sortBy]) return -1;
        return 0;
    });

    displayFilms();
});

displayFilms();
