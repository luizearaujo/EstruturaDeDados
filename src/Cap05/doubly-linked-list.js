let DoublyLinkedList = (function(){

    class Node{
        constructor(element){
            this.element = element;
            this.next = null;
            this.prev = null;
        }
    }

    class DoublyLinkedList{

        constructor(){
            this.length = 0;
            this.head = null;
            this.tail = null;
        }

        append(element){

            let node = new Node(element),
            current;

            if (this.head == null){
                this.head = node;
            }else{

                current = this.head;

                while(current.next){
                    current = current.next;
                }

                node.prev = current;
                current.next = node;
            }

            this.tail = node;
            this.length++;


        }

        insert(position, element){

            if (position >= 0 && position <= this.length){

                let node = new Node(element),
                current = this.head,
                previous,
                index = 0;

                if (position === 0){

                    if (!this.head){
                        this.head = node;
                        this.tail = node;
                    }
                    else{
                        node.next = current;
                        current.prev = node;
                        this.head = node;
                    }
    
                } else if (position === this.length) {
                    
                    current = this.tail;
                    current.next = node;
                    node.prev = current;
                    this.tail = node;
                
                } else {
    
                    while (index++ < position){
    
                        previous = current;
                        current = current.next;
    
                    }
    
                    node.next = current;
                    previous.next = node;

                    current.prev = node;
                    node.prev = previous;

                }

    
                this.length++;
                return true;

            } else {

                return false;

            }

        }

        removeAt(position){
            if (position > -1 && position < this.length){

                let current = this.head,
                previous,
                next,
                index = 0;

                if (position === 0){
                    this.head = current.next;
                    this.head.prev = null;
                    current.previous = this.head;
                }else{

                    while(index++ < position){
                        previous = current;
                        current = current.next;
                    }

                    next = current.next;
                    previous.next = next;

                    if (next != null){
                        next.prev = previous;
                    }

                    if (position === this.length-1){
                        this.tail = previous;
                    }
                    
                }

                this.length--;

                return current.element;
            }

            return null;
        }

        remove(element){

            let index = this.indexOf(element);
            if (index === -1){
                return null;
            }

            return this.removeAt(index);

        }

        indexOf(element){

            let current = this.head,
            index = 0;
            while(current){
                if (element === current.element){
                    return index;
                }

                index++;
                current = current.next;
            }

            return -1;
        }

        isEmpty(){
            return this.length == 0;
        }

        size(){
            return this.length;
        }

        toString(){

            let current = this.head;
            let string = '';
            while(current){
                if (current.prev == null){
                    string += `[ |${current.element}|${current.next.element}]` + (current.next ? '<->' : '');    
                }
                else if(current.next == null){
                    string += `[${current.prev.element}|${current.element}| ]` + (current.next ? '<->' : '');    
                }
                else {
                    string += `[${current.prev.element}|${current.element}|${current.next.element}]` + (current.next ? '<->' : '');
                }
                current = current.next;
            }
            return string;
        }

    }

    return DoublyLinkedList;

})();

var list = new DoublyLinkedList();
var isEmpty = list.isEmpty();
console.log('isEmpty: ' + isEmpty); //true

list.append(10);
list.append(11);
console.log(list.toString()); //[ |10|11] <-> [10|11| ]
console.log('head: ' + list.head.element); //10
console.log('tail: ' + list.tail.element); //11

var size = list.size();
console.log('size: ' + size); //2

list.insert(0, 12);
console.log(list.toString()); //[ |12|10] <-> [12|10|11] <-> [10|11| ]
console.log('head: ' + list.head.element); //12
console.log('tail: ' + list.tail.element); //11


list.insert(2, 9);
console.log(list.toString()); //[ |12|10] <-> [12|10|9] <-> [10|9|11] <-> [9|11| ]
console.log('head: ' + list.head.element); //10
console.log('tail: ' + list.tail.element); //11

list.insert(4, 4);
console.log(list.toString()); //[ |12|10] <-> [12|10|9] <-> [10|9|11] <-> [9|11|4] <-> [11|4| ]
console.log('head: ' + list.head.element); //10
console.log('tail: ' + list.tail.element); //4

console.log('index [10]: ' + list.indexOf(10)); //1

list.removeAt(1);
console.log(list.toString()); //[ |12|9] <-> [12|9|11] <-> [9|11|4] <-> [11|4| ]
console.log('head: ' + list.head.element); //10
console.log('tail: ' + list.tail.element); //4

list.remove(12);
console.log(list.toString()); //[ |9|11] <-> [9|11|4] <-> [11|4| ]
console.log('head: ' + list.head.element); //12
console.log('tail: ' + list.tail.element); //4

list.remove(4);
console.log(list.toString()); //[ |9|11] <-> [9|11| ]
console.log('head: ' + list.head.element); //12
console.log('tail: ' + list.tail.element); //4
