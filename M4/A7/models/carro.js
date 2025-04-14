// app e index ajuda

class Carro{
    constructor(marca,modelo,ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;

    }

    ligar(){
        console.log(`O ${this.marca} ${this.modelo} esta ligado`);
    }

    exibirInfo(){
        return `Carro ${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
}

module.export = Carro;