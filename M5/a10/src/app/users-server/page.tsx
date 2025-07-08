import { error } from "console";
import { Festive } from "next/font/google";
import React from "react";

//tipar o que vem da API
interface User{
    id: number;
    name: string;
    username: string,
    email: string;
    phone: string;
    website: string;
}

export default async function UserServer(){
    await new Promise((resolve)=> setTimeout(resolve, 2000) );//simular o dalay da API, porque não temos useState aqui

    let users: User[] = [];

    try{
        //consome a Api, espera a resposta e coloca em 'response'
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!response.ok){
            throw new Error("Falha ao consumir a API");
        }
        users = await response.json();

        
    }catch(error){
        console.log("Falha ao consumir da API", error)
    }

    return (

        <div className="flex flex-col justify-center items-center">
            <h1>Users: </h1>
            <ul className="flex flex-wrap gap-2">
                {users.map((user)=>(
                        <li key={user.id} className="bg-white p-4 rounded shadow mb-4 text-gray-800" >
                            <h2 className="font-bold">{user.name}</h2>
                            <p>Username: {user.username}</p>
                            <p>Email: {user.email}</p>
                            <p>Phone: {user.phone}</p>
                            <p>Website: {user.website}</p>
                        </li>
                    ))
                }    
            </ul>
        </div>

    );

}