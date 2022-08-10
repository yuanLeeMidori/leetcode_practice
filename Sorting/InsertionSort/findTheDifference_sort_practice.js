// 389. Find the Difference

// Challenge: without using JS sort() built-in function

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

// sort function    
function sortStr(str) {
        
    str = str.split(''); // split string into char array so swapping is available        
    let cur;
            
    
    // insertion sort
    // start from the second, loop through previous one(s)
    for (let i = 1; i < str.length; i++) {
        cur = str[i];                    
        for (var j = i - 1; str[j] > cur && j >= 0 ; j--) {
            // when cur value is less than the previous one(s), go inside this loop
            // keep deducting 1 to access the more previous value till it's 0 
            // console.log(j);
            // move the previous one to next ind                
            str[j+1] = str[j];                
        }
        // console.log(j); // var j = i - 1 still run through before the j>=0. 
        // final place the temp when the bigger ones are moved            
        str[j+1] = cur;
    }
    
    str = str.join('').toString() // make the char array back to string
    return str;
}



var findTheDifference = function(s, t) {
  
    
    // sort s and t
    s = sortStr(s);
    t = sortStr(t);
    // loop through the length of s and compare same index in s and t
    for (let i = 0; i < s.length; i++) {
        // if diff is found, return the value    
        if (s[i] !== t[i]) return t[i];
    }
        
    // outside the loop, return the last value of t 
    return t[t.length - 1];
};


