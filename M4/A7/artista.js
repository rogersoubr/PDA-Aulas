class Artista{
    constructor(nome,idade, cpf){
        this.nome = this.nome;
        this.idade= idade;
        this.cpf = cpf;
    };

    assinandoContrato(){
        console.log(`Eu ${this.nome}, portador do cpf, ${this.cpf}, aceito o tal contrato.`);
    };
};

class Grammy extends Artista{
    constructor(apresentador, musica, melhorCantor
    ){
        super(nome,idade,cpf);
        this.apresentador = apresentador;
        this.musica = musica;
        this.melhorCantor = melhorCantor;
    };

    ganhador(){
            console.log(`O musica ${this.musica} ganhau um grammy com o melhor artista ${this.melhorCantor}`);
    }

 };


 const artista = new Artista("Enzo Brandão",12,1928373092);

 console.log(artista.assinandoContrato);

 