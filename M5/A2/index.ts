function livros(usuario: string, ...livros: string[]): void{
    for (let i = 0; i< livros.length;i++){
        console.log(`${usuario} - ${livros[i]}`);
    }
}

livros("Roger","ss","sss","ssss");

//pega o número maior do arrau usando o spread
let num: number[] = [2,3,4,5,6,7,8];
let maior: number = Math.max(...num);
console.log(maior);

interface pessoaProps{
    nomePessoa: string;
    idade: number;
}

const pessoa: pessoaProps = {nomePessoa: "Roger", idade: 19};
const pessoa2: pessoaProps = { ...pessoa};
console.log(pessoa2);

const{ nomePessoa, idade } = pessoa;//desistruturando objeto sem rest, comum

const a: number[] = [1,2];
const b: number[] = [3,4];
const c: number[] = [...a, ...b];

const [primeiro, segundo, terceiro, ...restante] = c;//sem o spread, teria que colocar até um infinito no array

console.log(primeiro, segundo, terceiro, ...restante);

console.log(c);