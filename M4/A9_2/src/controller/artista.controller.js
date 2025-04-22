import { Artista } from "../model/Artista.model.js";
import { v4 as uuidv4 } from "uuid";
// import { writeFile } from "fs/promises"; //API INTERNA PARA MANIPULAÇÃO DE ARQUIVOS DO PROJETO

class ArtistaController {
  getArtistas(req, res) {
    res.json({ artistas: Artista.artistas });
  }

  async addArtista(req, res) {
    const { nome, idade, cidade } = req.body;

    //Validação
    if (!nome || !idade || !cidade) {
      res.json({
        message: "Você deve enviar todos os dados 'nome, idade, cidade'",
      });
    }

    if (!Number.isInteger(idade)) {
      res.json({ message: "Idade deve ser um número inteiro" });
    }

    try {
      // SALVOU OS DADOS NO ARRAY artistas
      const novoArtista = new Artista(uuidv4(), nome, idade);
      novoArtista.salvaArtista(novoArtista);
      // await writeFile(
      //   "./data/db.json",
      //   JSON.stringify(novoArtista, null, 2),
      //   "utf-8"
      // );

      res.json({
        message: "Artista criado com sucesso!",
        artista: novoArtista,
      });
    } catch (error) {
      res.status(400).json({ error });
    }
  }
}
export default new ArtistaController();
