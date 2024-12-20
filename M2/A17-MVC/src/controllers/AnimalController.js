import ProsutoModel from './Animal.js'; //importa o modelo do objeto

function retornaObj(image, titulo,preco){
    const product = new ProsutoModel(image, titulo,preco);
    return product;
}
