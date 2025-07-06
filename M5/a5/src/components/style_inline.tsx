"use client";
import React from "react"
 
interface HeaderProps{
    children: React.ReactNode;
 }

 export default function Header  ({ children }:HeaderProps){
    const RED: string = "#ff0000";
    
    return (
        <header 
            style={{ 
                width:"200px",
                height: "200px",
                color:"#212121", 
                backgroundColor:`${RED}`, 
            }}>

            {children}

        </header>
    );
 };


