// const titulo = document.querySelector("#titulo");
// console.log(titulo);


const titulo = document.querySelectorAll("#titulo")[0]; //vai pegar somente o primeiro 

titulo.innerText="Hello World";

//CREATE
const main = document.querySelector("main"); //pega o pai
const section = document.createElement("section"); //cria uma section
section.innerText = "Aqui é a sessão principal!"; //coloca o texto para a tag section 

main.append(section); //coloca a tag filha no pai

const pegaSection = document.querySelector("section"); //pega a criada

const tituloSection = document.createElement("h1"); //cria um h1
tituloSection.innerText = "Esse é o título da seção principal"; //coloca texto no h1

pegaSection.append(tituloSection); //colocar o h1 na sexction criada
