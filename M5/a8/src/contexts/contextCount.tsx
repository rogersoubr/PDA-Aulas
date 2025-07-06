"use client"; // trabalha pelo lado do cliente
import React from "react";
import { useState } from "react";

export const  Contador(): React.ReactNode {
    //   Constante que atualiza
    //   Variável, Função
    const  [contador, setContador] = useState(0); //Valor inicial que a variavél vai ter
    // Função que atualiza o valor do contador
  //  setContador(contador + 1) // Incrementando o valor de contador  -> tava dando erro 
    /* callback para o onclick, pq é um edventlisten */
    return (
        <div className="flex flex-col gap-y-2">
            <button onClick={()=>setContador(contador + 1)}>Incrementar</button>  
            <p>Valor do Contador {contador} </p>
            <button onClick ={()=>setContador(0)}>Zerar</button>
        </div>
    );
}