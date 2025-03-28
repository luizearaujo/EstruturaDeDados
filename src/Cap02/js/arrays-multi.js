console.log('>>> Arrays Multidimensionais');
var averageTemp = [];
averageTemp[0] = [1, 2, 3, 4, 5];
averageTemp[1] = [6, 7, 8, 9, 0];
console.log(averageTemp);

for (i = 0; i < averageTemp.length; i++){
    for (j = 0; j < averageTemp[i].length; j++){
        console.log(`Valor da posição ${i}x${j} é: ${averageTemp[i][j]}`);
    }
}