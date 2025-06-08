export interface PropPessoa {
  id: number | string;
  nome: string;
  mostrar: (x: string) => void;
}

export interface Funcionario extends PropPessoa {
  area: string;
}
