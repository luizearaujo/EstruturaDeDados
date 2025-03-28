console.log('>>> O que é um array?')
var averageTemp = []
averageTemp[0] = 39;
averageTemp[1] = 36.8;
averageTemp[2] = 32;
averageTemp[3] = 40.1;
console.log(averageTemp);

console.log('>>> Criando e inicializando arrays')
let daysOfWeek = new Array();
daysOfWeek = new Array(7);
daysOfWeek = new Array('Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado');
console.log(daysOfWeek);
console.log(daysOfWeek.length);

console.log('Acessando elementos e iterando em um array');
for (var i = 0; i < daysOfWeek.length; i++){
    console.log(daysOfWeek[i]);
}

let fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;
for (var i = 3; i <= 200; i++){
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
console.log(fibonacci);
console.log(fibonacci[fibonacci.length-1]);

console.log('Acrescentando elementos');
let numbers = [0,1,2,3,4,5,6,7,8,9];
console.log(numbers);
numbers[numbers.length] = 10;
console.log(numbers);

console.log('Usando o método push');
numbers.push(11);
console.log(numbers);
numbers.push(12,13);
console.log(numbers);