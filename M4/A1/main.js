const parImpar = (num) => {

        if(num%1== 0){
            console.log(`Número ${num} Impar`);
        }else{
            console.log(`Número ${num} Par`);
        }

}
let numero = [];

for(let c = 1; c <= 10;c++){
    numero[c] = Number(prompt("Digite um número: "));
    parImpar(numero[c]);
}