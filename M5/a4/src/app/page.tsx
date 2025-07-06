"use client";
import { useState, useEffect } from "react";
import Card from "@/components/card";
import Button from "@/components/button";

export default function Home() {
      const [lastCardBgColor, setLastCardBgColor] = useState("#ff0000"); // Estado para a cor do último Card

    const handleButtonClick = () => {
        setLastCardBgColor("#00ff00"); // Muda a cor para verde
    };
  return (
      <>
      
        <Card border="10px" width="100px" heigth="50px" bkcolor="#ff0000" > <div>Recebi</div> </Card>

        <Card border="10px" width="100px" heigth="50px" bkcolor="#ff0000"> <div>recebi 2</div> </Card>

        <Card border="10px" width="100px" heigth="50px" bkcolor="#ff0000" > <div>recebi 3</div> </Card>

        <Card border="10px" width="200px" heigth="200px" bkcolor={lastCardBgColor}> {/* Usa o estado aqui */}
          <div>recebi 4</div>
          <Button onClickButton={handleButtonClick}></Button> {/* Passa a função para o botão */}
        </Card>

      </>
  );
}
