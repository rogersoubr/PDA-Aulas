// CLASSE ANIMAIS
//cria e exporta classe
export class Animais{
    constructor(id,nome, especie, familia, ambiente, bioma){
        this.id = id;
        this.nome = nome;
        this.especie = especie;
        this.familia = familia;
        this.ambiente = ambiente;
        this.bioma = bioma;
        this.extincao = [];
    };

    // array statico para instanciar a classe
    static animal = [];

    entraEmExtincao(extinto){
        this.extincao.push(extinto);
        return `O aninal ${this.animal} está em extinção`
    }

    salvarAnimal(animal){
        Animais.animal.push(animal)
    }
};
