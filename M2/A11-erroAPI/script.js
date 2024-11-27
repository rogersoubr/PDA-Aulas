const cep = document.getElementById("cep");
const lagradouro = document.getElementById("logradouro");
const bairro = document.getElementById("bairro");
const estado = document.getElementById("estado");
const botao = document.getElementById("button");
const cepResp = document.getElementById("cepResult");
const modal =document.getElementById("modal")


// Inicializa o modal como invisível
modal.style.display = "none";

function pullAPI(oCep){//pega os dados da api
   const XML = new XMLHttpRequest();
   
   XML.open("GET",`https://viacep.com.br/ws/${oCep}/json/`);

   XML.send();

   XML.onload = function (){
    const stagedAPI = JSON.parse(XML.response);

    // Verifica se houve um erro no retorno da API
    if (stagedAPI.erro) {
        chamaModal("CEP não encontrado.");
        return;
    }

    lagradouro.innerText = stagedAPI.logradouro;
    bairro.innerText = stagedAPI.bairro;
    estado.innerText = stagedAPI.estado;
    cepResp.innerText = stagedAPI.cep;
    console.log(stagedAPI)

    
    
   };


}


botao.addEventListener("click",() => {
    const valCep = cep.value.trim(); 

    try{
        if(valCep.length !== 8){
            throw new Error("Apenas 8 números, sem espaço.") 
        }
        pullAPI(valCep)//colocando o var na function
    }catch(erro){
        chamaModal(erro.message)
    }

    
   });
   
   function chamaModal(messagem) {
    document.getElementById("textModal").innerText = messagem;
    modal.style.display = "flex";

    setTimeout(fechaModal, 4000); // CHAME UMA FUNÇÃO QUE IRÁ FECHAR ESSE MODAL depois de 2 segundos
}




// Função para fechar o modal
function fechaModal() {
    modal.style.display = "none";
}