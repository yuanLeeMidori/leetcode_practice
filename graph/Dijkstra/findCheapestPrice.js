// 787. Cheapest Flights Within K Stops
// TODO: figure out how to handle the direction, and then the stop


/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
class priorityQueueItem {
    constructor(ele,priority) {
        this.element = ele;
        this.priority = priority;
    }
}
class priorityQueue {
    constructor() {
        this.data = [];
    }
    enqueue(ele, priority) {
        let node = new priorityQueueItem(ele, priority);
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].priority > priority) {
                this.data.splice(i, 0, node); // insert it right before i
                return;
            }
        }
        this.data.push(node); // just push it when the queue is empty
    }
    dequeue() {
        if (this.data.length === 0) return;
        return this.data.pop();
    }
}

var findCheapestPrice = function(n, flights, src, dst, k) {
    
    // store the info of from and to and the price
    // e.g. ajList[0] = {[1,100]} ,meaning from 0 to 1 it costs 100$
    //      ajList[1] = {[2, 100]. [3,600]}, meaning from 1 we can go to 2 with 100$ and to 3 with 600$
    const ajList = {}; 
    
    // put the values into ajList
    for (let i = 0; i < flights.length; i++) {
        
        const [from, to, price] = flights[i];
        
        if (ajList[from] === undefined) ajList[from] = [];
        //if (ajList[to] === undefined) ajList[to] = [];
        
        ajList[from].push([to, price]);
        //ajList[to].push([from,price]);
    }
    
    const subTotal = Array(n).fill(0);
    
    subTotal[src] = 0;
    
    const PQ = new priorityQueue();
    // should it be 1? maybe no... 0 will be the top priority
    PQ.enqueue(src, 0);
    
    for (let i = 0; i < n; i++) {
        if (i !== src) {
            PQ.enqueue(i, Infinity);    
        }
        
    }
    
    console.log(PQ);
    console.log(ajList);
    while (PQ.length !== 0) {
        // visit the next element
        const node  = PQ.dequeue();
        console.log(node);
        console.log(ajList[node.element]);
        if (node.element === dst && node.priority !== Infinity) { // hit the end
            return node.priority;
        }
        
        // visit the neighbors
        ajList[node.element]?.forEach(([neighbor,price]) => { // ****if ajList[ele] is not found? i.e. it's the to not from so not in ajList ****
            console.log(neighbor + ' ' + price);
            const newPrice = node.priority + price;
            console.log(newPrice);
            // if the price is cheaper, update
            if (subTotal[neighbor] > newPrice) {
                                
                subTotal[neighbor] = newPrice;
                
                // Add the new value back to the PQ
                PQ.enqueue(neighbor, newPrice);
                console.log(PQ);
            }
        });
    }
    
    return subTotal[dst];
};