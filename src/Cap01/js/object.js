var obj1 = new Object();

var obj2 = {};

obj1 = {
    name:{
        first:'Luiz',
        last:'Dario'
    },
    age: 44
};

obj2 = {
    name: {
        first:'Benjamin',
        last:'Dario'
    },
    age: 6
};

console.log(obj1);
console.log(obj2);

function Book(title, pages, isbn){
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;

    this.printIsbn = function(){
        console.log('ISBN: ' + this.isbn);
    }
}

Book.prototype.printName = function(){
    console.log('Title: ' + this.title);
}

var book = new Book('Harry Potter', 500, '1203498');
console.log(book);
book.title = 'Senhor dos Anéis';
console.log(book);
console.log(book.printIsbn());
book.printName();