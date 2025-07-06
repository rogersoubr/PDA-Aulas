import produtos from "./data.js";

const lista = (array) =>{
    const varre = ( arraY) =>{
            for(let i=0; i<arraY.length; i++){ 
                console.log(`${arraY[i].id} | ${arraY[i].nome} | ${arraY[i].preco}`);
            }
    }
    array?  varre(array) : console.log("Erro");
} 


const filtra = (array, valor) =>{

    const prod = array.filter( (obj)=>{
        return obj.preco <= valor;
    })
    console.log(`\nprodutos até R$ ${valor}:`)
    for(let i =0 ; i<prod.length; i++){
            console.log(`${prod[i].id} | ${prod[i].nome} | ${prod[i].preco}`);
    }
} 

const aumenta = (array, prod, new_value) =>{
    const idProd = array.findIndex( (product) =>{
        return product.nome === `${prod}`;
    });
    
    array[idProd].preco = new_value; 
    console.log(`\nValor atualizado: \n${array[idProd].id} | ${array[idProd].nome} | ${array[idProd].preco}`);
    
} 

//TERNÁRIO
//condicao? verdadeiro : falso

lista(produtos);
filtra(produtos, 10);
aumenta(produtos,"melancia", 8)