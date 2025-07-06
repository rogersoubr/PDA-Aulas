"use client";
import { useEffect, useState } from "react";

export default function Contador2(){
    const [contador, setContador] = useState<number>(0);//useState

    useEffect(
        // 1° parâmetro do effect: um função (se ela retornasse outra função x, a x viraria uma de limpeza)
        () => {
            console.log("O contador mudou para: ",contador);
        },
        //2° parâmetro do effect: um array que controla quando deve ser executado
        [contador]//nesse caso, sempre que contador mudar
    );

    return (
        <div>
            <p>contador: {contador}</p>
            <button onClick={()=> setContador((prev)=>  prev+1 )} >+</button>
        </div>
    )
}