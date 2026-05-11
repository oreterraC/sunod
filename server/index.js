const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (request, response) => {
  response.send("Servidor funcionando");
});

app.listen(PORT, () => {
  console.log(`Servidor en https://localhost:${PORT}`);
});
