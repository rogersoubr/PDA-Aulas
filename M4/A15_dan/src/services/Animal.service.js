import { getDb } from "../database.js";

class AnimalService {
  async getAnimais() {
    // BUSCO O BANCO
    const db = getDb(); // instância do banco
    const teste = await db.all(`SELECT * FROM Animal`);
    return teste;
  }

  cadastraAnimal(req, res) {
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

    // Arquivo de log
    logEvents(
      `Mostrando o código encontrado ${codigoEncontrado}`,
      "cadastraAnimal.log"
    );

    // Cadastra o animal
    const novoAnimal = new Animal(
      uuid(),
      nomeGeral,
      nomeCientifico,
      genero,
      familia,
      PopEstimada,
      codigoEncontrado
    );

    // Salva o animal no banco de dados mocado
    novoAnimal.salvaAnimal(novoAnimal);

    res
      .status(201)
      .json({ message: "Animal cadastrado com sucesso!", animal: novoAnimal });
  }

  updateAnimal(req, res) {
    const id = req.params.id;

    const {
      nomeGeral,
      nomeCientifico,
      genero,
      familia,
      PopEstimada,
      NivelAmeaca,
    } = req.body;

    // Retorna o índice do obj Animal do array
    const indexAnimal = Animal.db_animais.findIndex(
      (animal) => animal.id === id
    );

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
    // db_animais
    // [
    //   {}, 0
    //   {}, 1
    //   {}  2
    // ]

    Animal.db_animais[indexAnimal] = {
      nomeGeral,
      nomeCientifico,
      genero,
      familia,
      PopEstimada,
      NivelAmeaca: codigoEncontrado,
    };

    res.status(200).json({
      message: "Animal Atualizado com sucesso!",
      animal: Animal.db_animais[indexAnimal],
    });
  }

  deletaAnimal(req, res) {
    const id = req.params.id;
    logEvents(`Mostrando id ${id}`, "deletaAnimal.log");

    // OBJ ANIMAL
    const buscaAnimal = Animal.db_animais.find((animal) => animal.id == id);
    logEvents(`Mostrando Animal ${buscaAnimal}`, "deletaAnimal.log");

    //[ARRAY ORIGINAL] = [ARRAY MUDADO]
    Animal.db_animais = Animal.db_animais.filter((animal) => animal.id !== id);

    // let array = []
    // array = [123]

    res.status(200).json({
      message: "Animal deletado com sucesso!",
      animalDeletado: buscaAnimal,
    });
  }
}

export default new AnimalService();
