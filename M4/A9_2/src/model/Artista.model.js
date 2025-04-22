export class Artista {
  constructor(id, nome, idade) {
    this.id = id;
    this.nome = nome;
    this.idade = idade;
    this.premios = [];
    // [
    //    {
    //        id: 1,
    //        nome: "Daniel",
    //       idade: 27
    //      }
    // ];
  }

  // CRIADO PARA A CLASSE E NÃO PARA A INSTANCIA
  static artistas = [];

  adicionarPremios(premio) {
    this.premios.push(premio);
    return `+ 1 premio de ${premio.categoria} para ${this.nome}`;
  }

  salvaArtista(artista) {
    Artista.artistas.push(artista);
  }
}

// const novoArtista = new Artista(1, "Daniel", 27);
// {
//     id: 1,
//     nome: "Daniel",
//     idade: 27
// }
// const premio = new Premio(1, "Premio1", new Date());
// {
//     artistaId: 1,
//     nome: "Premio1",
//     data: 07/04/25
// }

// novoArtista.adicionarPremios(premio);
