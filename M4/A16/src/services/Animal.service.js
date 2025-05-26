import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient(); // Cria a instância do cliente Prisma (Funções do SQL)

class AnimalService {
  async getAnimais() {
    const animais = await prisma.animal.findMany(); // SELECT * FROM Animais
    return animais;
  }

  async criaAnimal(data) {

    const novoAnimal = await prisma.animal.create({
      data: {
        nome: data.nome,
        nomeCientifico: data.nomeCientifico,
        genero: data.genero,
        familia: data.familia,
        bioma: data.bioma,
        popEstimada: data.popEstimada,
        nivelAmeaca: data.nivelAmeaca,
      },
    }); //INSERT INTO ANIMAL VALUES (?,?,?,?) [data.nome]
    return novoAnimal;
  }

  async updateAnimal(data) {

    const atualizaAnimal = await prisma.An.updateMany({
      where:{
        id:{
          contains: 'data.id',
        },
      },
      data:{
        nome: 'data.nome',
        nomeCientifico: 'data.nomeCientifico',
        genero: 'data.genero',
        familia: 'data.familia',
        bioma: 'data.bioma',
        popEstimada: 'data.popEstimada',
        nivelAmeaca: 'data.nivelAmeaca', 
      },
    });
    
  }

  async deletarAnimal(data) {

    const deletaAnimal = await prisma.Animal.delete{

    }
  };


}

export default new AnimalService();
