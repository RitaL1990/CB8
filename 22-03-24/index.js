require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("./models/user");
const Book = require("./models/books");

const app = express();
const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URL);
app.use(express.json());

db.on("error", (err) => console.error(err));
db.once("open", () => console.log("Connessione Database funzionante"));


const authenticationToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return res.status(401).json({ message: "Inserire un token valido." });
  } else {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err)
        return res
          .status(403)
          .json({ message: "You are not allowed." });
      req.user = user;
      next();
    });
  }
};


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


app.post("/login", async (req, res) => {
    const user = await User.findOne({
      username: req.body.username,
    });
  
    if (user === null) {
      return res
        .status(400)
        .json({ message: "This user doesn't exist in database." });
    }
  
    try {
      if (await bcrypt.compare(req.body.password, user.password)) {
        const accessToken = jwt.sign(
          { username: user.username },
          process.env.ACCESS_TOKEN_SECRET
        );
  
        res.json({ accessToken });
      }
    } catch (error) {
      res.json({ message: "Permission denied." });
    }
});
  
app.post("/register", async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      console.log(hashedPassword)
      const user = new User({
        username: req.body.username,
        password: hashedPassword,
      });
  
      const newUser = await user.save();
      res.status(201).json({ message: "User created.", user: newUser });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Failed registration." });
    }
});

  
  app.get("/books", authenticationToken, async (req, res) => {
    const book = await Book.find();
  
    res.status(200).json({ book });
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