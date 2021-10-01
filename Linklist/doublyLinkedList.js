class Node {
    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.size = 0;
        this.head = null;
        this.tail = null;
    }
    length(){
        return console.log(this.size)
    }
}

const list = new DoublyLinkedList();
console.log(list)