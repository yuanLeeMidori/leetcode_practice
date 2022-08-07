// 744. Find Smallest Letter Greater Than Target

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {  
        
    let start = 0;
    let end = letters.length;
    
    while (start < end) {
            let mid = Math.floor((start + end) / 2);
        
            if (letters[mid] > target)  end = mid;
            else    start = mid + 1;    
        }
    
        
    return letters[start % (letters.length)];
    // 2 3 ->  2
    // 0 3 ->  0
    // if we only return "start", when start is moved to the last index, which means all letters in the index are already run through
    // instead, we should return to first index (it's a loop, z back to a)
    /** KEY WORD in this question: NEXT */
    // 26 26 -> 1
        
    };