//cria um obj
const pessoa = {
    nome: "Zeus",
    profisao: "Carteiro",
    idade: 177
}

//trasformando em string JSON
const jsonSerializado = JSON.stringify(pessoa);
console.log()

//Constante em JSON
try{
    const desSerializa = () =>{
        const teste ='{"nome":"Zeus","profissao":"Carteiro","idade":"177"}'; 

        // const teste1 ='{"pessoa"{"nome":"João","profissao":aaaaa,"idade":"28"}'; 

        const obj = JSON.parse(teste)
        console.log(`Objeto em javascript: ${obj}`)
    }

    console.log(desSerializa());

}catch(error){
    console.error(`Erro para transformar em objeto (descerializar) -> ${error}`);
};
