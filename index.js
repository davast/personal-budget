const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoConnect = require("./helper/database").mongoConnect;

const root = require("./helper/path.js");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const login = require("./routes/register.js");
const main = require("./routes/main.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(root, "public")));

app.use(main);
app.use(login);

app.use((req, res, next) => {
  res.status(404);
});

mongoConnect(() => {
  app.listen(3000);
});
