
const nome = document.getElementById("name");
const dimension = document.getElementById("dimension");
const type = document.getElementById("type");

function pegaDAdosApi(nomeLocation){//pega o nome
  const xml = new XMLHttpRequest();

  //abrindo
  xml.open("GET", `https://rickandmortyapi.com/api/location/?name=${nomeLocation}`);//coloca o nome no link

  xml.open();

  //tratatando os dados ONLOAD retorna, o que você vai fazer
  xml.onload = function (){//
    const respostaAPI = JASON.parse(xml.response);//JASON.PARSE TIRA DA STRING e transforma em objeto

    //depois de converter, olhe a organização 
    
    console.log(respostaAPI.results[0].name); //depende da documentação, nesse caso pega o resultado do primeiro JASON, que tenha o atributo nome

    nome.innerHTML = respostaAPI.results[0].name;
    dimension.innerHTML = respostaAPI.results[0].dimension;
    type.innerHTML = respostaAPI.results[0].dimension;


  }

}
pegaDAdosApi("Citabel of Rick");