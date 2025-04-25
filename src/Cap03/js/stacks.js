console.log('>>> Capitulo 3 - Pilhas');

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
    function peek(){

    }

    //Devolve true se a pilha não contiver nenhum elemento e false se o 
    //tamanho da pilha for maior que 0
    function isEmpty(){

    }

    //Remove todos os elementos da pilha
    function clear(){

    }

    //Devolve o número de elementos contidos na pilha. É semelhante à 
    //propriedade lenght de um array
    function size(){

    }
}

let items = [];