import { Animal } from "../model/Animal.js";
import { v4 as uuid } from "uuid";
import { listaVermelha } from "../utils/listaVermelha.js";
import { logEvents } from "../middlewares/logger.middleware.js";
import AnimalService from "../services/Animal.service.js";
class AnimalController {
  // Capturar todos os animais cadastrados no sistema
  async getAnimais(req, res) {
    const animais = await AnimalService.getAnimais();
    res.status(200).json({ animais: animais });
  }

  criarAnimal(req, res) {
    const {
      nome,
      nomeCientifico,
      genero,
      familia,
      popEstimada,
      bioma,
      nivelAmeaca,
    } = req.body;

    // Validação de dados
    if (
      !nome ||
      !nomeCientifico ||
      !genero ||
      !familia ||
      !popEstimada ||
      !bioma ||
      !nivelAmeaca
    ) {
      // 400 -> Bad Request => Usuário fez besteira
      return res
        .status(400)
        .json({ message: "Você deve fornecer todos os dados necessários" });
    }

    const novoAnimal = AnimalService.criaAnimal({
      nome,
      nomeCientifico,
      genero,
      familia,
      popEstimada,
      bioma,
      nivelAmeaca,
    });

    // 201 - Created => Algo foi criado
    res
      .status(201)
      .json({ message: "Animal cadastrado com sucesso!", animal: novoAnimal });
  }

  updateAnimal(req, res) {
    const id = req.params.id;

    const {
      nome,
      nomeCientifico,
      genero,
      familia,
      popEstimada,
      bioma,
      nivelAmeaca,
    } = req.body;

    // Validação de dados
    if (
      !nome ||
      !nomeCientifico ||
      !genero ||
      !familia ||
      !popEstimada ||
      !bioma ||
      !nivelAmeaca
    ) {
      // 400 -> Bad Request => Usuário fez besteira
      return res
        .status(400)
        .json({ message: "Você deve fornecer todos os dados necessários" });
    }

    // Verificar o nível de Ameaça do Animal e retorna a chave correspondente
    const codigoEncontrado = Object.keys(listaVermelha).find(
      (key) => listaVermelha[key] === nivelAmeaca
    );

    if (typeof codigoEncontrado === "undefined") {
      return res.status(400).json({
        message:
          'Não existe sigla atribuída a esse valor. Utilize os seguintes valores: "Extinto", "Extinto na Natureza", "Criticamente em Perigo", "Em Perigo", "Vulnerável","Quase Ameaçada", "Pouco Preocupante", "Dados Insuficientes"',
      });
    }

    const indexAnimal = Animal.db_animais.findIndex(
      (objAnimal) => objAnimal.id === id
    );

    // Atualização do Animal
    Animal.db_animais[indexAnimal] = {
      id,
      nome,
      nomeCientifico,
      genero,
      familia,
      popEstimada,
      bioma,
      nivelAmeaca: codigoEncontrado,
    };

    res.status(200).json({
      message: "Animal Atualizado com sucesso!",
      animal: Animal.db_animais[indexAnimal],
    });
  }

  deletarAnimal(req, res) {
    const id = req.params.id;
    logEvents(`Mostrando id ${id}`, "deletaAnimal.log");

    // O objeto animal
    const buscaAnimalId = Animal.db_animais.find((animal) => animal.id == id);

    // O índice do objeto animal
    const buscaAnimalIndice = Animal.db_animais.findIndex(
      (animal) => animal.id == id
    );
    if (buscaAnimalIndice !== -1) {
      // Remove o animal baseado no índice do objeto armazenado no banco
      Animal.db_animais.splice(buscaAnimalIndice, 1);
    }

    logEvents(`Mostrando buscaId ${buscaAnimalIndice}`, "deletaAnimal.log");

    res.status(200).json({
      message: "Animal deletado com sucesso!",
      animalDeletado: buscaAnimalId,
    });
  }
}

export default new AnimalController();
