"use client"
import { createContext, useEffect, useState } from "react";
//CRIANDO CONTEXTO ---------------------------------------
//tipagem do contexto
interface ThemeContextType{
    theme: string;
    switchTheme: () => void;
}
// Definindo tipos literais para maior type safety
type Theme = "light" | "dark";

//contexto
export const ThemeContext = createContext<ThemeContextType>({
    theme:"light",
    switchTheme: () => {},
});

//PROVEDOR DE CONTEXTO -----------------------------------
// tipagem do provedor
interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
}


export const ThemeProvider = ({
    children,
    defaultTheme = "dark",

}: ThemeProviderProps) => {
    
    const[theme, setThemeStates] = useState<Theme>(defaultTheme);
    //a página renderinza, já altera o data-theme do html
    useEffect(()=>{
            document.documentElement.setAttribute("data-theme", theme);
        }, []  
    );
    //altera entre o tema, função do useStates
    const switchTheme = () =>{
        setThemeStates( (prevTheme)=> (prevTheme ==="light"? "dark": "light") );//vai mudar a car, tem a condição do estado da cor
    }

    //obj com os valores para o contexto
    const contextValue: ThemeContextType = {
        theme,
        switchTheme,
    };

    //retorna o componento com contexto
    return(
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    )

};

