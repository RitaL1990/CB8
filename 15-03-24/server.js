const express = require("express");

const app = express();

let book = [
  {
    id: 1,
    title: "Il piccolo Principe",
    author: "Antoine de Saint-Exupéry",
    year: "1943",
  },
];

app.use(express.json());

app.get("/books", (req, res, next) => {
  res.json(book);
});

app.post("/books", (req, res, next) => {
  const body = req.body;

  if (body.id && body.title && body.author && body.year) {
    book.push(body);
    res.status(201).send("The book is added");
  } else {
    res.status(400).send(`not found`);
  }
});

app.delete("/books/:id", (req, res, next) => {
  const id = Number(req.params.id);

  book = book.filter((book) => book.id !== id);
  res.send("The book is removed");
});

app.put("/books/:id", (req, res, next) => {
  const id = Number(req.params.id);
  const body = req.body;
  const index = book.findIndex((book) => book.id === id);

  if (index === -1) {
    res.status(400).send("Book not found");
  } else {
    book[index] = body;
    res.send("Book is modified");
  }
});


app.get("/books/year/crescente", (req, res, next) => {
    const orderYear = book.sort((a, b) => a.year - b.year);
    res.json(orderYear);
});
  
  app.get("/books/year/decrescente", (req, res, next) => {
    const orderYear = book.sort((a, b) => b.year - a.year);
    res.json(orderYear);
});

  
app.listen(3000);