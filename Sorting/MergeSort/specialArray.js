// 1608. Special Array With X Elements Greater Than or Equal X

/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    
    // sort the array    
    function mergeSortedArr(a1, a2) {
        let a1p = 0;
        let a2p = 0;
        let result = [];
        
        while (a1p < a1.length && a2p < a2.length) {
            if (a1[a1p] >= a2[a2p]) {
                result.push(a2[a2p]);
                a2p++;
            } else {
                result.push(a1[a1p]);
                a1p++;
            }
        }
        
        while (a1p < a1.length) {
            result.push(a1[a1p]);
            a1p++;
        }
        
        while (a2p < a2.length) {
            result.push(a2[a2p]);
            a2p++;
        }
        
        return result;
    }
    
    function mergeSortArr(arr) {
        if (arr.length === 1 || arr.length === 0) {
            return arr;
        }
        
        let mid = Math.floor(arr.length / 2);
        let left = mergeSortArr(arr.slice(0,mid));
        let right = mergeSortArr(arr.slice(mid));
        
        return mergeSortedArr(left, right);
    } // end of merge sort
    
    nums = mergeSortArr(nums);
    
    let i;
    // loop from 1 to array.length
    // if x = 1 and only one element is >= 1, return 1
    for (i = 1; i <= nums.length; i++) {
        let count = 0;
        
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] >= i && count <= i) {
               
                count++;
                
            }
        }
        if (count === i) {
            return i;
        }
    }
    
    return -1;
    
    
    // what about binary search?
    // binary search only works on sorted array
    // what are we searching?? what's the target?
    
};
