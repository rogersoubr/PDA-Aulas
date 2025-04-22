import { Router } from "express";
import AnimaisController from "../controller/Animais.controller";


const animais = Router();

animais.get("/", AnimaisController.getAnimais); //vai nessa rota

animais.post("/cadastra", sAnimaisController.criarAnimais); //vai nessa rota, onde abre o método POST que leva ao método que cria

export default animais; //exporta a intancia