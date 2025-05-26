import sqlite3 from "sqlite3"; // Escreve os comandos do SQL
import { open } from "sqlite"; // Abre o arquivo no sistema
import { logEvents } from "./middlewares/logger.middleware.js";

// Variável global para o banco de dados
let db;

// Função para inicializar o banco de dados SQLite
export async function initDb() {
  db = await open({
    filename: "./src/data/banco.db", // Arquivo de banco de dados SQLite
    driver: sqlite3.Database, // É o driver que faz todas as consultas em SQL no SQLite
  });

  logEvents("Banco de dados inicializado com sucesso", "data_base.log");
  return db;
}

// Função para expor o banco de dados para nossa aplicação
export function getDb() {
  if (!db) {
    logEvents("Banco de dados não foi inicializado", "data_base.log");
    console.log("Banco de dados não foi inicializado");
  }

  // Garante a exportação do banco
  return db;
}

export async function tabelaAnimal() {
  const db = getDb();
  await db.exec(`CREATE TABLE IF NOT EXISTS Animal (
    id TEXT PRIMERY KEY,
    nomeGeral VARCHAR(30) NOT NULL,
    nomeCientifico VARCHAR(45) NOT NULL,
    genero VARCHAR(25) NOT NULL,
    familia VARCHAR(25) NOT NULL,
    PopEstimada INTEGER NOT NULL,
    ListaVermelha VARCHAR(5) NOT NULL
    );`);
  logEvents(`Tabela Animal criada com sucesso!`, "data_base.log");
}
