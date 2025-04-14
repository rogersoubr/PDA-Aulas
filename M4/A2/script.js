import { Voyager,Curiosity,Perseverance,Hubble,Juno } from "./data.js";

const sondas = [Voyager,Curiosity,Perseverance,Hubble,Juno];

const enviarDados = (obj) =>{

    const dadosEnviados = new Promise((resolve,reject)=>{
        if(obj.dados.length >= 2){
            resolve(`Todos os dados enviados da sonda ${obj.nome}. DADOS: ${obj.dados.join(", ")}`)
        }else{
            reject("Esperando mais dados")
        };
    });

    return dadosEnviados
};

const tratarDados = (sondas) =>{

    sondas.forEach((sonda) => {
        enviarDados(sonda)
        .then((message) => console.log(message))
        .catch((erro) => console.error(erro))
    });

};

tratarDados(sondas);