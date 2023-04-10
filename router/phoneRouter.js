const express = require("express");
const dbController = require("../DB/DBController");

let Router = express.Router();

Router.get("/", (req, res) => {
  res.render("index", {
    unlockOthers: true,
    phones: dbController.getPhones(),
  });
});

Router.get("/add", (req, res) => {
  res.render("add", {
    unlockOthers: false,
    phones: dbController.getPhones(),
    helpers: { returnMain: () => "window.location.href = '/'" },
  });
});

Router.get("/update", (req, res) => {
  res.render("update", {
    unlockOthers: false,
    phones: dbController.getPhones(),
    targetPhone: dbController.getPhoneById(req.query.id),
    helpers: { returnMain: () => "window.location.href = '/'" },
  });
});

Router.post("/add", (req, res) => {
  res.json(dbController.addPhone(req.body));
});

Router.post("/update", (req, res) => {
  res.json(dbController.updatePhone(req.body));
});

Router.post("/delete", (req, res) => {
  res.json(dbController.deletePhone(req.body));
});

module.exports = Router;
