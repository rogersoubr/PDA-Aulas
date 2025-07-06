"use client"

import React, {useState} from "react";
import Filho from "../filho/filho";
import stylePaiModule from "@/components/pai/pai.module.css"


export default function Pai(){
    const [count, setCount] = useState<number>(0);

    const increment = ()=>{
        setCount(count + 1);
    }

    return(
        <div className={stylePaiModule.Pai}>
            <div className="Conteudo-pai">
                <h1>Componente Pai</h1>
                <h2>Contador {count}</h2>
                <button onClick={increment} className="p-2 bg-amber-300 text-black rounded-sm">
                {" "} ADD {" "}
                </button>            
            </div>

            <Filho countDoPai={count}></Filho>
        </div>
    );

}