const express = require("express");
const app = express();

app.use(express.json());

const authRoutes = require("./routes/auth.routes");
const orderRoutes = require("./routes/orders.routes");

app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);

module.exports = app;
