//devo consumir alguma API com o que foi ensinado hoje

const  getData = async () => {
    try{
        //
        const response = await fetch("viacep.com.br/ws/35500330/json/");
        // Endereço: Rua Operário Sebastião
        // Bairro: Danilo Passos
        // Cidade: Divinópolis
        // Estado: Minas Gerais
    
        //SEMPRE converter para json()
    
        //precisa do await porque o json retorna uma promeces
        console.log(await response.json());
    }catch(error){
        console.log(`Deu ruim ${error}`)
    }

}
getData();