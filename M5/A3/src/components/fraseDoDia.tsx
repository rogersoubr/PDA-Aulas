"use client";
import { useState, useEffect } from "react";
//tem que ter um estado frase -> do tipo string ou null (começa com null)
//tem que ter um estado carregando -> do tipo boolean que começa com true
//quando o componente for montado, espera 2s no effect e lança a frase
//enquanto estiver carregando, escreva, caragando...
//depois desse tempo, coloca a frase na tela



// interface Frase{
//     frase: string | null;
// }


export default function FraseDoDia(){
    const [frase, setFrase] = useState<null | string>(null);//recebe null ou string
    const [carregando, setCarregando] = useState(true);

    useEffect(
        //1° parametro -> função para atualizar valor
        ( )=>{
            //set time vai fazer a funcao anonima depois de 2 segundos.
            setTimeout(()=>{
                setFrase("A persistência realiza o impossível");
                setCarregando(false);
            },2000)
        }, []//2° parametro, array, ele mudando muda o resto (com nada = muda só uma vez)
    );

    return(
        //se tiver carregando preenchido (vai estar, e comeca em false)
        carregando? (  
        <div>
            <p>Carregando...</p>
        </div>
     ) : (
        <div>
            <p>{frase}</p>
        </div>
    )
);
}