class Node {
    constructor(val){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}


class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
            this.length++;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
            this.length++;
         }
        return this;
    }
    reverse(){

        // swap head and tail
        let tempN = new Node();
        tempN = this.head;
        this.head = this.tail;
        this.tail = tempN;


        // swap next and prev for each node
        let nextN = null;
        for (let i = 0; i < this.length; i++) {
            nextN = tempN.next
            tempN.next = tempN.prev;
            tempN.prev = nextN;
            tempN = nextN;
        }
        return this;
    }
}