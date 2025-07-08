import Link from "next/link";
import React from "react";

interface ProductDetailsProps{
    params: Promise<{ productId: string }>;//promessa do tipo productId string
}

export default async function ProductiDetails({params}:ProductDetailsProps ){
    const {productId} = await params;//a desistruturação recebe a espera do paametro id 

    const msg = productId === "2000" ? "Você comprou o 2000º do produto" : null;

    return(

        <div>
            Detalhes do produto de id: {productId}
            {msg}
            <Link href={`/product/${productId}/reviews`}>   Ver avaliações do produto 
            </Link>
        </div>

    );
}