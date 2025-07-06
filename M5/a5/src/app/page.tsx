"use client"
import Header from "@/components/style_inline";
import Span from "@/components/span_styled_JSX";
import Footer from "@/components/footer/footer";
import Card from "@/components/card_tailwinnd";
import Card2 from "@/components/card_modules/card2";
//import { useState } from "react";

export default function Home() {
  return (
    <>
      {/* HEADER */}
        <Header>
          <h1 className="badge">Funcionou</h1>
          <Span status="success"></Span>
        </Header>



      <Card className="w-[60%] h-[auto] bg-sky-800 text-2xl text-amber-800 flex flex-col justify-center items-center hover:bg-amber-800 hover:text-amber-50 rounded-2xl">

            <h1>Produto TAILWIND</h1>
            <img src="/image.png" alt="" className="w-[60%] rounded-2xl"/>
            <h3>R$ 100</h3>
            <p>É um produto muito bom</p>

      </Card>

      <Card2>
      </Card2>
            {/* FOOTER */}
      <Footer>
        <p>Marcas Aqui</p>
      </Footer>
    </>

  );
}