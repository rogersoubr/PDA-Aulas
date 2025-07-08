"use client"
import React, {useEffect, useState} from "react"
import Skeleton from "@/skeleton"

//tipar o que vem da API
interface User{
    id: number;
    name: string;
    username: string,
    email: string;
    phone: string;
    website: string;
}

export default function UsersClient(){
    //estados do carregamento e de dados do usuário
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);//começa carregando a tela

    useEffect(()=>{ 
        //faz uma busca aos usuários
        //isso tudo, a tela não inicou ainda
        async function fetchUsers(){
            try{
                //espera a resposta da API, coloca em 'response'
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );
                if(!response.ok){
                    throw new Error ("Fanla ao consumir a API");
                }
                    //espera a resposta de 'response', coloca em data os calores em json 
                const data = await response.json();
                setUsers(data);//usuarios recebem data
            }catch(error){
                console.log("Erro ao tentar fazer requisição ou setar estado do componente", error);
            } finally{
                setLoading(false);//quando até a tentativa acabar, retorna
            }
        }
        fetchUsers();//chama a função, porque o dados tem que vir antes de carregar a tela
    },[] );

    if(loading){
        return <Skeleton></Skeleton>;//vai retornando o skeleton ai
    }

    return(

        <div className="flex flex-col justify-center items-center">
            <h1>User:</h1>
            <ul className="flex flex-wrap gap-2">
                {users.map((user) =>(
                    <li key = {user.id} className="bg-white p-4 rounded shadow mb-4 text-gray-800" >
                        <h2 className="font-bold">{user.name}</h2>
                        <p>Username: {user.username}</p>
                        <p>Email: {user.email}</p>
                        <p>Phone: {user.phone}</p>
                        <p>Website: {user.website}</p>
                    </li>
                ) )}
            </ul>
        </div>

    );
    
}