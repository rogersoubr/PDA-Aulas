import React from "react";

interface HeaderChildren{
    children:React.ReactNode;//criando tipo children que recebe esse react
}

export default function Header({children}: HeaderChildren){
    return (
        <header className="w-[100%] h-[80px] bg-amber-800 text-amber-50">
            {children}
        </header>
    );
}