//fetch é uma promess que faz requisição de api
const get = fetch("https://rickandmortyapi.com/api/character/2");

//COMO PRECISA DE .then FICARIA ASSIM:
// const get = fetch("https://rickandmortyapi.com/api/character/2");
// get
//   .then((response) => {
//     const data = response.json();
//     return data;
//   })
//   .then((responseJson) => {
//     console.log(responseJson);
//   })
//   .catch((erro) => {
//     console.log("Deu erro");
//   });


const  getData = async () => {
    try{
        //
        const response = await fetch("https://rickandmortyapi.com/api/character/2");
    
        //SEMPRE converter para json()
    
        //precisa do await porque o json retorna uma promeces
        console.log(await response.json());
    }catch(error){
        console.log(`Deu ruim ${error}`)
    }

}

getData();