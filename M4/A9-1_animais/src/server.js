//importando o express
import express from "express";
//importando as rotas de animais
import animais from "./routes/Animais.route";


//instanciando o express
const app = express();

//colocando porta
const PORT = 4000;

app.use(express.json());
//rota padrao em routes
app.use("/animais",animais);

//escuta a porta e liga o servidor
app.listen(PORT,() =>{
    console.log(`Servidor rodando na porta ${PORT}`)
});