// let dadosUser = ["Rogger", 27, "Rua São Paulo, 170", 2006]


// dadosUser.push("Filho da Marcia");
// document.write("<h1>"+dadosUser+"</h1>");

// //remove o último dado do array
// dadosUser.pop();
// document.write("<h1>"+dadosUser+"</h1>");

// //adiciona um valor como primeiro
// dadosUser.unshift("começo1", "começo2");
// document.write("<h1>"+dadosUser+"</h1>");

// //remove o primero dado do array
// dadosUser.shift();
// document.write("<h1>"+dadosUser+"</h1>");

let nameArray = ["Roger", "Kelvis", "Francisco"];

//unshift
function addFirst(arr,dad){
    arr.unshift(dad);
    document.write("<h1>"+arr+"</h1>")
}

//pop
function removeFinal(arr){
    arr.pop();
    document.write("<h1>"+arr+"</h1>")
}

//push
function addFinal(arr,dad){
    arr.push(dad);
    document.write("<h1>"+arr+"</h1>")
    
}

addFinal(nameArray,"Luna");

addFirst(nameArray,"Luna");

removeFinal(nameArray);

removeFinal(nameArray);

addFirst(nameArray,"Luna");
