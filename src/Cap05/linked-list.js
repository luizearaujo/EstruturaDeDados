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
            
            if (position >= 0 && position <= this.length){

                let node = new Node(element),
                current = this.head,
                previous,
                index = 0;

                if (position ===0){
                    
                    node.next = current;
                    this.head = node;

                }else{
                    
                    while(index++ < position){
                        
                        previous = current;
                        current = current.next;

                    }

                    node.next = current;
                    previous.next = node;

                }

                this.length++;
                return true;

            }else{
                
                return false;

            } 
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

        }

        size(){
            return this.length;
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
list.append(10);
console.log(list.toString()); //15 -> 10

list.append(13);
list.append(11);
list.append(12);
console.log(list.toString()); //15 -> 10 -> 13 -> 11 -> 12

list.removeAt(0);
console.log(list.toString()); //10 -> 13 -> 11 -> 12 

list.removeAt(3);
console.log(list.toString()); //10 -> 13 -> 11

list.insert(0, 14);
console.log(list.toString()); //14 -> 10 -> 13 -> 11

list.insert(list.size(), 16);
console.log(list.toString()); //14 -> 10 -> 13 -> 11 -> 16

list.insert(2, 18);
console.log(list.toString()); //14 -> 10 -> 18 -> 13 -> 11 -> 16

var index = list.indexOf(14); //0
console.log('indexOf 14: ' + index); //0

index = list.indexOf(18);
console.log('indexOf 18: ' + index); //2

index = list.indexOf(-10);
console.log('indexof -10: ' + index); //-1