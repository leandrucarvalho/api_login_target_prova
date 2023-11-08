const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

const auth = require("./routes/auth/routes");

app.get("/", (req, res) => {
  res.send("Api Rodando");
});

app.post("/login", auth);

app.listen(port, () => {
  console.log(`App rodando na porta ${port}.`);
});
