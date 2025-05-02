const items = new WeakMap();

class Stack{
    constructor(){
        items.set(this, []);
    }

    push(element){
        let s = items.get(this);
        s.push(element);
    }

    pop(){
        let s = items.get(this);
        let r = s.pop();
        return r;
    }

    peek(){
        let s = items.get(this);
        return s[s.length - 1];
    }

    isEmpty(){
        let s = items.get(this);
        return s.length == 0;
    }

    clear(){
        let s = items.get(this);
        s = [];
    }

    size(){
        let s = items.get(this);
        return s.length;
    }

    print(){
        let s = items.get(this);
        console.log(s.toString());
    }
}

let stack = new Stack();
console.log('stack.isEmpty: ' + stack.isEmpty());
stack.push(5);
stack.push(8);
stack.print();

console.log('stack.peek: ' + stack.peek());
stack.push(11);
stack.print();

stack.pop();
stack.pop();
stack.print();