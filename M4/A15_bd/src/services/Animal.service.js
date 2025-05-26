import {} from "../database.js";


class AnimalServices {
    async getAnimais(){
        //busca no banco
        const db = getDb();
        //coloca teste como o 
        const teste = await db.all(`SELECT * FROM Animal`);
        return teste;
    }

    criarAnimal(){
        //busca no banco
        const db = getDb();
        const {
            nomeGeral,
            nomeCientifico,
            genero,
            familia,
            PopEstimada,
            NivelAmeaca,
          } = req.body;

    }

    updateAnimal(){

    }

    deletarAnimal(){

    }


}

export default new AnimalServices;