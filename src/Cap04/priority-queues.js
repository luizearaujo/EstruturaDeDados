let PriorityQueue = (function(){
    
    const items = new WeakMap();

    class QueueElement{
        constructor(element, priority){
            this.element = element;
            this.priority = priority;
        }
    }
    
    class PriorityQueue{

        constructor(){
            items.set(this, []);
        }

        enqueue(element, priority){
            let queueElement = new QueueElement(element, priority);

            let added = false;
            let s = items.get(this);

            for (let i=0; i<s.length; i++){
                if (queueElement.priority < s[i].priority){
                    s.splice(i, 0, queueElement);
                    added = true;
                    break;
                }
            }

            if (!added){
                s.push(queueElement);
            }
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
            for(let i = 0; i < s.length; i++){
                console.log(`${s[i].element} - ${s[i].priority}`);
            }
            
        }

    }

    return PriorityQueue;
})();

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue('John', 2);
priorityQueue.enqueue('Jack', 1);
priorityQueue.enqueue('Camila',1);
priorityQueue.print();
console.log(priorityQueue.size());