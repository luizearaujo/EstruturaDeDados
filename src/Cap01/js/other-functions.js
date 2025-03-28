console.log('>>> let');
let movie = 'Indiana Jones';

function showMovie(movie){
    console.log('movie: ' + movie);
}

function starWars(){
    let movie = 'Star Wars';
    showMovie(movie);
}

function marvel(){
    movie = 'Avengers';
    showMovie(movie);
}

function games(){
    let isFan = true;
    let phrase = 'Red Dead Redemption';

    console.log('before if: ' + phrase);

    if (isFan){
        let phrase = 'initial text';
        phrase = 'my horse!';
        console.log('inside if: ' + phrase);
    }

    phrase = 'go to the city!';
    console.log('after if: ' + phrase);
}

showMovie(movie);
starWars();
marvel();
showMovie(movie);
games();

console.log('>>> Constant');

const PI = 3.141593;
console.log('PI: ' + PI);

console.log('>>> Arrow Functions');
var circleArea = function circleArea(r){
    var area = PI * r * r;
    return area;
}

let circleArea2 = (r) => {
    let area = PI * r * r;
    return area;
}

let circleArea3 = (r) => PI * r * r;

console.log(circleArea(10));
console.log(circleArea2(20));
console.log(circleArea3(30));

console.log('>>> Templates literais');
let raio = 40;
let area = circleArea3(40);
console.log(`A área do circulo com raio ${raio} é igual a ${area}.`);

console.log('>>> Valores Padrões');
function sum(a , b){
    if (a === undefined){
        a = 0;
    }
    if (b === undefined){
        b = 0;
    }

    return a + b;
}

function sumDefault( a = 0, b = 0){
    return a + b;
}

console.log(`Sem valor padrão:: ${sum(1)}`);
console.log(`Com valor padrão:: ${sumDefault()}`);
