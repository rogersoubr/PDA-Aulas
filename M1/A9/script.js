// var nasc = Number.parseFloat(prompt("Digite o seu ano de nascimento"));
//  var id = 2024-nasc;
//  if(id>18){
//     alert('Vamos habiliar')
//  }else{
//     alert('tá novo')
//  }

var sald = Number.parseFloat(prompt('Digite o seu saldo'));
var prod = Number.parseFloat(prompt('Digite o valor do produto'));
var ceras = Number.parseFloat(prompt('Score do cerasa'));
if(sald>=prod){
    alert('Receba')
}else if(ceras>=400){
    alert('passa no credito')
}else{
    alert('Devolva')
}