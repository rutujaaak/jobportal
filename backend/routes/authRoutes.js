const express = require("express");
const router = express.Router();
const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

// MySQL Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Save Auth0 User Data
router.post("/save-user", (req, res) => {
  const { name, email, phone } = req.body;

  const query = "INSERT INTO users (name, email, phone) VALUES (?, ?, ?)";
  db.query(query, [name, email, phone], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Error saving user", error: err });
    }
    res.status(200).json({ message: "User saved successfully", result });
  });
});

module.exports = router;
