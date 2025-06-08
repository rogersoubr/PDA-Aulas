let lista: (string | number | boolean)[] = ["Daniel", true, 27];
let lista2: string[] = ["Daniel", "27"];
//?: vai indentificar como opcional
function soma(x: number, y?: number): number | undefined {
    try(){
        if(y){
              return x + y;
        }
        //tem que tipar o erro do catch
    } catch(error: any){
        console.log("error");
    }

}
// interface
interface pessoaProp {
  nome: string;
  idade: number;
}
const pessoa: pessoaProp = {
  nome: "Daniel",
  idade: 27,
};
type pessoa2 = {
  nome: string;
  idade: number;
};
// Tipagem chamada Status
type Status = "ativo" | "inativo" | "pendente"

type RetornoApi = {
    data: Date,
    status: Status
}
const api:RetornoApi  = {
    data: new Date(),
    status: "ativo",
}

//túpula
type pessoa3 = [string, number];

let cliente: pessoa3;
cliente = ["Roger", 27];