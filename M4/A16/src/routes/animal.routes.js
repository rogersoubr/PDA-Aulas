import { Router } from "express";
import AnimalController from "../controller/animal.controller.js";

const animal = Router();

// http://localhost:3000/animal/
animal.get("/", AnimalController.getAnimais);

// http://localhost:3000/animal/cadastra
animal.post("/cadastra", AnimalController.criarAnimal);

// http://localhost:3000/animal/delete/165498451987
animal.delete("/delete/:id", AnimalController.deletarAnimal);

// http://localhost:3000/animal/update/165498451987
animal.put("/update/:id", AnimalController.updateAnimal);
export default animal;
