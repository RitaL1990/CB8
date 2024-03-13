const express = require("express");
const bodyParser = require("body-parser");
const booksRoutes = require("./routes/library");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


app.use(booksRoutes);

app.get("/", (req, res) => {
    res.send("Homepage!");
});


app.listen(3000, () => {
    console.log("server open");
});