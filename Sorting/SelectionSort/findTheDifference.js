// 389. Find the Difference
// Challenge: don't use built-in sort() function. Instead, write a sort string function with selection sort.

function selectionSortStr(str) {


    str = str.split('');
    let min;

    for (let i = 0; i < str.length; i++) {
        min = i;
        for (let j = i + 1; j < str.length; j++) {
            if (str[j] < str[min]) min = j;
        }

        let temp;
        if (i !== min) {
            temp = str[i];
            str[i] = str[min];
            str[min] = temp;
        }
    }

    str = str.join('').toString();
    return str;

}

var findTheDifference = function(s, t) {

    // sort s and t
    s = selectionSortStr(s);
    t = selectionSortStr(t);
    // loop through the length of s and compare same index in s and t
    for (let i = 0; i < s.length; i++) {
        // if diff is found, return the value    
        if (s[i] !== t[i]) return t[i];
    }
        
    // outside the loop, return the last value of t 
    return t[t.length - 1];
};