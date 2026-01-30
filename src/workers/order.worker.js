const queue = require("../queue");

setInterval(() => {
  if (queue.length > 0) {
    const order = queue.shift();
    order.status = "processed";
    console.log("Processed order:", order.id);
  }
}, 3000);
