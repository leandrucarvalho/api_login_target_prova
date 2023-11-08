const express = require("express");
const router = express.Router();

router.post("/login", auth);

const users = [
  { username: "target", password: "123" },
  { username: "leandro", password: "1234" },
];

async function auth(req, res) {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    res.status(200).json({ message: "Login bem-sucedido!" });
  } else {
    res.status(401).json({ message: "Credenciais inválidas." });
  }
}

module.exports = router;
