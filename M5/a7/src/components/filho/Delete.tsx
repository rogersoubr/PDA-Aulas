"use client"

import React, { useContext } from "react"
import { CountContext } from "@/context/ContadorContext"

export default function Filho2(){
    //consumindo contexto
    const context = useContext(CountContext);

    const {count, delet} = context

    return(
        <div className="bg-teal-300">
            <div className="Conteudo-delete">
                <h1>Componente filho | DELETE</h1>
                <h2>Valor: {count}</h2>
                <button onClick={delet} className="p-2 bg-amber-300 text-black rounded-sm"> 
                    {""}Deletar{""}
                </button>
            </div>
        </div>

    );

} 


