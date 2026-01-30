const express = require("express");
const router = express.Router();
const orders = require("../data/orders");
const queue = require("../queue");
const { v4: uuidv4 } = require("uuid");

router.post("/", (req, res) => {
  const order = {
    id: uuidv4(),
    item: req.body.item,
    status: "queued"
  };

  orders.push(order);
  queue.push(order);

  res.json({ message: "Order queued", order });
});

router.get("/", (req, res) => {
  res.json(orders);
});

module.exports = router;
