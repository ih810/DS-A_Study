class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class SingleLinkedList {
    constructor() {
        this.head = null
        this.size = 0;
    }
    length() {
        return console.log('Current length: ', this.size)
    }
    clear() {
        this.head = null
    }
    getLast() {
        let trav = this.head
        if (trav) {
            while (trav.next) {
                trav = trav.next
            }
        }
        return trav
    }
    list() {
        return this.head
    }
    add(ele) {
        console.log('adding', ele)
        let newNode = new Node(ele)
        let trav = this.head

        //handle first insert
        if (this.head === null) {
            this.head = newNode
            this.size++;
            return this.head
        }

        while (trav.next) {
            trav = trav.next
        }
        trav.next = newNode;
        this.size++;
    }
    addAt(index, ele){
        console.log('adding at ', index)
        let newNode = new Node(ele), trav = this.head, prev= trav, count = 0;
        if(index < 0 || index >= this.size){
            console.log('no such index')
        }
        if(index === 0){
            newNode.next = this.head
            this.head = newNode
            return this.head
        }
        while(count < index){
            count++;
            prev = trav;
            trav = trav.next;
        }
        prev.next = newNode;
        newNode.next = trav;
        return trav
    }
    remove(ele) {
        console.log('removing', ele)
        let trav = this.head
        let prev;
        while (trav !== null) {
            prev = trav;
            trav = trav.next
            if (trav.data === ele) {
                if (prev.data == null) {
                    //index 0
                    this.head = trav.next
                } else {
                    //obj is a reference of data
                    //when you do trav = this.head it gives you access to modify this.head?
                    prev.next = trav.next
                }
                this.size--
                return trav.data
            }
            prev = trav
            trav = trav.next
        }
        return console.log('element not found')
    }
    removeAt(index) {
        if (index < 0 || index >= this.size) {
            return console.log('no such index')
        } else {
            let trav = this.head, prev = trav, count = 0;
            if (index === 0) {
                this.head = trav.next;
            } else {
                while (count < index) {
                    count++;
                    prev = trav;
                    trav = trav.next;
                }

                prev.next = trav.next;
            }
            this.size--;
        }
    }
    indexOf(ele) {
        let count = 0, trav = this.head;

        while (trav != null) {
            if (trav.data === ele) {
                return console.log('index:', count);
            } else {
                count++
                trav = trav.next;
            }
        }
        return console.log('elemnent not found')
    }
}

let list = new SingleLinkedList()
list.add(2)
list.add(6)
list.length()
list.remove(5)
list.length()
list.add(8)
list.length()
console.log('list', list.list())
list.removeAt(2)
list.indexOf(6)
console.log('list', list.list())
list.length()
list.addAt(1, 3)
console.log('list', list.list())
