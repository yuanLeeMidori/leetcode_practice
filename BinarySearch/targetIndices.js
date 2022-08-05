/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


var targetIndices = function(nums, target) {
    
    // sort nums array first    
    nums.sort(function(a,b) {
        return a - b;
    });
    
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) result.push(i);
    }
    
    return result;
        

};


// 1. write plain sortArray() without sort()
// 2. how to reduce memory use