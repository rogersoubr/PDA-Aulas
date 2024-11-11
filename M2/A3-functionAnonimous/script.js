const idade = (nascimento) =>{
    alert(2024-nascimento);
}

function pegaNascimento(exibeIdade){
    let nasc = prompt(Number('Qual o seu ano de nascimento? '));
    exibeIdade(nasc);
}
pegaNascimento(idade)