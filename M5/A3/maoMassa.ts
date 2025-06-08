interface Veiculo {
    marca: string;
    modelo: string; 
    ano: number;
    exibirInformacoes(): void;
}

type StatusVeiculo= "disponivel" | "vendido" | "manutencao";

//Carro é uma interseção de veiculo
type Carro= Veiculo & {
    portas: number,
    status: StatusVeiculo,
}

const meuCarro: Carro ={
    marca: "Mazda",
    modelo: "RX7",
    ano: 1997,
    portas: 2,
    status: "disponivel",
    exibirInformacoes: () => {
        console.log(`
            marca: ${meuCarro.marca}
            modelo: ${meuCarro.modelo}
            ano: ${meuCarro.ano}
            portas: ${meuCarro.portas}
            status: ${meuCarro.status}
            `)
    }
}

meuCarro.exibirInformacoes();