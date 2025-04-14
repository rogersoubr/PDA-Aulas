import express from "express";
import users from "./routes/user.routes.js";
import admin from "./routes/admin.routes.js";

// CRIAR A INSTANCIA
const app = express();

// CONSTANTE DA PORTA ONDE A APLICAÇÃO IRÁ RODAR
const PORT = 3000;

// ROTA GET NO /
app.use("/users", users);
app.use("/admin", admin);

// RODANDO O SERVIDOR
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
