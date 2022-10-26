// 217. Contains Duplicate

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    
    // create a hash table to store unique key (from nums)
    let hashT = [];
    // loop through nums array
    for (let n of nums) {
        
        // if the current one as index is in the hash table
        if (hashT[n]) {
            // return true
            return true;
        } else {                         
            // else
            // insert the current one as index into the hash table
            hashT[n] = 8;
        }
    }
    
    // looping through the while array means there is no duplicate
    return false;
};