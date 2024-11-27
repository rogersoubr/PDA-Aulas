// Parte 1-1: Classe Book
class Book {
    constructor(title, author, isbn, year){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.year = year;
    }

    //
    getDetails(){
        return `Titulo: ${this.title}, Autor: ${This.author}, ISBN: ${this.isbn}, Ano: ${this.year}`;
    }
}

class library{
    constructor(){
        this.books= [];
    }
    
    addBook(book){
        try{
            if(this.books.some(b => b.isbn === book.isbn)){
                
            }
        }
    }
}