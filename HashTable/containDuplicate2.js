// 219. Contains Duplicate II

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function(nums, k) {
    
    let hashT = [];
    
    // nums[i] = v
    // nums[2] = 4
    // v should be unique (hashT key)
    
    // nums[3] = 4
    
    if (nums.length <= 1) return false;
    
    for (let i = 0; i < nums.length; i++) {
        // console.log('b: ' + hashT[nums[i]]);
        if (hashT[nums[i]] != undefined &&
            (Math.abs(hashT[nums[i]] - i) <= k) ) {
            // console.log(hashT[nums[i]]);
            // console.log('n: ' + i);
            return true;            
        
        } else {
            // console.log('else: ' + nums[i]);
            // console.log('en: ' + i);
            // hashT[4] = 2
            hashT[nums[i]] = i;
            
        }
    }
    
    return false;
};