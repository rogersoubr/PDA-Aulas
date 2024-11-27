const cep = document.getElementById("cep");
const lagradouro = document.getElementById("logradouro");
const bairro = document.getElementById("bairro");
const estado = document.getElementById("estado");
const botao = document.getElementById("button");
const cepResp = document.getElementById("cepResult");



function pullAPI(oCep){//pega os dados da api
   const XML = new XMLHttpRequest();
   
   XML.open("GET",`https://viacep.com.br/ws/${oCep}/json/`);

   XML.send();

   XML.onload = function (){
    const stagedAPI = JSON.parse(XML.response);

    lagradouro.innerText = stagedAPI.logradouro;
    bairro.innerText = stagedAPI.bairro;
    estado.innerText = stagedAPI.estado;
    cepResp.innerText = stagedAPI.cep;

    // console.log(stagedAPI.results[0].bairro)
    
   };


}
button.addEventListener("click",() => {
    pullAPI(cep.value);
    console.log(cep.value)
   })