const Expense = require("../models/expense");

exports.getMain = (req, res, next) => {
  res.render("landing", {
    pageTitle: "Main",
  });
};

exports.postForm = (req, res, next) => {
  const expenseType = req.body.type;
  const expenseName = req.body.name;
  const expenseComment = req.body.comment;
  const expenseDate = req.body.date;
  const expenseAmount = req.body.amount;
  const expense = new Expense(
    expenseType,
    expenseName,
    expenseComment,
    expenseDate,
    expenseAmount
  );
  expense
    .save()
    .then((result) => {
      res.redirect("/main");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getExpenses = (req, res, next) => {
  Expense.fetchAll()
    .then((expenses) => {
      const firstExpenses = expenses[0];
      console.log(expenses[0])
      res.render("expenses", {
        pageTitle: "Expenses",
        expenses: expenses,
      });
    })
    .catch((err) => console.log(err));
};
