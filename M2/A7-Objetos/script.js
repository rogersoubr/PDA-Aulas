// const Pessoa = {
//     nome: "Daniel",
//     idade: 26,
//     mostrar: function(){
//       console.log(`O meu nome é: ${this.nome}`)
//     }
//   }
//   console.log(Pessoa.mostrar())
//   //TORNANDO INTERATIVO

//   // Função construtora SEM CLASSE(Fábrica)
//   function criarPessoa(nome, idade, profissao){
//     return{
//       nome,
//       idade,
//       profissao
//     }
//   }
//   let Tabata = criarPessoa("Tábata", 27, "Desenvolvedora");
//   console.log(Tabata)
//   let Daniel = criarPessoa("Daniel", 26, "Desenvolvedor");
//   console.log(Daniel)


  
//   class Pessoa{
//     constructor(nome, idade, genero){
//       this.nome = nome;
//       this.idade = idade;
//       this.genero = genero;
//     }
//     apresentar(){
//       console.log(`Olá, eu me chamo ${this.nome}`)
//     }
//   }
//   let pessoa1 = new Pessoa('Tábata', 27, "feminino")
//   console.log(pessoa1.apresentar())
//   let pessoa2 = new Pessoa('Daniel', 27, "feminino")
//   console.log(pessoa2.apresentar())


class personagem {
    constructor(serie, nome, tipo){
        this.nome = nome;
        this.serie = serie;
        this.tipo = tipo;
    }
    apresentar(){
        document.write(`<h1>Olá, eu me chamo ${this.nome}</h1>`)
    }
    // if(this.tipo == true) {
    //     document.write(`Bora para a guerra`)
    // }

}
let person = new personagem("Supacell","chock",true);
person.apresentar();
let person2 = new personagem("Stranger","demon",true);
person2.apresentar();