// INSTÂNCIAS DO DOM
const nomeDono = document.getElementById("nameDono");
const infoPet = {
  nome: document.getElementById("namePet"),
  raca: document.getElementById("racaPet"),
  idade: document.getElementById("idadePet"),
};
const button = document.getElementById("submit");
const spans = document.querySelectorAll(".span");

// MODELOS
class Dono {
  constructor(nomeDono) {
    this.nomeDono = nomeDono;
  }

  mostrarDono() {
    console.log(this.nomeDono);
  }
}

class Animal extends Dono {
  constructor(nomeDono, nomeAnimal, raca, idade) {
    super(nomeDono);
    this.nomeAnimal = nomeAnimal;
    this.raca = raca;
    this.idade = idade;
  }

  exibirAnimal() {
    spans[0].innerText = this.nomeDono;//pega os spans pelo selectorall que conta como array
    spans[1].innerText = this.nomeAnimal;
    spans[2].innerText = this.raca;
    spans[3].innerText = this.idade;
  }
}

// EVENTOS
button.addEventListener("click", () => {
  const novoAnimal = new Animal(
    nomeDono.value,
    infoPet.nome.value,
    infoPet.raca.value,
    infoPet.idade.value
  );

  novoAnimal.exibirAnimal();
});
