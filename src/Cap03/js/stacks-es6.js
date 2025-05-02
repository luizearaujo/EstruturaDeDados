class Stack{
    constructor () {this.items = [];} //1
    
    //Adiciona um novo item (ou vários itens) ao topo da pilha
    push(element){
        this.items.push(element);
    }

    //Remove o item do topo da pilha. Também devolfeo elemento removido
    pop(){
        return this.items.pop();
    }

    //Devolve o elemento que está no topo da pilha. Esta não é modificada
    //(o elemento não é removido; ele é devolvido apenas como informação)
    peek(){
        return this.items[this.items.length - 1];
    }

    //Devolve true se a pilha não contiver nenhum elemento e false se o 
    //tamanho da pilha for maior que 0
    isEmpty(){
        return this.items.length == 0;
    }

    //Remove todos os elementos da pilha
    clear(){
        this.items = [];
    }

    //Devolve o número de elementos contidos na pilha. É semelhante à 
    //propriedade lenght de um array
    size(){
        return this.items.length;
    }

    print(){
        console.log(this.items.toString());
    }
}