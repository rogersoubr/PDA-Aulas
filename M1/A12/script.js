// Variáveis com as frases
// var fras1 = "Não sou eu!";
// var fras2 = "Eu tentei te avisar desde o início!";
// var fras3 = "Já pensou que o monstro pode ser contralado?";

// //testando contagem a quantidade de letras
// var Numfras1 = fras1.length;
// var Numfras2 = fras2.length;
// var Numfras3 = fras3.length;
// console.log(Numfras1)
// console.log(Numfras2)
// console.log(Numfras3)

// if(Numfras1 > Numfras2 || Numfras3){
//     console.log('A primeira frase é maior')
// }else if(Numfras2>Numfras1||Numfras3){
//     console.log('A segunda frase é maior')
// }else{
//     console.log('A terceira frase é maior')
// }


let yOld = 10;
let hour = 10;
let week = 'saturday'
let pass = 10;

//teste idade
if(yOld<=5){
    console.log('Viaja de graça')
    pass = 0;
}else if(yOld>5 && yOld<18){
    console.log('30% de desconto')
    pass = pass*0.7;

}else if(yOld>=18 && yOld<65){
    console.log('Paga total')
}else{
    console.log('50% de desconto')
    pass = pass*0.5;
}

//teste horas
if(hour>=7 && hour<=9 || hour>=17&&hour<=19){
    pass += pass*1.2;
    console.log('20% de aumento')
}


//teste semana
if(week == 'saturday' || week=='sunday'){
    pass = pass*0.9;
    console.log('10% de desconto')
}
console.log(pass+'eita')
