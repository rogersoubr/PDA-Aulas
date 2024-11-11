// var name =  prompt("Digite seu nome:")

// function welcomeToTheMato(nome){
// alert(`Olá ${nome}`)
// }

// welcomeToTheMato(name);


var idade = Number(prompt('Digite sua idade: '));
var temp = Number(prompt('Quantos anos está na empresa: '));

function cargoPlus(year,time){
    if(year >= 25 && time>=2){
        alert('Pode ser gerente');
    }else{
        alert('Não pode ser gerente')
    }
}

cargoPlus(idade,temp);