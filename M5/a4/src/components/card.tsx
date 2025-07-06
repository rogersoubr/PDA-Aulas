"use client";
import React from "react"
//1° cria o children
interface cardProps{
    children?:React.ReactNode;
    border?: string;
    width?: string;
    heigth?: string;
    bkcolor?: string; 
}

//2° coloca como prop do tipo da interface
export default function Card({children, border,width,heigth,bkcolor}:cardProps){
    return (
        <div style={{ borderRadius: border, width: width, height: heigth, backgroundColor: bkcolor }}> 
        {children} {/*//coloca o children */}
        </div>
    );
}