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
                index = 0;

                if (position === 0){

                    node.next = current;
                    current.prev = node;
                    this.head = node;
    
                }else{
    
                    while (index++ < position){
    
                        current = current.next;
    
                    }
    
                    node.next = current;
                    current.prev = node;
    
                }
    
                this.length++;
                return true;

            }else{

                return false;

            }

            

        }

        removeAt(position){

        }

        remove(element){

        }

        indexOf(element){

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
console.log(list);

var size = list.size();
console.log('size: ' + size); //2

list.insert(0, 12);
console.log(list.toString());