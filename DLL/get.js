class Node{
    constructor(val){
        this.val = val
        this.next = null;      
        this.prev = null;      
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    get(idx){
        let resultN;
        if (idx === 0) return this.head;
        let count = 0;
        let curN = this.head;
        while (count < idx) {
            curN = curN.next;
            count++;
        }
        resultN = curN;
        return resultN !== null ? resultN : null;
    }
}


var doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.push(5).push(10).push(15).push(20);
console.log(doublyLinkedList.get(0).val) // 5
console.log(doublyLinkedList.get(1).val) // 10
console.log(doublyLinkedList.get(2).val) // 15
console.log(doublyLinkedList.get(3).val) // 20
console.log(doublyLinkedList.get(4)) // null