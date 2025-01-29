const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json()); // For parsing JSON bodies

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("Database connection failed: ", err);
    return;
  }
  console.log("Connected to MySQL");
});

// Endpoint to save data
app.post("/save-data", (req, res) => {
  const { name, email, phone } = req.body;
  const query = "INSERT INTO users (name, email, phone) VALUES (?, ?, ?)";

  db.query(query, [name, email, phone], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Error saving data", error: err });
    }
    res.status(200).json({ message: "User data saved successfully", result });
  });
});

// Start the server
app.listen(3001, () => {
  console.log("Server running on port 3001");
});
