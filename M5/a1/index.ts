//interface veiulo, modelo
interface Veiculo {
    marca: string;
    modelo: string;
    ano: number;
    exibirInformacoes(): void;  
}

//tipo status veiculo, alian enum
type StatusVeiculo = "disponivel" | "vendido" | "manutencao";
//tipo carro, alians de alguns primitivos e 
//o & vai falar que veiculo vai ser uma interseção entre eles. Com coisas adicionais a esse type
//tem que ser assim, poque um carro é coisas a mais de um veiculo (carro herda de veiculo, não ao contrário)
type Carro= Veiculo &{
    portas: number;
    status: StatusVeiculo;
};

const meuCaro: Carro={
    marca: "Schevrolet",
    modelo: "cazuza",
    ano:2019,
    portas: 4,
    status: "disponivel",
    exibirInformacoes(){
        console.log(`Veículo: ${this.modelo} está ${this.status} \nMarca: ${this.marca}. Ano: ${this.ano}. Portas: ${this.portas}`)
    }

}

meuCaro.exibirInformacoes();