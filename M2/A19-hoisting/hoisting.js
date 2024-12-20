// idadeDirigir(18);//vai funcionar, é hoisting EVITE
// mensagem()//chamou o valor, mas nãoa vai, é unhoisting

// function idadeDirigir(idade){
//     if(idade<18){
//         console.log("Não pode")
//     }else{
//         console.log("Pode")
//     }
// }

// const mensagem = function(){
//     console.log("nem vai mostrar")
// }


//USAR ANONIMAS, FORMAS DE DECLARAR:
const btn = document.getElementById("button");
btn.addEventListener("click",() =>{
    const num = document.getElementById("num");
    num.innerHTML = "";
    const result = document.getElementById("result");
    result.innerText = num.value%2==0 ?"Número Par":"Número impar";
});