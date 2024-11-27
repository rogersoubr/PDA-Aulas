// SPREAD Agrupar valores restantes de um array
const frutas = ["maçã", "banana", "laranja", "uva"];
const [primeira, ...restantes] = frutas;
console.log(primeira); // "maçã"
console.log(restantes); // ["banana", "laranja", "uva"]
//spread passa para frente/acrescenta

// REST Espalhar elementos de um array
const numeros = [1, 2, 3];
const numerosExpandido = [...numeros, 4, 5];
console.log(numerosExpandido); // [1, 2, 3, 4, 5]
//rest só mostra/complementa

//Spread "expande", enquanto rest "compacta".