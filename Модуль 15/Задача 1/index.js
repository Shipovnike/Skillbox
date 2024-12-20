function handleFormSubmit(e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const genre = document.getElementById("genre").value;
    const releaseYear = document.getElementById("releaseYear").value;
    const isWatched = document.getElementById("isWatched").checked;

    if (!title || !genre || !releaseYear) {
        alert("Пожалуйста, заполните все поля!");
        return;
    }

    const film = {
        title: title,
        genre: genre,
        releaseYear: releaseYear,
        isWatched: isWatched,
    };

    addFilm(film);
}

async function addFilm(film) {
    await fetch("https://sb-film.skillbox.cc/films", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            email: "ovikdevil@gmail.com",
        },
        body: JSON.stringify(film),
    });
    renderTable();
}

async function renderTable(filterParams = {}) {
    const filmsResponse = await fetch("https://sb-film.skillbox.cc/films", {
        headers: {
            email: "ovikdevil@gmail.com",
        },
    });
    const films = await filmsResponse.json();

    const filteredFilms = films.filter(film => {
        return (!filterParams.title || film.title.toLowerCase().includes(filterParams.title.toLowerCase())) &&
               (!filterParams.genre || film.genre.toLowerCase() === filterParams.genre.toLowerCase()) &&
               (!filterParams.releaseYear || film.releaseYear === filterParams.releaseYear) &&
               (filterParams.isWatched === undefined || film.isWatched === filterParams.isWatched);
    });

    const filmTableBody = document.getElementById("film-tbody");
    filmTableBody.innerHTML = ""; 
    filteredFilms.forEach((film) => {
        const row = document.createElement("tr");
        row.innerHTML = 
            `<td>${film.title}</td>
            <td>${film.genre}</td>
            <td>${film.releaseYear}</td>
            <td>${film.isWatched ? "Да" : "Нет"}</td>
            <td><button onclick="deleteFilm('${film.id}')">Удалить</button></td>`
        ;
        filmTableBody.appendChild(row);
    });
}

async function deleteFilm(id) {
    await fetch(`https://sb-film.skillbox.cc/films/${id}`, {
        method: "DELETE",
        headers: {
            email: "ovikdevil@gmail.com",
        },
    });
    renderTable();
}

async function deleteAllFilms() {
    await fetch("https://sb-film.skillbox.cc/films", {
        method: "DELETE",
        headers: {
            email: "ovikdevil@gmail.com",
        },
    });
    renderTable();
}

function filterFilms() {
    const titleFilter = document.getElementById("titleFilter").value;
    const genreFilter = document.getElementById("genreFilter").value;
    const yearFilter = document.getElementById("yearFilter").value;
    const isWatchedFilter = document.getElementById("isWatchedFilter").checked;

    renderTable({
        title: titleFilter,
        genre: genreFilter,
        releaseYear: yearFilter,
        isWatched: isWatchedFilter ? true : undefined, 
    });
}

document.getElementById("film-form").addEventListener("submit", handleFormSubmit);
document.getElementById("titleFilter").addEventListener("input", filterFilms);
document.getElementById("genreFilter").addEventListener("change", filterFilms);
document.getElementById("yearFilter").addEventListener("input", filterFilms);

document.getElementById("isWatchedFilter").addEventListener("change", filterFilms);
document.getElementById("deleteAllButton").addEventListener("click", deleteAllFilms);

renderTable();
