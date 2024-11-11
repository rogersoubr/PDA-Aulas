
    function adicionaCampo(event){
        //não recarrega a página
        event.preventDefault();//impede de recarregar

        //puxa a quantidade
        let numMedia = document.querySelector('input#quantidade');
        let quantidade = Number(numMedia.value);

        //puxa o local que mostra os inputs
        const enputMostra = document.querySelector('div#inputMostra');
        enputMostra.innerHTML = '';//limpa


        for(i=0;i<quantidade;i++){
            const inp = document.createElement('input');
            inp.type = 'Number';
            inp.placeholder = `Nota ${i+1}`;
            inp.max = '10'; //tamanhp max do input
            inp.id = `nota${i+1}`; //tamanhp max do input
            enputMostra.appendChild(inp);//appendChild coloca um novo filho, innerHTML muda todo o bloco
        }
        
    };

function enviarNota(event){
    event.preventDefault();

    //cada input
    const inp = document.createElement('input');

    //quantidade de input
    let numMedia = document.querySelector('input#quantidade');
    let quantidade = Number(numMedia.value);

    //Pega do local que mostra
    for(c=0;c<quantidade;c++){
        const valInput = document.querySelector(`input#nota${c+1}`);
        let integerInput =Number(valInput.value);
        var nota = [integerInput];

        let media = nota+nota/quantidade 
        console.log(nota)
        
    }

}
