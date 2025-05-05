let Queue = (function(){

    const items = new WeakMap();

    class Queue {

        constructor(){
            items.set(this, []);
        }

        enqueue(element){
            let s = items.get(this);
            s.push(element);
        }

        dequeue(){
            let s = items.get(this);
            return s.shift();
        }

        front(){
            let s = items.get(this);
            return s[0];
        }

        isEmpty(){
            let s = items.get(this);
            return s.length == 0;
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

    return Queue;

})();

let queue = new Queue();
console.log('queue.isEmpty: ' + queue.isEmpty());

queue.enqueue('John');
queue.enqueue('Jack');
queue.print();

console.log('queue.size: ' + queue.size());
queue.enqueue('Camila');
queue.print();
console.log('queue.size: ' + queue.size());
console.log('queue.front: ' + queue.front());
queue.dequeue();
console.log('queue.size: ' + queue.size());
console.log('queue.front: ' + queue.front());
queue.dequeue();
console.log('queue.size: ' + queue.size());
console.log('queue.front: ' + queue.front());
