// 859. Buddy Strings

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
 var buddyStrings = function(s, goal) {
    
    // 1. different length, always false
    if (s.length != goal.length) return false;
    
    // 2. exactly same (example 2)
    if (s === goal) {
        //  if 2 same chars can be found (aka we can swap them and the string remain unchanged) then true. else false
        
        // Set() -> unique, no duplicates
        let ht = new Set();
        
        for (let i = 0; i < s.length; i++) {
            // push all char into hashtable (result chars will be distinct)
            ht.add(s.charAt(i));    
        }
        
        // meaning: there are at least one set of same chars in the string
        if (ht.size < s.length) return true;
        else return false;

    } else {
        // 3. strings are different, but could be the same after one swap
        
        let diffArr = [];
        // loop through whole string and push the different ones from s and goal into arr
        for (let i = 0; i < s.length; i++) {
            if (s.charAt(i) !== goal.charAt(i)) {
                diffArr.push(i);
            }
            
        }
        
        
        // if the arr length is 2, and the string of index from diffArr are the same (aka they swap and are the same)  => true
        if (diffArr.length == 2 && 
            s.charAt(diffArr[0]) === goal.charAt(diffArr[1]) 
            && s.charAt(diffArr[1]) === goal.charAt(diffArr[0])) 
            
            return true;
        else 
            return false;
    }
            
        
    
};