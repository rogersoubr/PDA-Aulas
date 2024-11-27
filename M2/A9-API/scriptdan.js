// CHAMANDO OS ELEMENTOS DA DOM
const nome = document.getElementById("name");
const dimension = document.getElementById("dimension");
const type = document.getElementById("type");
const input = document.getElementById("location");
const button = document.getElementById("buscar");


// FUNÇÃO QUE CONSOME A API DO RICK AND MORTY
function pegaDadosApi(nomeLocation) {//pega o nome
    const XML = new XMLHttpRequest();
    //ABERTURA DA API
    XML.open(
      "GET",
      `https://rickandmortyapi.com/api/location/?name=${nomeLocation}`//coloca o nome no link
    );

    // ENVIAR DE FATO A REQUISIÇÃO
    XML.send();

    //TRATAR OS DADOS RETORNADOS
    XML.onload = function () {
      // PRECISO CONVERTER ESSA STRING JSON EM UM OBJETO NORMAL (LITERAL)
      const respostaAPI = JSON.parse(XML.response);
      
      nome.innerText = respostaAPI.results[0].name;
      dimension.innerText = respostaAPI.results[0].dimension;
      type.innerText = respostaAPI.results[0].type;
      // console.log(respostaAPI.results[0].name);
      // console.log(respostaAPI.results[0].dimension);
      // console.log(respostaAPI.results[0].type);
    };
  }
  button.addEventListener("click", () => {
    console.log(input.value);
    pegaDadosApi(input.value);
    input.value = "";
  });