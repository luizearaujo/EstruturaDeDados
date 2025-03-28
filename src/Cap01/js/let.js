let myVariable = 'global';
myOtherVariable = 'global';

function myFuncion(){
    let myVariable = 'local';
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