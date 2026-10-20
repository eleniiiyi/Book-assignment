import express from "express"

const books = [
  { id: 1, title: "Harry Potter", author: "J.K. Rowling", genre: "Fantasy", year: 1997 },
  { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", year: 1937 },
  { id: 3, title: "1984", author: "George Orwell", genre: "Dystopian", year: 1949 },
  { id: 4, title: "Animal Farm", author: "George Orwell", genre: "Satire", year: 1945 },
  { id: 5, title: "The Alchemist", author: "Paulo Coelho", genre: "Adventure", year: 1988 },
  { id: 6, title: "Things Fall Apart", author: "Chinua Achebe", genre: "Historical", year: 1958 },
];

const server = express();

server.get("/", (req, res) => {
  res.send("Welcome to the Books API");
});

server.get("/books/count", (req, res) => {
  res.json({ count: books.length });
});

server.get("/books/:id", (req, res) => {
  const id = Number(req.params.id);
  const book = books.find((b) => b.id === id);
  
  if (!book) {
    res.writeHead(404, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ error: "Book not found" }));
  }

  res.json(book);
});

server.get("/books", (req, res) => {
  const genre = req.query.genre;

  if (!genre) {
    return res.json(books);
  }

  const result = books.filter(
    (book) => book.genre.toLowerCase() === genre.toLowerCase()
  );

  // if nothing matches, result is just []
  res.json(result);
});



server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});