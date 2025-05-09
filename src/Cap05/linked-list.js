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

        removeAt(element){

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

        print(){

        }

    }

    return LinkedList;

    
})();

let list = new LinkedList();
list.append(15);
list.append(8);

console.log(list);