let Stack = (function () {

    const items = new WeakMap();

    class Stack {

        constructor() {
            items.set(this, []);
        }

        push(element) {
            let s = items.get(this);
            s.push(element);
        }

        pop() {
            let s = items.get(this);
            let r = s.pop();
            return r;
        }

        peek() {
            let s = items.get(this);
            return s[s.length - 1];
        }

        isEmpty() {
            let s = items.get(this);
            return s.length == 0;
        }

        clear() {
            let s = items.get(this);
            s = [];
        }

        size() {
            let s = items.get(this);
            return s.length;
        }

        print() {
            let s = items.get(this);
            console.log(s.toString());
        }
    }

    return Stack;

})();

function baseConverter(decNumber, base = 2){

    var remStack = new Stack(),
    rem,
    binaryString = '',
    digits = '0123456789ABCDEF';

    while (decNumber > 0) {
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
    }

    while (!remStack.isEmpty()){
        binaryString += digits[remStack.pop()];
    }

    return binaryString;
}

console.log('Base 2');
var decNumber = 233;
console.log('baseConverter(' + decNumber + '): ' + baseConverter(decNumber));
decNumber = 10;
console.log('baseConverter(' + decNumber + '): ' + baseConverter(decNumber));
decNumber = 1000;
console.log('baseConverter(' + decNumber + '): ' + baseConverter(decNumber));

console.log('Base 8');
var base = 8;
var decNumber = 233;
console.log('baseConverter(' + decNumber + ',' + base + '): ' + baseConverter(decNumber, base));
decNumber = 10;
console.log('baseConverter(' + decNumber + ',' + base + '): ' + baseConverter(decNumber, base));
decNumber = 1000;
console.log('baseConverter(' + decNumber + ',' + base + '): ' + baseConverter(decNumber, base));


console.log('Base 16');
var base = 16;
var decNumber = 233;
console.log('baseConverter(' + decNumber + ',' + base + '): ' + baseConverter(decNumber, base));
decNumber = 10;
console.log('baseConverter(' + decNumber + ',' + base + '): ' + baseConverter(decNumber, base));
decNumber = 1000;
console.log('baseConverter(' + decNumber + ',' + base + '): ' + baseConverter(decNumber, base));