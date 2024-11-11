
// NÚMERO 1
function escreve(nome){
    alert(nome);
} 

const recebe = (functionRecebe) =>{
    let nome = prompt('Digite seu nome: ');
    functionRecebe(nome) ;
}

recebe(escreve);

