"use client"; // Trabalhar pelo lado do cliente
import React from "react";
import { useState } from "react";
export default function Contador(): React.ReactNode {
  //     Variável, Função
  const [contador, setContador] = useState<number>(0); // Valor inicial que a variável vai ter
  // setContador(contador + 1) // Incrementando o valor de contador
  return (
    <div className="flex flex-col gap-y-2">
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <p>Valor do Contador {contador} </p>
    </div>
  );
}