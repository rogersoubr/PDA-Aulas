//NÚMERO 2
const operar = (functionCalcula) =>{
    let n1 =Number(prompt("Digite o primeiro número: ")); 
    let n2 =Number(prompt("Digite o segundo número: ")); 
    let operador =prompt("Digite os operadores (/ , * , + ou -) "); 
    functionCalcula(n1,n2,operador);
}

const calculadora =  (num1, num2, operador) =>{
    if((num1 == 0 || num2 == 0) && operador=="/"){
        alert("Não dá para dividir por 0 ");
    }else{
        if(operador=="/"){
            alert(`Resultado: ${num1/num2}`);
        }else if(operador=="*"){
            alert(`Resultado: ${num1*num2}`);
        }else if(operador=="+"){
            alert(`Resultado: ${num1+num2}`);
        }else if(operador=="-"){
            alert(`Resultado: ${num1-num2}`);
        }
    }
}

operar(calculadora)