
let num= prompt("Digite um número");

const mostra = (n) =>{
    console.log(n);
}

const executatAsync = (n, calback) =>{
    let dupli = num*2;
    console.log(n);
    setTimeout(calback(dupli),16000);
}

executatAsync(num, mostra)