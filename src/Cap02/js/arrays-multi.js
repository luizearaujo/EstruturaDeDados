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