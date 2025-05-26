import {
  getAllAnimals,
  createAnimal,
  deleteAnimal,
  updateAnimalFull,
} from "../services/Animal.service.js";
import { ListaVermelha as ListaVermelhaENUM } from "@prisma/client";
import { logEvents } from "../middlewares/logger.middleware.js";

class AnimalController {
  async getAnimais(req, res) {
    const animais = await getAllAnimals();
    res.status(200).json({ animais });
  }

  async cadastraAnimal(req, res) {
    const {
      nomeGeral,
      nomeCientifico,
      genero,
      familia,
      PopEstimada,
      NivelAmeaca,
    } = req.body;
    //validação de dados
    if (
      !nomeGeral ||
      !nomeCientifico ||
      !genero ||
      !familia ||
      !PopEstimada ||
      !NivelAmeaca
    ) {
      res.status(400).json({ message: "Você deve fornecer todos os campos" });
    }

    // Verificar o nível de Ameaça do Animal e retorna a chave correspondente
    const codigoEncontrado = Object.keys(ListaVermelhaENUM).find(
      (key) => ListaVermelhaENUM[key] === NivelAmeaca
    );

    // verifica se Nível de Ameaça é inexistente.
    if (typeof codigoEncontrado === "undefined") {
      return res.status(400).json({
        message:
          'Não existe sigla atribuída a esse valor. Utilize os seguintes valores: "Extinto", "Extinto na Natureza", "Criticamente em Perigo", "Em Perigo", "Vulnerável","Quase Ameaçada", "Pouco Preocupante", "Dados Insuficientes"',
      });
    }

    await logEvents(`Cadastrando animal`, "cadastraAnimal.log");
    const animal = await createAnimal({
      nomeGeral,
      nomeCientifico,
      genero,
      familia,
      PopEstimada,
      codigoEncontrado,
    });
    res.status(201).json({ message: "Animal cadastrado com sucesso!", animal });
  }

  async deletaAnimal(req, res) {
    const { id } = req.params;
    await logEvents(`Deletando id ${id}`, "deletaAnimal.log");
    const animal = await deleteAnimal(id);
    if (!animal)
      return res.status(404).json({ message: "Animal não encontrado." });
    res.status(200).json({
      message: "Animal deletado com sucesso!",
      animalDeletado: animal,
    });
  }

  async atualizaAnimal(req, res) {
    const { id } = req.params;
    const {
      nomeGeral,
      nomeCientifico,
      genero,
      familia,
      PopEstimada,
      NivelAmeaca,
    } = req.body;

    //validação de dados
    if (
      !nomeGeral ||
      !nomeCientifico ||
      !genero ||
      !familia ||
      !PopEstimada ||
      !NivelAmeaca
    ) {
      res.status(400).json({ message: "Você deve fornecer todos os campos" });
    }

    // Verificar o nível de Ameaça do Animal e retorna a chave correspondente
    const codigoEncontrado = Object.keys(ListaVermelhaENUM).find(
      (key) => ListaVermelhaENUM[key] === NivelAmeaca
    );

    // verifica se Nível de Ameaça é inexistente.
    if (typeof codigoEncontrado === "undefined") {
      return res.status(400).json({
        message:
          'Não existe sigla atribuída a esse valor. Utilize os seguintes valores: "Extinto", "Extinto na Natureza", "Criticamente em Perigo", "Em Perigo", "Vulnerável","Quase Ameaçada", "Pouco Preocupante", "Dados Insuficientes"',
      });
    }

    const updated = await updateAnimalFull(id, {
      nomeGeral,
      nomeCientifico,
      genero,
      familia,
      PopEstimada,
      codigoEncontrado,
    });
    if (!updated)
      return res.status(404).json({ message: "Animal não encontrado." });
    res
      .status(200)
      .json({ message: "Animal atualizado completamente!", animal: updated });
  }
}

export default new AnimalController();
