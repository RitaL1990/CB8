const express = require("express");

const router = express.Router();

const books = [
   { title: "The Lord of the Rings", author: "J.R.R. Tolkien" },
   { title: "1984", author: "George Orwell" },
   { title: "Pride and Prejudice", author: "Jane Austen" },
   { title: "A Song of Ice and Fire", author: "George R.R. Martin" },
   { title: "The Little Prince", author: "Antoine de Saint-Exupéry" },
   { title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling" }
];
   

router.get("/add-book", (req, res) => {
    res.send(`
        <form action="/books" method="POST">
           <input type="text" placeholder="Title..." name="title" />
           <input type="text" placeholder="Author..." name="author" />
           <input type="submit" />
        </form>
    `);
});


router.post('/books', (req, res) => {
    const { title, author } = req.body;
    books.push({ title, author });
    res.redirect('/books');
});


router.get('/books', (req, res) => {
    let bookList = "<h1>Book List!</h1>";
    bookList += "<ul>";
    books.forEach(book => {
        bookList += `<li>${book.title} by ${book.author}</li>`;
    });
    bookList += "</ul>";
    bookList += `<a href="/add-book">Add a Book</a>`;
    res.send(bookList);
});


module.exports = router;