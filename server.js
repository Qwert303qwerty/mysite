const express = require("express");
const app = express();

app.use(express.static("public"));

app.listen(3000, "0.0.0.0", () => {
  console.log("Сайт запущен: http://localhost:3000");
});
