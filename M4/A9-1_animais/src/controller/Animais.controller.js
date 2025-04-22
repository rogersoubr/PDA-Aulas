import {Animais} from "../models/Animais.model.js";
//import {Locais} from "../models/Locais.model.js";
import { v4 as uuidv4 } from "uuid";

class AnimaisController{
    getAnimais(req,res){
        res.json({
            animal: Animais.animal}
        );
    }

    criarAnimais(req, res){
        const { nome, especie, familia, ambiente, bioma } = req.body;

        if ((!nome || !especie || !familia || !ambiente || !bioma)){
            res.status(400).json({
                message:"Está com os dados incorretos"
            });
        }

        console.log(nome, especie, familia, ambiente, bioma); //mostra o que foi colocado

        const novoAnimal = new Animais(uuidv4(),nome, especie, familia, ambiente, bioma); //instancia a classe

        novoAnimal.salvarAnimal(novoAnimal);//q maluco

        res.json({ message: "Animal foi salvo", animal: novoAnimal});

    }

}

export default new AnimaisController;//exportando a classe