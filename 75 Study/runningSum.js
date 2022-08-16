// 1480. Running Sum of 1d Array

var runningSum = function (nums) {
    // new array should be -
    // every element is sum from itself to all previous one(s)
    
    for (let i = 1; i < nums.length; i++) {
         
        
        nums[i] = nums[i] + nums[i - 1];

    }
    
    return nums;
};

let arr = [1, 1, 1, 1];
console.log(runningSum(arr));