"use client"
//criando 
import { createContext, useState } from "react";
//criando contexto e seus valores
export const CountContext = createContext({
    count: 0,
    increment: () => {},
    decrement: () => {},
    delet: () => {},
});

interface CountProviderProps{
    children: React.ReactNode;
}

//cria o provedor 
export const CountProvider = ({children}: CountProviderProps )=>{
    //useState do estado da contagem
    const [count, setCount] = useState<number>(0);

    //função que atualiza o aumenta e atualiza o valor do state
    const increment = () => {
        setCount(count+1);
    }

    const decrement = () =>{
        setCount(count -1);
    }

    const delet = () =>{
        setCount(0);
    }

    return(
        // retorna o provedor com o prop value valendo o valor do state
        <CountContext.Provider value={{ count, increment, decrement, delet }}>
            {children}
        </CountContext.Provider>
    )
}