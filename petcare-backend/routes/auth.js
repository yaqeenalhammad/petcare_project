const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../db");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { full_name, email, password } = req.body;

  if (!full_name?.trim() || !email?.trim() || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (!process.env.JWT_SECRET) {
    return res.status(500).json({ message: "JWT_SECRET is missing" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql =
      "INSERT INTO users (full_name, email, password_hash) VALUES (?, ?, ?)";

    db.query(sql, [full_name, email, hashedPassword], (err, result) => {
      if (err) {
        if (err.code === "ER_DUP_ENTRY") {
          return res.status(409).json({ message: "Email already exists" });
        }
        return res.status(500).json({ message: "DB error", error: err });
      }

      
      const newUserId = result.insertId;
      const token = jwt.sign(
        { id: newUserId, email },
        process.env.JWT_SECRET,
        { expiresIn: "2h" }
      );

      return res.status(201).json({
        message: "User registered ✅",
        token,
        user: { id: newUserId, full_name, email },
      });
    });
  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err });
  }
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email?.trim() || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  if (!process.env.JWT_SECRET) {
    return res.status(500).json({ message: "JWT_SECRET is missing" });
  }

  const sql = "SELECT * FROM users WHERE email = ? LIMIT 1";
  db.query(sql, [email], async (err, results) => {
    if (err) return res.status(500).json({ message: "DB error", error: err });
    if (results.length === 0)
      return res.status(401).json({ message: "Invalid email or password" });

    const user = results[0];

    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid email or password" });

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    return res.json({
      message: "Login successful ✅",
      token,
      user: { id: user.id, full_name: user.full_name, email: user.email },
    });
  });
});

module.exports = router;