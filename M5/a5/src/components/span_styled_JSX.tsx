"use client"

interface SpanProp{
    status:string;
}

 export default function Span  ({ status }:SpanProp){
    return (

        <span className="badge">{/* recebe a classe badge */}
            {status}

            <style jsx>{`
                //CLASSE 
                .badge{
                    //PROPRIEDADES
                    background: ${ status === "success" ? "#00ff00" : "#ff0000"};

                    padding: 2px;
                }

            `}</style>

        </span>

    );
 };