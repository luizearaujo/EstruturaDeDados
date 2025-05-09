let LinkedList = (function(){
    
    class Node{
        constructor(element){
            this.element = element;
            this.next = null;
        }
    }
    
    class LinkedList{

        constructor(){
            this.length = 0;
            this.head = null;
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

                current.next = node;
            }

            this.length++;
        }

        insert(position, element){

        }

        removeAt(position){
            if (position > -1 && position < this.length){

                let current = this.head,
                previous,
                index = 0;

                if (position === 0){
                    this.head = current.next;
                }else{

                    while (index++ < position){
                        previous = current;
                        current = current.next;
                    }

                    previous.next = current.next;
                }

                this.length--;

                return current.element;

            }else{
                return null;
            }
        }

        remove(element){

        }

        indexOf(element){

        }

        isEmpty(){

        }

        size(){

        }

        toString(){
            let current = this.head;
            let string = '';
            while(current){
                string += current.element + (current.next ? ' -> ' : '');
                current = current.next;
            }

            return string;
        }

        print(){

        }

    }

    return LinkedList;

    
})();

let list = new LinkedList();
list.append(15);
list.append(8);
console.log(list.toString());

list.append(11);
console.log(list.toString());

list.removeAt(1);
console.log(list.toString());

list.removeAt(0);
console.log(list.toString());