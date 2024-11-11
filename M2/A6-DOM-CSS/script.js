const titulo = document.getElementById("titulo");

// Object.assign(titulo.style,{
//     backgroundColor:"blue",
//     fontSize: "20px",
//     margin: "10px", 
// });

titulo.style.backgroundColor="white";
const cor = ()=>{
    const button= document.getElementById("botao");
    if(titulo.style.backgroundColor=="white"){
        titulo.style.backgroundColor="green";
        button.innerText="acesso";
    }else if(titulo.style.backgroundColor=="green"){
        button.innerText="apagado";
        titulo.style.backgroundColor="red";
    }else{
        titulo.style.backgroundColor="green"
    }
    
}