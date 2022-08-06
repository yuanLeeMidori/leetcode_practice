// 278. First Bad Version

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        
        // version number is always ascending order, so sorted.
        
        let start = 1;
        let end = n;
        
        
        while (start <= end) {
            
            let mid = Math.floor((start + end) / 2);
            
            if (isBadVersion(mid) === true) {
                // mid == true meaning it's probably the first bad one or after the first bad one
                
                // if the one before is false, that means the current true is the first true (aka first bad)
                if (isBadVersion(mid - 1) === false) return mid;

                // we should keep search the ones before it and see if there is any bad ones                
                end = mid - 1;
                
            } else {
                
                // check the next one first. If it's true, it's the first true (aka first bad)
                if (isBadVersion(mid+1) === true) return mid+1;
                // false meaning it's not in the before, it's in the after, go right
                start = mid + 1;
                
            }
            
        }
    };
};