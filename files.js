// Part 1: Files
import fs from "fs/promises"

const book = {
  id: 1,
  title: "Harry Potter",
  author: "J.K. Rowling",
  genre: "Fantasy",
  year: 1997,
};

await fs.writeFile("book.json", JSON.stringify(book, null, 2));
console.log("File saved");

// 2. Read the file back and show the book in one line
const bookText = await fs.readFile("book.json", "utf8");
const bookData = JSON.parse(bookText)
console.log(bookData.id, bookData.title, bookData.author, bookData.genre, bookData.year);




// 3. Create an array of at least 6 books and save it to a file
const books = [
  { id: 1, title: "Harry Potter", author: "J.K. Rowling", genre: "Fantasy", year: 1997 },
  { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", year: 1937 },
  { id: 3, title: "1984", author: "George Orwell", genre: "Dystopian", year: 1949 },
  { id: 4, title: "Animal Farm", author: "George Orwell", genre: "Satire", year: 1945 },
  { id: 5, title: "The Alchemist", author: "Paulo Coelho", genre: "Adventure", year: 1988 },
  { id: 6, title: "Things Fall Apart", author: "Chinua Achebe", genre: "Historical", year: 1958 },
];

await fs.writeFile("books.json", JSON.stringify(books, null, 2));
console.log("Books file saved");

// 4. Read the array file back
const booksText = await fs.readFile("books.json", "utf8");
const booksData = JSON.parse(booksText)

console.log("Number of books: " + booksData.length);

for (const b of booksData) {
  console.log(b.id, b.title, b.author, b.genre, b.year);
}