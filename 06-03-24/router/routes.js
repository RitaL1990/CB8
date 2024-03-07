const express = require("express");
const goods = require("../goods.json");

const routerHome = express.Router();
const routerMan = express.Router();
const routerWoman = express.Router();
const routerChild = express.Router();

routerHome.use(express.static("./public"));

routerHome.get("/", (req, res) => {
  res.sendFile(__dirname + "/./public/index.html");
});

routerMan.get("/man", (req, res) => {
  const goodMan = goods.find((item) => item.category === "man");
  res.render("man", {
    article: goodMan,
  });
});

routerWoman.get("/woman", (req, res) => {
  const goodWoman = goods.find((item) => item.category === "woman");
  res.render("woman", {
    article: goodWoman,
  });
});

routerChild.get("/child", (req, res) => {
  const goodChild = goods.find((item) => item.category === "child");
  res.render("child", {
    article: goodChild,
  });
});

module.exports = { routerHome, routerMan, routerWoman, routerChild };