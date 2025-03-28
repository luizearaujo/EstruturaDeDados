class Book{
    constructor(title, pages, isbn){
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
    }

    printTitle(){
        console.log(`Título: ${this.title}`);
    }
}

let book = new Book('Go Pro', 1000, '123098');
book.printTitle();
book.title = 'Sistemas Operacionais';
book.printTitle();

class HistoryBook extends Book{
    constructor(title, pages, isbn, country){
        super(title, pages, isbn);
        this.country = country;
    }

    printCountry(){
        console.log(`Country: ${this.country}`);
    }
}

let histBook = new HistoryBook('As veias abertas da américa latina', 500, '098435', 'Argentina');
histBook.printTitle();
histBook.printCountry();

class Author{
    constructor(name){
        this._name = name;
    }
    get name(){
        return this._name;
    }
    set name(value){
        this._name = value;
    }
}

let author = new Author('Eduardo Galeano');
console.log(author.name);
author.name = 'Gabriel Garcia Marquez';
console.log(author.name);
author._name = 'Elio Gaspari';
console.log(author.name);