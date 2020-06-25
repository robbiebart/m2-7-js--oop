// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//    - title (string)
//    - genre (string)
//    - author (string)
//    - isRead (boolean - whether or not you've read the book)
//
// Declare the books as book1, book2, book3, book4, book5
//
// If the book doesn't provide a value for `isRead`, it should default to
// `false`.
//
// Console.log them to verify that all is working.

class Book {
    constructor(title, genre, author, isRead) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.isRead = false;
    }
}


// const boots = new Cat("Boots", "Siamese");
const book1 = new Book('book1', 'fiction', 'book1author', false);
const book2 = new Book('book2', 'fiction', 'book2author', false);
const book3 = new Book('book3', 'fiction', 'book3author', false);
const book4 = new Book('book4', 'fiction', 'book4author', false);
const book5 = new Book('book5', 'fiction', 'book4author', false);

console.log(book1, book2, book3, book4, book5);
