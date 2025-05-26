export class Animal {
  constructor(
    id,
    nome,
    nomeCientifico,
    genero,
    familia,
    popEstimada,
    bioma,
    nivelAmeaca
  ) {
    this.id = id;
    this.nome = nome;
    this.nomeCientifico = nomeCientifico;
    this.genero = genero;
    this.familia = familia;
    this.popEstimada = popEstimada;
    this.bioma = bioma;
    this.nivelAmeaca = nivelAmeaca;
  }
  // Banco de dados Mocado      0   1   2
  static db_animais = []; // [ {}, {}, {}]
  // [
  // animal = {
  // this.id = id;
  // this.nome = nome;
  // this.nomeCientifico = nomeCientifico;
  // this.genero = genero;
  // this.familia = familia;
  // this.popEstimada = popEstimada;
  // this.bioma = bioma;
  // this.nivelAmeaca = EX;
  //}
  //]

  // Salvando o objeto Animal no banco de dados mocado
  salvaAnimal(objAnimal) {
    Animal.db_animais.push(objAnimal);
    // animal = {
    // this.id = id;
    // this.nome = nome;
    // this.nomeCientifico = nomeCientifico;
    // this.genero = genero;
    // this.familia = familia;
    // this.popEstimada = popEstimada;
    // this.bioma = bioma;
    // this.nivelAmeaca = nivelAmeaca;
    //}
  }
}

// const novoAnimal = new Animal(uuid(), nome, nome, genero, familia, pop, bioma, )
