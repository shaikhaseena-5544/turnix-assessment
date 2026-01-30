const express = require("express");
const router = express.Router();
const users = require("../data/users");
const { v4: uuidv4 } = require("uuid");

router.post("/register", (req, res) => {
  const { username, password } = req.body;

  const user = {
    id: uuidv4(),
    username,
    password
  };

  users.push(user);
  res.json({ message: "User registered", user });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({ message: "Login successful", user });
});

module.exports = router;
