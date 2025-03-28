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

console.log('>>> Inserindo um elemento na primeira posição');
for (var i = numbers.length; i >= 0; i--){
    numbers[i] = numbers[i - 1];
}
numbers[0] = -1;
console.log(numbers);

console.log('>>> Usando o método unshift - Inserindo um elemento na primeira posição');
numbers.unshift(-2);
console.log(numbers);
numbers.unshift(-4, -3);
console.log(numbers);

console.log('>>> Removendo elementos de um array');
numbers.pop();
console.log(numbers);

console.log('>>> Removendo elemento da primeira posição de um array');
for (var i = 0; i < numbers.length; i++){
    numbers[i] = numbers[i + 1];
}
console.log(numbers);

console.log('>>> Usando o método shift - Removendo elemento da primeira posição de um array');
numbers.shift();
console.log(numbers);

console.log('>>> Acrescentando e removendo elementos de uma posição específica');
numbers.splice(5,2);
console.log(numbers);
numbers.splice(5,0, 20, 21, 22);
console.log(numbers);