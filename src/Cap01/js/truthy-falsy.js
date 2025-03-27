function testTruthy(val){
    return val ? console.log(val + ': truthy') : console.log(val + ': falsy');
}

testTruthy(true); // true is truthy
testTruthy(false); // false is falsy
testTruthy(new Boolean(false)); // Boolean object is truthy
testTruthy(''); // empty string is falsy
testTruthy('Packt'); // string with content is truthy
testTruthy(new String('')); // String object with empty value is truthy
testTruthy(1); // number other than 0 is truthy
testTruthy(-1);
testTruthy(NaN); // NaN is falsy
testTruthy(new Number(NaN)); // Number object with value of 0 is truthy
testTruthy({}); // empty object is truthy

var obj = {name: 'John'};
testTruthy(obj); // object is truthy
testTruthy(obj.name);
testTruthy(obj.age); // undefined is falsy