import express from "express";
import artista from "./routes/artista.route.js";

const app = express();
const PORT = 3000;

// const pessoa = {
//   nome: "Daniel",
//   idade: 27,
//   cidade: "Rio de Janeiro",
// };

// // const nome = pessoa.nome;
// // const idade = pessoa.idade;

// // DESTRUTURAR OBJETO
// const { nome, cidade } = pessoa;

// console.log(nome, cidade);

// MIDDLEWARE DE PARSE DO BODY
app.use(express.json());


app.use("/artista", artista);

app.listen(PORT, () => {
  console.log(`Rodando o Servidor na porta ${PORT}`);
});
