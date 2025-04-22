//CLASSE ONGS
//cria e exporta classe
export class Locais{
    constructor(id,nome, proposito, endereco){
        this.id = id;
        this.nome = nome;
        this.proposito = proposito;
        this.endereco = endereco;
        this.animal = [];
    };

    // array statico para instanciar a classe
    static local = [];

    suporteAnimal(animal){
        this.extincao.push(animal);
        return `O aninal ${this.animal} foi ajudado`;
    }

    //salva local, vai que
    salvarLocal(local){
        Locais.local.push(local)
    }
};