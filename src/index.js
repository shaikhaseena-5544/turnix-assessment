const app = require("./app");
require("./workers/order.worker");

const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
