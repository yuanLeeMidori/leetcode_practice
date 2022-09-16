// accept: an index and a value
// do: update the value of the node at that index
// return: true if the node is updated; false otherwise

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
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    set(idx, val) {
        
        let nn = new Node(val);
        // check if list is empty
        if (this.head === null || this.tail === null) {
            // then just call push()
            this.push(val);
            return true;
        }

        // check if idx > length (or negative?)
        else if (idx > this.length || idx < 0) {
            // then return false
            return false;
        }
            
        // when idx is 0, make it new head
        else if (idx === 0) {
            nn.next = this.head.next;
            this.head.next.prev = nn;
            this.head = nn;
            return true;
        }

        // otherwise, find the idx,
        else {
            let cur = this.head;
            let count = 0;
            while (count < idx) {
                cur = cur.next;
                count++;
            }
            let pre = cur.prev;
            // make its pre points to new node
            pre.next = nn;
            // make new node points to idx
            nn.prev = pre;
            nn.next = cur.next;
            cur.next.prev = nn;
            return true;
        }

        
    }
}


var doublyLinkedList = new DoublyLinkedList();
 
doublyLinkedList.push(5).push(10).push(15).push(20);
console.log(doublyLinkedList.set(0,10)) // true
console.log(doublyLinkedList.length) // 4
console.log(doublyLinkedList.head.val) // 10
// console.log(doublyLinkedList.head.next.next.val)
 
console.log(doublyLinkedList.set(10, 10)) // false

console.log(doublyLinkedList.set(2,100)) // true
console.log(doublyLinkedList.head.next.next.val); // 100