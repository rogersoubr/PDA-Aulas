import { PropPessoa } from "./type";

const nome: string = "Daniel";
const idade: number = 27;

function soma(x: number, y: number): void {
  x + y;
}

function promessinha(x: string, y: string): Promise<string> {
  return new Promise(() => {
    x + y;
  });
}

soma(30, 10);

console.log(nome, idade);

const pessoa: PropPessoa = {
  id: 16549,
  nome: "Daniel",
  mostrar: (resposta: string): void => {
    console.log(resposta);
  },
};

const lista1: string[] = ["Daniel", ""];

const lista: (string | number | boolean)[] = ["Daniel", 1354, true];

// const identificador: id = 2326546

// type id = [number,string]
