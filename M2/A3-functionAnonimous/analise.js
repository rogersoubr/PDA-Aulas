const somarMedia = function (valor1, valor2, valor3, valor4) {//função que de fato soma
    alert((valor1 + valor2 + valor3 + valor4) / 4);
  };
  function media(funcaoParaSomar) {
    let nota1 = Number(prompt("Digite a sua nota 1:"));
    let nota2 = Number(prompt("Digite a sua nota 2:"));
    let nota3 = Number(prompt("Digite a sua nota 3:"));
    let nota4 = Number(prompt("Digite a sua nota 4:"));
    funcaoParaSomar(nota1, nota2, nota3, nota4);//função aleatória só para chamer
  }
  media(somarMedia);