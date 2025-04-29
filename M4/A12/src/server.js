import express from "express";
import { logEvents, logger } from "./middlewares/logger.middleware.js";
import animal from "./routes/animal.routes.js";

const app = express();
const PORT = 3000;

// MIDDLEWARE
app.use(logger);
app.use(express.json()); // PARSE DO JSON

// AS ROTAS
app.use("/animal", animal);

app.listen(PORT, () => {
  logEvents(`Servidor rodando na porta ${PORT}`, "listen.log");
});
