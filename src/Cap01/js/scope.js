var myVariable = 'global';
myOtherVariable = 'global';

function myFuncion(){
    var myVariable = 'local';
    return myVariable;
}

function myOtherFunction(){
    myOtherVariable = 'local';
    return myOtherVariable;
}

console.log(myVariable);
console.log(myFuncion());
console.log(myVariable);

console.log(myOtherVariable);
console.log(myOtherFunction());