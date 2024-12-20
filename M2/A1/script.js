//alunos
const numAlunos = document.querySelector('input#quantidadeAlunos');
let quantidadeAlunos = Number(numAlunos.value);

//motas
const numProvas = document.querySelector('input#quantidadeProvas');
let quantidadeProvas = Number(numProvas.value);

//result
const inputMostra = document.querySelector('div#inputMostra');
//btn
const enviarNota = document.getElementById("enviarNota");

function adicionaCampo(event){
    //não recarrega a página
    event.preventDefault();//impede de recarregar
    

        
    enviarNota.style.display = "flex";

    //puxa o local que mostra os inputs
        
    inputMostra.innerHTML = '';//limpa

    quantidadeAlunos = Number(numAlunos.value);
    quantidadeProvas = Number(numProvas.value);

    for(let c=0; c<quantidadeAlunos;c++){ //alunos

 
        const divsAlunos = document.createElement('div');//container de alunos
        divsAlunos.className = "divsAlunosContent";
        divsAlunos.id = `aluno${c+1}`//cada aluno
        divsAlunos.innerHTML = `<h1>Aluno${c+1}</h1><label><h3>Adicione o nome dele:</h3></label>`

        const inpNome = document.createElement('input');//coloca o nome
        inpNome.id = `inpNome${c+1}`;
        inpNome.placeholder = "Nome";

        inputMostra.appendChild(divsAlunos); 
        divsAlunos.appendChild(inpNome);


        


        for(let i=0;i<quantidadeProvas;i++){//mota de cada aluno
            const inp = document.createElement('input');
            inp.type = 'Number';
            inp.placeholder = `nota${i+1}`;
            inp.maxlength = '10'; //tamanho max do input
            inp.id = `inpNome${c+1}nota${i+1}`; //id do input
            inp.className = "inpNotas"
            divsAlunos.appendChild(inp);//appendChild coloca um novo filho, innerHTML muda todo o bloco
        } 



    }

};







enviarNota.addEventListener("click", (event)=>{

    event.preventDefault();


    //cada input
    const inp = document.createElement('input');

    
    quantidadeAlunos = Number(numAlunos.value);//quantidade de divs
    quantidadeProvas = Number(numProvas.value);//quantidade de inputs

    //VARIAVEIS
    let alunos={};//objeto de arrys para organizar, nome e notas
    let acima =0;//tem que drclarar como número e tuto antes do for
    let soma =0;
    let notas = 0; 
    let media = 0;
    let result = ""
    
    for(let c=0;c<quantidadeAlunos;c++){
        const inpResultNome = document.querySelector(`input#inpNome${c+1}`);
        let resultNome =  inpResultNome.value.trim();

        alunos[resultNome] = [] //colocando nomes dentro do objeto como um array vazio para esse nome 

        //{[]} = vai colocar um objeto com valores em array
        //[{}] = vai colocar um array com vários objetos
        //   objeto={
        //         "nome":aa,bb,ccc    
        //     };

            for(let i = 0; i<quantidadeProvas;i++){
                const inpResultNotas = document.querySelector(`input#inpNome${c+1}nota${i+1}`);

                let resultNotas = inpResultNotas.value.trim();

                alunos[resultNome].push(resultNotas);
                
            }    
            
    }


    for (let nome in alunos) {
        notas = alunos[nome].map((nota)=> Number(nota));//mapeando cada elemento em number
        soma = notas.reduce((acumula, nota) => acumula + nota, 0);//somando cada elemento por cada no array
        media = soma/quantidadeProvas;

        if(media>=7){//verifica se a media está acima
            acima+=1
            result = "Aprovado"
        }else{
            result = "Reprovado"
        }

     console.log(`Média de ${nome}: ${media}`);//teste

     const divResultMedia = document.createElement('div');
     divResultMedia.className = "divResultMedia";
     divResultMedia.innerHTML = `<h1>Média de ${nome}:</h1> <br> <h4>${media} pontos</h4> <h1>${result}</h1>`;

     inputMostra.appendChild(divResultMedia);
    }

 
    console.log(acima)

    const versala = () =>{
        const acimaH1 = document.createElement('h1');
        acimaH1.id = "acimaH1"

        if(acima >= (0.6*quantidadeAlunos)){
            acimaH1.innerText="A SALA É TOP!!!";
        }else{
        acimaH1.innerText = "Sala ruim essa em"
        }

        inputMostra.appendChild(acimaH1);
    }

    versala();


});






//btn
const apagarNota = document.getElementById("apagar");

apagarNota.addEventListener("click", (event)=>{
    event.preventDefault();

        inputMostra.innerHTML = '';//limpa
        numAlunos.value = '';
        numProvas.value = '';
});

