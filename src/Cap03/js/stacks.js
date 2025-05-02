console.log('>>> Capitulo 3 - Pilhas');

let items = [];

function Stack(){
    
    //Adiciona um novo item (ou vários itens) ao topo da pilha
    this.push = function(element){
        items.push(element);
    }
    
    //Remove o item do topo da pilha. Também devolfeo elemento removido
    this.pop = function(){
        return items.pop();
    }

    //Devolve o elemento que está no topo da pilha. Esta não é modificada
    //(o elemento não é removido; ele é devolvido apenas como informação)
    this.peek = function(){
        return items[items.length-1];
    }

    //Devolve true se a pilha não contiver nenhum elemento e false se o 
    //tamanho da pilha for maior que 0
    this.isEmpty = function(){
        return items.length == 0;
    }

    //Remove todos os elementos da pilha
    this.clear = function(){
        items = [];
    }

    //Devolve o número de elementos contidos na pilha. É semelhante à 
    //propriedade lenght de um array
    this.size = function(){
        return items.length;
    }

    this.print = function(){
        console.log(items.toString());
    }
}

let stack = new Stack();
console.log('stack.isEmpty: ' + stack.isEmpty());

stack.push(5);
stack.push(8);