import React, {useState} from "react";

interface FilhoProps{
    countDoPai: number;
}

export default function Filho({countDoPai}:FilhoProps){
    const [dados, setDados] = useState<number | null>(0);

    return (
        <div className="Filho">
            <h1>Componente Filho</h1>
            <h2>Recebi do papai {dados}</h2>
            <div className="flex flex-colgap-y-2">
                {/* recebendo dados do pao */}
                <button  onClick={ ()=> setDados(countDoPai)}  className="p-2 bg-amber-300 text-black rounded-sm">
                    {" "}PUXAR DO PAPAI{" "}
                </button>

            </div>
        </div>
    )
}