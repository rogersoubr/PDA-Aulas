import { Router } from "express";

const admin = Router();

admin.get("/", (req, res) => {
  res.json({ message: "Administrador" });
});

// EXPORTAÇÃO POR PADRÃO DE CONSTANTES
export default admin;
