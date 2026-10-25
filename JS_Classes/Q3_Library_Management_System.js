
class Book {
    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (this.isIssued) {
            console.log(this.title + " is already issued.");
        } else {
            this.isIssued = true;
            console.log(this.title + " issued successfully.");
        }
    }

    returnBook() {
        if (this.isIssued) {
            this.isIssued = false;
            console.log(this.title + " returned successfully.");
        } else {
            console.log(this.title + " is already available.");
        }
    }
}

const books = [
    new Book("Java Programming", "James Gosling", "101"),
    new Book("Python Basics", "Guido van Rossum", "102"),
    new Book("Web Development", "Jon Duckett", "103"),
    new Book("Data Structures", "Mark Allen", "104")
];

function displayAvailableBooks() {
    console.log("\nAvailable Books:");

    const availableBooks = books.filter(book => !book.isIssued);

    if (availableBooks.length === 0) {
        console.log("No books available.");
    } else {
        availableBooks.forEach(book => {
            console.log(
                book.title + " | " +
                book.author + " | ISBN: " + book.ISBN
            );
        });
    }
}

function searchAndIssueBook(isbn) {
    const book = books.find(book => book.ISBN === isbn);

    if (book) {
        book.issueBook();
    } else {
        console.log("Book not found.");
    }
}

displayAvailableBooks();

searchAndIssueBook("102");

displayAvailableBooks();

books[1].returnBook();

displayAvailableBooks();
