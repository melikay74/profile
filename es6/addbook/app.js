class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}


class UI {
    addBookToList(book) {
        const list = document.getElementById('book-list');
        // Create tr element
        const row = document.createElement('tr');
        // Insert columns
        row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="" class="delete">x</a></td>
  `;
        list.appendChild(row);
    }

    showAlert(msg, className) {
        // Construct alert element
        const alertDiv = document.createElement('div');
        // Add classes
        alertDiv.className = `alert ${className}`;
        // Add message text
        alertDiv.appendChild(document.createTextNode(msg));
        // Insert into DOM
        // Get parent
        const container = document.querySelector('.container');
        // Get form
        const form = document.querySelector('#book-form');
        // Insert alert, param1=elem to insert, param2=where to insertBefore
        container.insertBefore(alertDiv, form);

        // Hide alert after 3 sec
        setTimeout(function() {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    // Delete Book
    deleteBook(target) {
        if (target.className === 'delete') {
            //traverse dom to get parent of parent (li) of target (a tag)
            target.parentElement.parentElement.remove();
        }
    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

// Local Storage class
class Store {
    //fetch from storage
    // static methods, class doesn't need to be instantiated when called
    static getBooks() {
        let books;
        // check LS
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            //convert to object
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static displayBooks() {
        //display in UI if browser reloaded
        const books = Store.getBooks();
        books.forEach(function(book) {
            const ui = new UI;
            // add book to ui using UI class method
            ui.addBookToList(book);
        });
    }

    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        // use isbn to target the unique item
        const books = Store.getBooks();
        books.forEach(function(book, index) {
            if (book.isbn === isbn) {
                books.splice(index, 1);

            }
        });
        localStorage.setItem('books', JSON.stringify(books));

    }
}
// DOM Load event (show what is in LS)
document.addEventListener('DOMContentLoaded', Store.displayBooks);

//Event Listener: Add Book
document.getElementById('book-form').addEventListener('submit', function(e) {
    // Get form values on submit
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

    // Create book object with form values (instantiate book)
    const book = new Book(title, author, isbn);

    // Instantiate UI
    const ui = new UI();

    //Validate
    if (title === '' || author === '' || isbn === '') {
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        // Add book to list
        ui.addBookToList(book);

        // Add to local storage
        Store.addBook(book);

        // Show success alert
        ui.showAlert('Book Added!', 'success');

        // Clear fields, (to add more books)
        ui.clearFields();
    }
    e.preventDefault();
});

//Event Listener: Delete Book
// target parent first (booklist), there are multiple li with same class
document.getElementById('book-list').addEventListener('click', function(e) {
    // Instantiate UI
    const ui = new UI();

    // Delete book
    ui.deleteBook(e.target);

    // Remove from LS: get isbn #, parent of target is td, get textContent of prevElem sibling to get isbn
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    // Show message
    ui.showAlert('Book removed!', 'success');
    e.preventDefault();
});