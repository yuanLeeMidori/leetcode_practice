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
    insert(idx,value){
        if (idx > this.length) return false;
        else {
            
            let nn = new Node(value);

            if (idx === 0) {
                
                nn.next = this.head;
                this.head.prev = nn;
                this.head = nn;             
                // console.log(this.head.next.next.next.next.val);
            } else {
                let count = 0;
                let curN = this.head;
                while (idx > count) {
                    curN = curN.next;
                    
                    count++;
                }
                nn.next = curN;
                nn.prev = curN.prev;
                curN.prev.next = nn;
                curN.prev = nn;
            }

            this.length++;
            return true;

            
        }
    }
    remove(idx){
        if (idx > this.length) return undefined;
        else {
            let removedN;
            if (idx === 0) {
                removedN = this.head;
                this.head.next.prev = null;
                this.head.next = null;
                this.head = this.head.next;
            } else {
                let count = 0;
                let curN = this.head;
                while (idx > count) {
                    curN = curN.next;
                    count++;
                }
                removedN = curN;
                curN.next.prev = curN.prev;
                curN.prev.next = curN.next;
                curN.next = null;
                curN.prev = null;
            }
            this.length--;
            return removedN;
        }
    }
}

var doublyLinkedList = new DoublyLinkedList;
doublyLinkedList.push(5).push(10).push(15).push(20);
console.log(doublyLinkedList.insert(2,12)); // true
doublyLinkedList.insert(100,12); // false
console.log(doublyLinkedList.length) // 5
// doublyLinkedList.head.val // 5
// doublyLinkedList.head.next.val // 10
console.log(doublyLinkedList.head.next.next.val) // 12
doublyLinkedList.head.next.next.next.val // 15
console.log(doublyLinkedList.head.next.next.next.next.val) // 20
 
var doublyLinkedList = new DoublyLinkedList;
doublyLinkedList.push(5).push(10).push(15).push(20);
console.log(doublyLinkedList.remove(2).val); // 15
doublyLinkedList.remove(100); // undefined
doublyLinkedList.length // 3
doublyLinkedList.head.val // 5
doublyLinkedList.head.next.val // 10
doublyLinkedList.head.next.next.val // 20