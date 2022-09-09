// 203. Remove Linked List Elements

// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]

// Input: head = [], val = 1
// Output: []

// Input: head = [7,7,7,7], val = 7
// Output: []

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    
    // handle the case when the first ele is to-be-removed
    while (head && head.val === val) {        
        head = head.next;
    }

    // loop through each element, when the next value equals to the checking val, do the pointing manipulation
    let cur = head;
    while (cur && cur.next) {
        if (cur.next.val === val)
            cur.next = cur.next.next; // skip the same one and point to its next instead
        else
            cur = cur.next; // check the rest 
    }
                                                
    // return the new head
    return head;
};