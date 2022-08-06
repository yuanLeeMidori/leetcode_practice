// 704. Binary Search
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let mid = Math.floor(nums.length / 2);
    
    while (nums[mid] !== target && start <= end) {
        if (target > nums[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
        mid = Math.floor((start + end) / 2);
    }
    
    if (nums[mid] === target) {
        return mid;
    }
    
    return -1;
};