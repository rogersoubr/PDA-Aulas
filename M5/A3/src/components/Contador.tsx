"use client";

import { useState } from "react";//tem que importar o useState
//import Buttons from "./Button";]





export default function Contador(){
    //não tem tipagem por
    const [contador, setContador] = useState(0);//funcao use state comeca com 0, estado é 0, ou seja, contador começa coom 0.
    //[] está desestruturando o array que o useState retorna
    //useState sempre retorna um array com 2 termos:
    //1) o valor atual
    //2) uma função que vai mudar esse valor

    return(
        <div>
            <p>contador: {contador}</p>{/*valor atual*/}
            {/*Botao 1*/}
            <button onClick={() => setContador(contador+1)}>{/*setContador é a função que vai mudar o valor do useState*/}
                {/*<Buttons  title="+" width="30px" height="30px" color="000000" bk_color="f3f3f3" ></Buttons>*/}
                +
            </button>

            {/*Botao 2*/}
            <button onClick={() => setContador(0)}>Delete
                 {/*<Buttons  title="Delete" width="10px" height="10px" color="000000" bk_color="ff0000" ></Buttons>*/} 
            </button>
        </div>



    )

}