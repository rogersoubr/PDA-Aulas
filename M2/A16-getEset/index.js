// class Animal{
//     #nome;
//     #idade;
//     constructor(nome, idade){
//         this.#nome = nome;
//         this.#idade = idade;
//     };
//     //privando métodos
//     #mostraAnimal(){
//         return`nome:${this.#nome}, Idade:${this.#idade}`;
//     };

//     //get pesquisa
//     get dadosAnimal(){
//         return this.#nome;
//     };
//     //set coloca
//     set SetaAnimal(valor){
//         if(valor>0){
//             return this.idade=valor;
//         }else{
//             return "idade invalida"
//         }
//     };

// }

// const vaca = new Animal("jony", 22);
// vaca.SetaAnimal
// //não vai dar. Está privado.


class Estimacao{
    #nome
    #idade
    #nomeDono
    constructor(nome, idade, nomeDono){
        this.#nome = nome;
        this.#idade = idade;
        this.#nomeDono = nomeDono;
    }


    fichaAnimal(){
        return console.log(`nome:${this.#nome} | idade:${this.#idade} | nome do dono:${this.#nomeDono}`);
    }

    get getNome(){
        return this.#nome
    }; 
    set setNome(nome){
        return this.#nome=nome
    };

    get getIdade(){
        return this.#idade
    }; 
    set setIdade(idade){
        return this.#idade=idade
    };

    get getNomeDono(){
        return this.#nomeDono
    }; 
    set setNomeDono(nomeDono){
        return this.#nomeDono=nomeDono
    };
}