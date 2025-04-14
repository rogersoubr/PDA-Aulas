import { Router } from "express";
import ArtistaController from "../controller/Artista.controller.js";

const users = Router();

users.get("/", ArtistaController.pegaArtistas);
users.get("/premio", ArtistaController.criaPremio);
users.post("/cadastra", ArtistaController.criaArtista);

// EXPORTAÇÃO POR PADRÃO DE CONSTANTES
export default users;
