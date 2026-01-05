const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "petcare_db",
});

db.connect((err) => {
  if (err) {
    console.error("DB connection failed ❌", err);
  } else {
    console.log("DB connected ✅");
  }
});

module.exports = db;