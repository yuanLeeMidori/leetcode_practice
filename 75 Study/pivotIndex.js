// 724. Find Pivot Index

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {

    let total = 0;    
    for (let i = 0; i < nums.length; i++) {
        total+=nums[i];
    }
    
    let left = 0;
    for (let i = 0; i < nums.length; i++) {
        // total = right + current index value + left
        let right = total - left - nums[i];
        
        if (right === left) {
            return i;
        }
        
        left += nums[i];
    }
    
    return -1;
        
    
};