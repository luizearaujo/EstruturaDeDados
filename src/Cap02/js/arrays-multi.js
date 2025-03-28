console.log('>>> Arrays Multidimensionais');
var averageTemp = [];
averageTemp[0] = [1, 2, 3, 4, 5];
averageTemp[1] = [6, 7, 8, 9, 0];
console.log(averageTemp);

function printMatrix(myMatrix){
    for (i = 0; i < myMatrix.length; i++){
        for (j = 0; j < myMatrix[i].length; j++){
            console.log(`Valor da posição ${i}x${j} é: ${myMatrix[i][j]}`);
        }
    }
}

printMatrix(averageTemp);

function printMatrix3(myMatrix){
    for (i = 0; i < myMatrix.length; i++){
        for (j = 0; j < myMatrix[i].length; j++){
            for (k = 0; k < myMatrix[i][j].length; k++){
                console.log(`Valor da posição ${i}x${j}x${k} é: ${myMatrix[i][j][k]}`);
            }
        }
    }
}

var matrix3x3x3 = []
for (i = 0; i <= 3; i++){
    matrix3x3x3[i] = [];
    for (j = 0; j <= 3; j++){
        matrix3x3x3[i][j] = [];
        for (k = 0; k <= 3; k++){
            matrix3x3x3[i][j][k] = i * j * k;
        }
    }
}

printMatrix3(matrix3x3x3);

console.log('>>> Concatenação')
var positiveNumbers = [1,2,3,4,5];
var negativeNumbers = [-5,-4,-3,-2,-1];
var zeroNumber = [0];
var numbers = negativeNumbers.concat(zeroNumber, positiveNumbers);
console.log(numbers);

console.log('>>> Iteração');
var isEven = function(x){
    return (x % 2 == 0) ? true : false;
}
//every: a iteração para na primeira vez que retornar false.
console.log(`numbers every is even: ${numbers.every(isEven)}`);
//some: a iteração continua até retornar true.
console.log(`numbers every is some: ${numbers.some(isEven)}`);
//forEach: itera por todo array
numbers.forEach((x) => {
    console.log(`${x} é par? ${isEven(x)}`);
});

console.log('>>> Usando map e filter');
var evenMap = numbers.map(isEven);
console.log(evenMap);
var filterMap = numbers.filter(isEven);
console.log(filterMap);

console.log('>>> reduce');
var reduceResult = numbers.reduce((previous, current, index) => {
    return previous + current;
});
console.log(reduceResult);

console.log('>>> Array no ES6');
var aEntries = numbers.entries();
console.log(aEntries.next().value);

var aKeys = numbers.keys();
console.log(aKeys.next());

var aValues = numbers.values();
console.log(aValues.next());

var numbers2 = Array.from(numbers);
console.log(numbers2);

var numbers2Even = Array.from(numbers, (x) => (x % 2 == 0));
console.log(numbers2Even);

var numbers4 = Array.of(4);
console.log(numbers4);

var numbers5 = Array.of(1,2,3,4,5);
console.log(numbers5);

var numbersCopy = Array.of(...numbers);
console.log(numbersCopy);

numbersCopy.fill(0);
console.log(numbersCopy);

numbersCopy.fill(1, 5);
console.log(numbersCopy);

numbersCopy.fill(3, 5, 6);
console.log(numbersCopy);

var numbers = [1,2,3,4,5,6];
var copyArray = numbers.copyWithin(0,3);
console.log(copyArray);

var numbers = [1,2,3,4,5,6];
var copyArray = numbers.copyWithin(1,3,5);
console.log(copyArray);

var positiveNumbers = [1,2,3,4,5];
var negativeNumbers = [-5,-4,-3,-2,-1];
var zeroNumber = [0];
var numbers = negativeNumbers.concat(zeroNumber, positiveNumbers);

var numbersReverse = numbers.reverse()
console.log(numbersReverse);

var numbersSort = numbersReverse.sort();
console.log(numbersSort);

var numbersMySort = numbers.sort((a,b) => a-b );
console.log(numbersMySort);

var friends = [
    {name: 'Luiz', age:44},
    {name:'Daylene', age:37},
    {name: 'Benjamin', age:6},
    {name: 'Teresa', age: 0}
];

function comparePerson(a, b){
    if (a.age < b.age){
        return -1;
    }
    if (a.age > b.age){
        return 1;
    }
    return 0;
}

console.log(friends.sort(comparePerson));

console.log('>>> Pesquisa');
var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
console.log(numbers.indexOf(10));
console.log(numbers.indexOf(100));

numbers.push(10);
console.log(numbers.lastIndexOf(10));
console.log(numbers.lastIndexOf(100));