import{ Game } from " .../model/game.js"

let db = [];

export function addGame(name, year, gender, plataforms){
    const newGame = new Game(db.length+1, name, year, gender, plataforms);//instanciando a classe game dando valor ao id
    db.push(newGame);
}

//LENDO
export function getGames(){
    return db;
}

//LENDO O ID
export function getGame(id){
    const game = db.find((value)=>value.id ===id);//find procura o id que for identico ao id que está sendo escrito
    if(!game){
        console.log("Game não encontrado");
    }
    return game;//já pegou o erro antes, o comum é o return
}

//ATUALIZANDO
export function updateGame(id,name, year, gender, plataforms){
    const gameExist = getGame(id);
    gameExist.name = name;
    gameExist.year = year;
    gameExist.gender = gender;
    gameExist.plataforms = plataforms;

    return gameExist
}

//DELETA
export function deleteGame(id){
    const index = db.findIndex((value)=>value.id ===id);
    if(index===-1){
        console.log("Jogo não encontrado");
    }
    return db.splice(index,1)[0]; //deletou aquele id, fica um buraco

}