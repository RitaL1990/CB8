require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const Book = require("./models/books");

const app = express();
const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URL);
app.use(express.json());

db.on("error", (err) => console.error(err));
db.once("open", () => console.log("Connessione Database funzionante"));




app.get("/books", async (req, res) => {
    const books = await Book.find();

    res.json(books);
});

app.get("/books/:id", async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);

        res.status(201).json(book);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


app.post("/books", async (req, res) => {
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        year: req.body.year,
    });

    try {
        const newBook = await book.save();

        res.status(201).json({ newBook });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


app.delete("/books/:id", async (req, res) => {
    try {
        if (req.params.id === "all") {
          await Book.deleteMany();
          res
            .status(201)
            .json({ message: "All books was deleted" });
        } else {
          await Book.findByIdAndDelete(req.params.id);
          res.status(201).json({ message: "The book is deleted" });
        }
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
});


app.put("movies/:id", async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);

        if(!book) {
            res.status(404).json({ message: "Book not found "});
        } else {
            const { title, author, year } = req.body;

            if (title && author && year) {
                book.title = title;
                book.author = author;
                book.year = year;

                await book.save();
                res.status(201).json({ message: "The source was changed "});
            }
        }
    } catch (err) {
        res.status(400).json({ message: err.message});
    }
});


app.listen(3001);