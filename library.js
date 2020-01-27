// const Library = function (books = []) {
//   this.books = books;
// };

export default class Library {
  constructor(books = []) {
    this.books = books;
  }

  bookCount() {
    return this.books.length;
  };

  addBook(newBook) {
    this.books.push(newBook);
  };

  addBooks (newBooks) {
    newBooks.forEach(book => this.books.push(book));
  };

  printInventory() {
    this.books.forEach((book) => {
      let title, author;
      [title, author] = [book.title, book.author]
      console.log(`${title} by ${author}`);
    });
  };

}
