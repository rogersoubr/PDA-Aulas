import express from "express";
import { users } from "./data.js";

// INSTANCIA A BIBLIOTECA DO EXPRESS
const app = express();

// A PORTA NA QUAL A APLICAÇÃO IRÁ RODAR
const PORT = 3000;

// CRIA UM ENDPOINT COM O MÉTODO GET
// QUANDO O ENDPOINT FOR SÓ O BARRA, SIGNIFICA A RAIZ DO DOMÍNIO (http://localhost:3000/)
app.get("/login", (req, res) => {
  // ENVIA A RESPOSTA EM UM FORMATO JSON
  res.status(200).json({ message: "Hello World" });
});

app.get("/users", (req, res) => {
  // ENVIA A RESPOSTA EM UM FORMATO JSON
  res.status(200).json({ usuarios: users });
});

// RODA A APLICAÇÃO, ESCUTANDO AS MODIFICAÇÕES NA PORTA
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
