// 242. Valid Anagram

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {

    if (s.length !== t.length) return false;
    
    // create a hash table to count the number of each letter
    // e.g., "anagram" would be {a: 3, n: 1, g: 1, r: 1, m: 1}
    let HTs = {};
    
    // create the key (distinct letter)
    for (let i = 0; i < s.length; i++) {
        
        HTs[s[i]] = 0;
    }
    
    // input the value (the number of each letter)
    for (let i = 0; i < s.length; i++) {
        
        HTs[s[i]] += 1;
    }
    
    // loop through letter by letter in the t string
    for (let i = 0; i < t.length; i++) {
        
        // if the letter is in the s hash table
        if (t[i] in HTs) {
            
            // find the value of the letter key, when it's not 0, meaning the value of this letter key might be equal in both strings
            if (HTs[t[i]] !== 0) {
                // deduct the value of the letter key by 1, meaning we've checked this one, let's go on
                HTs[t[i]] -= 1;
            } else return false; // if the value of the letter key is 0, meaning there is any more same letter from t, which shouldn't happen
            
        } else return false;
    }
    return true;
    
    
};