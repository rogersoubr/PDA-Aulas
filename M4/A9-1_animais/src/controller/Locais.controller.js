//import {Animais} from "../models/Animais.model.js";
import {Locais} from "../models/Locais.model.js";
import { v4 as uuidv4 } from "uuid";

class LocaisController{
    getAnimais(req,res){
        res.json({
            local: Locais.local}
        );
    }

    criarLocais(req, res){
        const { nome, proposito, endereco } = req.body;

        if ((!nome || !proposito || !endereco)){
            res.status(400).json({
                message:"Está com os dados incompletos"
            });
        }

        console.log(nome, proposito, endereco); //mostra o que foi colocado

        const novoLocal = new Locais(uuidv4(),nome, proposito, endereco); //instancia a classe

        novoLocal.salvarLocal(novoLocal);//q maluco

        res.json({ message: "Novo local foi salvo", local: novoLocal});

    }

}

export default new AnimaisController;//exportando a classe