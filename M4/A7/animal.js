class Animal {
    constructor(nome,tipo){
        this.nome = nome;
        this.tipo = tipo;
    };


    fazerSom(){
        console.log("Som do animal")
    }


};

class Cachorro extends Animal{
    constructor(nome, raca){
        super(nome,"Cachorro");
        this.raca = raca;
    }
    fazerSom() {
        console.log("au au!1");
    }
}
const rex = new Cachorro("Rex", "Labrador");
console.log(rex.nome);
console.log(rex.tipo);
console.log(rex.raca);
rex.fazerSom();