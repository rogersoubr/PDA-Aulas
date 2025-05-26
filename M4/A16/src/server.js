import express from "express";
import { logEvents, logger } from "./middlewares/logger.middleware.js";
import animal from "./routes/animal.routes.js";
import dotenv from "dotenv";

// Antes de tudo, inicio o banco de dados
dotenv.config(); // Lê o arquivo .env e suas variáveis de ambiente

const app = express();
const PORT = process.env.BACKEND_PORT || 3000;

//MIDDLEWARE
app.use(logger);
app.use(express.json()); // PARSE DO JSON, PELO BODY

// ROTAS
app.use("/animal", animal);

app.listen(PORT, () => {
  logEvents(`Servidor rodando na porta ${PORT}`, "listen.log");
});
