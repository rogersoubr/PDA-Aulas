"use client";

import { CountContext } from "@/context/ContadorContext";
import { useContext } from "react";

export default function Pai(){
    //consome o contexto do contador
    const context = useContext(CountContext);

    //desestruturando o estado que vem do contexto
    const {count, increment} =  context

    return(
        <div className="bg-red-900" >
            <div className="ConteudoPai" >
                <h1>Componente pai | INCREMENTAR</h1>
                <h2>Valor: {count}</h2>
                <button onClick={increment} className="p-2 bg-amber-300 text-black rounded-sm" >

                    {""}Incrementar{""}
                </button>
            </div>
        </div>
    )

}