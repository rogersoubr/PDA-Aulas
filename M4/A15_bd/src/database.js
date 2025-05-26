//ARQUIVO DE CONFIGURAÇÕES DE CONEXAÃO COM O BD

import sqlite3 from "sqlite3";//le e escreve os comandos do sql no sqlite

import { open } from "sqlite";
import { logEvents } from "./middlewares/logger.middleware";

//variavel global do bd
let db;

//função que inicia o banco de dados
export async function initBb(){
    db =  await open ({
        filename: "../src/data/banco.db",//arquivo de banco de dados do sistema
        driver: sqlite3.Database,
    })
    return db;
}

//funcao que expoe o banco de dados
export function getDb(){
    if(!db){
        logEvents(
            "Banco de dados não foi inicializado ou não encontrado",
            "data_base.log"
        );
    }

    return db;
}

//TABELAS
 
//tabela animal
export async function tabelaAnimal(){
    const db = getBd();
    await db.exec(
        `CREATE TABLE IF NOT EXISTS Animal( id TEXT PRIMARY KEY,
            nome VARCHAR(30) NOT NULL,
            nomeCientifico VARCHAR(45) NOT NULL,
            genero VARCHAR(25) NOT NULL,
            familia VARCHAR(25) NOT NULL,
            popEstimada INTEGER NOT NULL,
            bioma VARCHAR(30) NOT NULL,
            nivelAmeaca VARCHAR(5) NOT NULL
        );`
    );
    logEvents(`Tabela Animal criada com sucesso!`,"data_base.log");
}

//tabela animal
export async function adicionaaAnimal(){
    const db = getBd();
    await db.exec(
        `CREATE TABLE IF NOT EXISTS Animal( id TEXT PRIMARY KEY,
            nome VARCHAR(30) NOT NULL,
            nomeCientifico VARCHAR(45) NOT NULL,
            genero VARCHAR(25) NOT NULL,
            familia VARCHAR(25) NOT NULL,
            popEstimada INTEGER NOT NULL,
            bioma VARCHAR(30) NOT NULL,
            nivelAmeaca VARCHAR(5) NOT NULL
        );`
    );
    logEvents(`Tabela Animal criada com sucesso!`,"data_base.log");
}