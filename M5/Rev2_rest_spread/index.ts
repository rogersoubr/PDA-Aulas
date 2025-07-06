//copiando array
let cores: string[] = ["vermelho","axul","roxo"];
let coresCopia: string[] = [...cores];
console.log(coresCopia);

//soma números
const numbers: number[] = [1,2,3,4,5];

const somaNumeros = ( ...numA:number[] ):void =>{
    let soma: number = 0;
    for(let i:number = 0; i<numA.length; i++){
        soma += numA[i];
    }
    console.log(soma);
}
somaNumeros(...numbers);

//agrupa valores
interface IdValor{
    id: number;
    valor: string;
}

/*
const lista: Array<IdValor> = [
    {
        id: 1,
        valor: "Roger"
    },
    {
        id: 2,
        valor: "Camis"
    },
    {
        id: 3,
        valor: "Lucas"
    },
]

console.log(...lista);
*/

const pessoa:IdValor = { id: 1, valor: "Roger" };
const pessoa2:IdValor = { id: 2, valor: "Camis" };
const pessoa3:IdValor = { id: 3, valor: "Lucas" };
const pessoa4: Array<IdValor> = [ pessoa, pessoa2 , pessoa3 ];
//console.log(pessoa4.valor);
const {id, valor} = pessoa;
console.log(valor);

console.log(`\nConsolando:`);
for(let i: number = 0; i<pessoa4.length; i++){
    console.log(`${pessoa4[i].valor}`)
}