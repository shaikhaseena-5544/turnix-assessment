const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Import Routes
const routes = require("./routes");

// Use Routes
app.use("/api", routes);

// Home Route
app.get("/", (req, res) => {
  res.send("Server is running successfully!");
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
