"use client"

import { CountContext } from "@/context/ContadorContext"
import React, {useContext} from "react"

export default function Filho(){
    //consome o contexto
    const context = useContext(CountContext);

    const {count, decrement} = context;
    return(
        <div className="bg-orange-400">
            <h1>Componente filho | DECREMENTO</h1>
            <p>Valor: {count}</p>
            <button onClick={decrement} className="p-2 bg-amber-300 text-black rounded-sm">
                {""}DECREMENTAR{""}
            </button>
        </div>
    )

}