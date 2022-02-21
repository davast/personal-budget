const getDb = require("../helper/database").getDb;

class Expense {
  constructor(type, name, comment, date, amount) {
    this.type = type;
    this.name = name;
    this.comment = comment;
    this.date = date;
    this.amount = amount;
  }

  save() {
    const db = getDb();
    return db
      .collection("expenses")
      .insertOne(this)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection("expenses")
      .find()
      .toArray()
      .then((expenses) => {
        console.log(expenses);
        return expenses;
      })
      .catch((err) => console.log(err));
  }
}

module.exports = Expense;
