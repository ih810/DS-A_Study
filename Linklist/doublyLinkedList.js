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
        return console.log('current length: ',this.size)
    }
    add(ele){
        let trav = this.head
        let newNode = new Node(ele)
        
    }

}

const list = new DoublyLinkedList();
console.log(list)