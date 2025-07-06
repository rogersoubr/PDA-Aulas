//TIPAGEMD DE VARIÁVEIS -------------------------------------
let nome: string = "Maria";
let idade: number = 23;
let ativo: boolean = true;
let notas: number[] = [1.6,13,5,7];

//TIPAGEM DE FUNÇÕES ---------------------------------------
function saudacao(nome: string, idade: number, ativo: boolean, notas: number[]): string{
  return `olá, ${nome}| sua idade é ${idade} | que está ${ativo} na escola | sua notas são: ${notas}`
}

//INTERFACES ------------------------------------------------
export interface PropPessoa {
  id: number | string;
  nome: string;
  mostrar: (frase: string) => void;
}


export interface Funcionario extends PropPessoa {
  area: string;
  salario: number;
}

const maria: Funcionario = {
    id: 1,
    nome:"Maria",
    mostrar(frase){
      console.log(`meu nome é ${this.nome} | ${frase}`);
    },
    area: "Tecnologia",
    salario: 10000,
}

//TYPES --------------------------------------------------
type Pessoa2 = {
  nome: string;
  idade: number;
  falar(frase:string):void;
}
//união de literais (como um enum):
type Status = "ativo" | "inativo" | "pendente";

//tupla
type ParchaveValor = [string, string];

//usando combinação
type RetornoAPI= {
  data: any;
  status: Status;
}