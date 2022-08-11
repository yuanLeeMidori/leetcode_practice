// 389. Find the Difference
// Challenge: don't use built-in sort() function. Instead, write a sort string function with bubble sort.



function bubbleSortStr(str) {
    
    // convert the string to char array
    str = str.split('');

    for (let i = 0; i < str.length; i++) {
        let isSwapped = false;
        for (let j = 0; j < str.length - i; j++) {            
            if (str[j] > str[j + 1]) {
                // swap when the bigger char is before the smaller char
                let temp;
                temp = str[j];
                str[j] = str[j + 1];
                str[j + 1] = temp;
                isSwapped = true;
            }
        }
        if (!isSwapped) break;
    }
 
    str = str.join('').toString();
    return str;
}

// console.log(bubbleSortStr('ae'));
// console.log(bubbleSortStr('aea'));

var findTheDifference = function(s, t) {
    // sort s and t
    s = bubbleSortStr(s);
    t = bubbleSortStr(t);
    // loop through the length of s and compare same index in s and t
    for (let i = 0; i < s.length; i++) {
        // if diff is found, return the value    
        if (s[i] !== t[i]) return t[i];
    }
        
    // outside the loop, return the last value of t 
    return t[t.length - 1];
};

console.log(findTheDifference('ae', 'aea'));