import { Router } from "express";
import AnimalController from "../controller/animal.controller.js";

const animal = Router();

// Rota de listagem de animais
animal.get("/", AnimalController.getAnimais);
animal.post("/cadastro", AnimalController.cadastraAnimal);
animal.delete("/delete/:id", AnimalController.deletaAnimal);
animal.put("/update/:id", AnimalController.updateAnimal);

// app.delete('/usuarios/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     usuarios = usuarios.filter(u => u.id !== id);
//     res.send("Usuário deletado!");
//   });
export default animal;
