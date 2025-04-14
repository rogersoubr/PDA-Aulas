import { Artista } from "../model/Artista.model.js";
import { Premio, Grammy } from "../model/Premios.model.js";

// const premio = new Premio(1, "Premio1", new Date());
// const grammy = new Grammy(1, "Premio1", new Date(), "Animação", "New Title");
// const novoArtista = new Artista(1, "Daniel", 27);

class ArtistaController {
  pegaArtistas(req, res) {
    res.json({ artistas: Artista.artistas });
  }

  criaArtista(req, res) {
    const novoArtista = new Artista(2, "teste", 27);

    novoArtista.salvaArtista(novoArtista);
    res.json({ artista: novoArtista });
  }

  criaPremio(req, res) {
    res.json({ message: novoArtista });
  }
}

// STATIC
export default new ArtistaController();
