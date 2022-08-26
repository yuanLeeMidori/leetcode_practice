// 1859. Sorting the Sentence

/**
 * @param {string} s
 * @return {string}
 */



var sortSentence = function (s) {
    

    // radix sort 
    // helper func 1 - getDigit
    function getDigit(ele, i) {
        
        return Math.floor((ele.slice(-1) / Math.pow(10, i)) % 10);
    }
    
    // helper func 2 - digitCount // always 1 in this problem
    function digitCount(ele) {
        if (ele.slice(-1) === 0) return 1;
        return Math.floor(Math.log10(ele.slice(-1))) + 1;
        
    }
    
    // helper func 3 - getMaxDigit // always 1 in this problem
    function getMaxDigit(eles) {
        let max = 0;
        for (let i = 0; i < eles.length; i++) {
            if (digitCount(eles[i].slice(-1)) > max) max = digitCount(eles[i].slice(-1));
        }
        return max;
    }
    
    // radix sort main func
    function radixSort(arr) {
        // 1. getMax        
        // 2. loop through 0 to before max -> in this case no need because max is one
        
        // 3. Create 10 based buckets
        let tenBuckets = Array.from({length: 10}, () => []);
        // 4. loop through each num and push to respective bucket
        for (let i = 0; i < arr.length; i++) {
            tenBuckets[getDigit(arr[i], 0)].push(arr[i]);
            // console.log(tenBuckets);
        }
        // 5. Concat arr from buckets
        arr = [].concat(...tenBuckets);
        // 6. return arr
        return arr;
    }
     
    
    // string to arr
    s = s.split(' ');

    // sort strarr with radix sort
    s = radixSort(s);

    s = s.toString().replace(/[0-9]/g, '').replace(/,/g, ' ');

    return s;
 
};

let s = "me9 is2 sentence7 trust8 really4 truly5 This1 a3 long6"

console.log(sortSentence(s))