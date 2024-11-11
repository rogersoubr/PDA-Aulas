// var name = prompt('Digite seu nome: ')
// var nasc = Number(prompt('Digite seu ano de nascimento: '));
// var id = 2024-nasc;
// if(id=>18){
//     console.log(`Marcha na habilita ${name}`)
// }else{
//     console.log(`Marcha no ensino médio ${name}`)
// }


function score(){
    // Buscando partes do html por id
    var enterName = document.querySelector('input#pushName');
    var enterFal = document.querySelector('input#pushFal'); 
    var enterPoint = document.querySelector('input#pushPoint');
    // Pegando a parte da resposta
    var enterResp = document.querySelector('.result');

    // tratando com valores que tem nas ares html 
    var name = String(enterName.value);
    var missing = Number(enterFal.value);
    var point = Number(enterPoint.value);

    if(point >= 90 && missing <=2 ){
        enterResp.innerHTML = `Excelente ${name}! Você passou!`;
    }else if(point >= 75 && missing <=5){
        enterResp.innerHTML = `Tá maneiro ${name}, passou raspando`;
    }else{
        enterResp.innerHTML = `Virou saudade ${name} 🤣🤣🤣🤣`;
    }
}