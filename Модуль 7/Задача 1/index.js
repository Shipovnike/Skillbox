let books = [
    '1984 - Джордж Оруэлл',
    'Убить пересмешника - Харпер Ли',
    'Мастер и Маргарита - Михаил Булгаков',
    'Гарри Поттер и философский камень - Дж.К. Роулинг'
];

function displayBooks() {
    const bookList = document.querySelector('.book-list');
    bookList.innerHTML = '';

    books.forEach((book) => {
        const li = document.createElement('li');
        li.textContent = book;
        bookList.appendChild(li);
    });
}

function addBook() {
    const newBook = prompt('Введите название книги:');
    
    if (newBook) {
        books.push(newBook);
        displayBooks();
    } else {
        alert('Название книги не введено!');
    }
}

function searchBook() {
    const searchTerm = prompt('Введите название книги для поиска:');
    
    if (searchTerm) {
        const bookListItems = document.querySelectorAll('.book-list li');
        let found = false;

        bookListItems.forEach((li) => {
            if (li.textContent.toLowerCase().includes(searchTerm.toLowerCase())) {
                li.style.backgroundColor = 'yellow';
                found = true;
            } else {
                li.style.backgroundColor = '';
            }
        });

        if (!found) {
            alert('Книга не найдена!');
        }
    }
}

document.querySelector('.add-book').addEventListener('click', addBook);
document.querySelector('.search-book').addEventListener('click', searchBook);

displayBooks();