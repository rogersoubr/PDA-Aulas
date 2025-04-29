export class Animal {
  constructor(
    id,
    nomeGeral,
    nomeCientifico,
    genero,
    familia,
    PopEstimada,
    ListaVermelha
  ) {
    this.id = id;
    this.nomeGeral = nomeGeral;
    this.nomeCientifico = nomeCientifico;
    this.genero = genero;
    this.familia = familia;
    this.PopEstimada = PopEstimada;
    this.ListaVermelha = ListaVermelha;
  }

  // Banco de dados mocado
  static db_animais = [];

  // Método para salvar o animal no banco de dados
  salvaAnimal(objAnimal) {
    Animal.db_animais.push(objAnimal);
  }
}
