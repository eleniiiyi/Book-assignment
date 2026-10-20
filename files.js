// Part 1: Files
const fs = require("fs");

// 1. Create one book object and save it to a file
const book = {
  id: 1,
  title: "Harry Potter",
  author: "J.K. Rowling",
  genre: "Fantasy",
  year: 1997,
};

fs.writeFileSync("book.json", JSON.stringify(book));

// 2. Read the file back and show the book in one line
const bookData = fs.readFileSync("book.json", "utf8");
const bookFromFile = JSON.parse(bookData);

console.log(
  bookFromFile.id + ". " + bookFromFile.title + " by " + bookFromFile.author +
  " (" + bookFromFile.genre + ", " + bookFromFile.year + ")"
);

// 3. Create an array of at least 6 books and save it to a file
const books = [
  { id: 1, title: "Harry Potter", author: "J.K. Rowling", genre: "Fantasy", year: 1997 },
  { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", year: 1937 },
  { id: 3, title: "1984", author: "George Orwell", genre: "Dystopian", year: 1949 },
  { id: 4, title: "Animal Farm", author: "George Orwell", genre: "Satire", year: 1945 },
  { id: 5, title: "The Alchemist", author: "Paulo Coelho", genre: "Adventure", year: 1988 },
  { id: 6, title: "Things Fall Apart", author: "Chinua Achebe", genre: "Historical", year: 1958 },
];

fs.writeFileSync("books.json", JSON.stringify(books));

// 4. Read the array file back
const booksData = fs.readFileSync("books.json", "utf8");
const booksFromFile = JSON.parse(booksData);

console.log("Number of books: " + booksFromFile.length);

for (let i = 0; i < booksFromFile.length; i++) {
  const b = booksFromFile[i];
  console.log(b.id + ". " + b.title + " by " + b.author + " (" + b.genre + ", " + b.year + ")");
}