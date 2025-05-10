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

        }

        removeAt(position){

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

        }

    }

    return DoublyLinkedList;

})();

var list = new DoublyLinkedList();
list.append(10);
list.append(11);
console.log(list);