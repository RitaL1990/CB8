const express = require("express");
const hbs = require("hbs");
const data = require("./users.json");

const app = express();
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.get("/", (req, res) => {
    res.render("homepage");
});

app.get("/userList", (req, res) =>{
    res.render("userList", {
      users: data.users,
      ensurance: true,
    });
});

app.listen(8000, () => {
  console.log("server open");
});