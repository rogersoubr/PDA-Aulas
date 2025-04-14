export class Premio {
  constructor(artistaId, nome, data) {
    this.artistaId = artistaId;
    this.nome = nome;
    this.data = data;
  }
}

export class Grammy extends Premio {
  constructor(artistaId, nome, data, categoria, obra) {
    super(artistaId, nome, data);
    this.categoria = categoria;
    this.obra = obra;
  }
}

// const premio = new Premio(1, "Premio1", new Date());
// const grammy = new Grammy(1, "Premio1", new Date(), "Animação", "New Title");
