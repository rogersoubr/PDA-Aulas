// let numero = 0;

// //verifica antes
// while(numero<10){
//     numero++;
//     console.log(numero);
// }

// //faça enquanto, pega antes da ação, vai imprimir uma vez, independente
// let num = 0;
// do{
//     console.log(num+" rapaz");
//     num++
// }while(num<10)

// let array = ["Roger","Matheus","Suelen","Mario","Sávio","Carlos", "eitaPapai"]

// let aC = array.length;
// console.log();
// for(c=0;c<=aC;c++){
//     console.log(`${array[c]} o próximo será ${array[c+1]}`);
// }

let array = [];

for(let i=0;i<3;i++){
    let nome = prompt("Digite o seu nome: ")
    array[i] = nome
    document.write(`<h1>${array[i]}</h1>`)
}
