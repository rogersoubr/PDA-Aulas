import { Router } from "express";
import ArtistaController from "../controller/artista.controller.js";

const artista = Router();

artista.get("/", ArtistaController.getArtistas);

// POST Serve para receber dados da requisição, de forma mais "segura"
artista.post("/cadastra", ArtistaController.criaArtista);

export default artista;