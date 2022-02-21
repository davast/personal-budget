const express = require("express");
const mainController = require("../controllers/create");

const router = express.Router();

router.get("/main", mainController.getMain);

router.post("/report-expense", mainController.postForm);

router.get("/expenses", mainController.getExpenses);

module.exports = router;
