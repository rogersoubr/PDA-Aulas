
const filtrarElementos = (array) =>{
    const par = array.filter(x=> x%2==0);
    console.log(par);
}

const elementos = (funtion) =>{
    let m = [1,2,3,4,5,6,7,8,9,10];
    funtion(m);
}







elementos(filtrarElementos)
// document.querySelector("#result");

console.log("oi")