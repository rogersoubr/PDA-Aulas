const dataInicial = document.getElementById("dataIni");
const dataFinal = document.getElementById("dataFim");
const btn = document.getElementById("envia")
const resultado = document.getElementById("result");
const mostra = document.getElementById("mostra");
mostra.style.display="none"//escondendo o azulzinho

btn.addEventListener("click", ()=>{
    //mostrando o azulzinho
    if(mostra.style.display=="none"){
        mostra.style.display="flex"
    }

    //definindo valores do date
    const dataComeco = new Date(dataInicial.value);
    const dataChegou = new Date(dataFinal.value);
    const configs ={
        language:"pt-BR",
        options:{
            day:"numeric",
            year:"numeric",
            hour:"2-digit",
            minute: "2-digit",
            second:"2-digit",
        },
    };
    const formatoHora = new Intl.DateTimeFormat(configs.language,configs.options);

    const momentoIniciou = formatoHora.format(dataComeco);
    const momentoAcaba = formatoHora.format(dataChegou);
    resultado.innerText = horaIniciou;
});
