const soma = () =>{ //arrow function
    //pegando áreas html
    const input1 = document.getElementById("num1");
    const input2 = document.getElementById("num2");
    const input3 = document.getElementById("operador");
    const div = document.getElementById("area");
    div.innerText = '';//limpa o espaço

    //pegando valores das áreas 
    let num1 = Number(input1.value);
    let num2 = Number(input2.value);
    let operador = input3.value;

    if(operador != "+" || operador != "-" || (num1 == "" || num2 == "")){//quando estiver vazio/indiferente
        div.innerText="Preencha todos os campos corretamente";
    }else if(operador == "+"){
            const h2 = document.createElement("h2") //cria o elemnto
            h2.innerText=`Resultado: ${num1+num2}`; //coloca o  valor(resultado) no elemento
            div.appendChild(h2); //coloca o criado na div
        }else if(operador == "-"){
            const h2 = document.createElement("h2")
            h2.innerText=`Resultado: ${num1-num2}`;
            div.appendChild(h2);
        }   

} 