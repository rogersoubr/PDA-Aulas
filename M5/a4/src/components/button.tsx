"use client";


interface propsButton{
    width?:string;
    heigth?: string;
    bkcolor?:string;
    color?: string;
    onClickButton?: ()=> void;
}



export default function Button({width,heigth,bkcolor,color, onClickButton}:propsButton){

    return(
        
        <button style={{ width:width, height:heigth, backgroundColor:bkcolor, color: color }} onClick={onClickButton}>
            clique
        </button>

    );
    
}