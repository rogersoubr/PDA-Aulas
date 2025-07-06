import React from "react";

import style from "@/components/card_modules/card2.module.css"

interface Cad2Props{
    children: React.ReactNode;
}
//imagem tem que ficar no public
export default function Card2(){
    return(
        <div className={style.div}>
            <h1>Produto MODULES</h1>
            <img src="/image.png" alt="" className={style.img}/>
            <h3>R$ 100</h3>
            <p>É um produto muito bom</p>
            <button>adicionar</button>
        </div>
    );
}