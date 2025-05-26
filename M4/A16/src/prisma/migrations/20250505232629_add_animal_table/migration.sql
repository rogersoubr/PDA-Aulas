-- CreateTable
CREATE TABLE "Animal" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "nomeCientifico" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "familia" TEXT NOT NULL,
    "popEstimada" INTEGER NOT NULL,
    "bioma" TEXT NOT NULL,
    "nivelAmeaca" TEXT NOT NULL
);
