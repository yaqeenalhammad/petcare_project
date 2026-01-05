const express = require("express");
const cors = require("cors");
require("dotenv").config();
console.log("JWT_SECRET:",process.env.JWT_SECRET);
const app = express();

app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("PetCare Backend is running 🐾");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});