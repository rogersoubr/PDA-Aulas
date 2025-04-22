import { Artista } from "../model/Artista.model.js";
import { v4 as uuidv4 } from "uuid";

class ArtistaController {
  getArtistas(req, res) {
    res.json({ artistas: Artista.artistas });
  }

  criaArtista(req, res) {
    const { nome, idade } = req.body;

    if ((!nome, !idade)) {
      res.status(400).json({ message: "Está faltando nome e idade" });
    }

    if (typeof idade !== Number) {
      res.status(400).json({ message: "Favor, idade deve ser um número" });
    }

    console.log(nome, idade);

    const novoArtista = new Artista(uuidv4(), nome, idade);

    novoArtista.salvaArtista(novoArtista);
    res.json({ message: "Artista criado com sucesso", artista: novoArtista });
  }
}
export default new ArtistaController();
