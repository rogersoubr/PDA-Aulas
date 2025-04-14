import { Voyager, Curiosity, Perseverance, Hubble, Juno } from "./data.js";

const sondas = [Voyager, Curiosity, Perseverance, Hubble, Juno];

// Função que recebe um objeto, verifica o length >=2 e se caso for, resolve a promise, senão, rejeita.
const enviarDados = (obj) => {
  return new Promise((resolve, reject) => {
    if (obj.dados.length >= 2) {
      resolve(
        `Enviando dados da sonda: ${
          obj.nome
        } de volta pra NASA ${obj.dados.join(", ")}`
      );
    }
    reject(`Esperando mais dados de ${obj.nome}...`);
  });
};

// Trata os dados, onde sondas é um array de objetos, capturando todos os dados das sondas e armazenando em um array.
const tratarDados = (sondas) => {
  // Resolveria se caso fosse necessário pegar todos os dados agrupados
  //   const todoDados = sondas.flatMap((sonda) => sonda.dados);

  sondas.forEach((sonda) =>
    enviarDados(sonda)
      .then((message) => console.log(message))
      .catch((erro) => console.error(erro))
  );
};

tratarDados(sondas);
