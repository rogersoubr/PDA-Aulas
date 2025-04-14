class Pessoa{
    constructor(nome,idade,profissao){
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
    
    serializacao(){
        const stringJSON =`{"nome":"${this.nome}","idade":"${this.idade}","profissao":"${this.profissao}"}`; 

        console.log(`Objeto em String/JSON (serializado): ${stringJSON}`);
    }

    desserializacao(){
        try{
            const stringJSON =`{"nome":"${this.nome}","idade":"${this.idade}","profissao":"${this.profissao}"}`; 

            const objeto = JSON.parse(stringJSON);
            console.log(`JSON/String em OBJETO: ${objeto}`);
        }catch(error){
            console.log(`Erro na conversão para objeto -> ${error}`);
        }
    }
}

let vizinha = new Pessoa("Claudia",30,"professora");
console.log(`OBJERO INTEIRO: ${vizinha}`);
vizinha.serializacao();
vizinha.desserializacao();

