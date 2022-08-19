// 1859. Sorting the Sentence


/**
 * @param {string} s
 * @return {string}
 */



var sortSentence = function (s) {
    

    // merge 2 sorted arr
    function mergeArrs(a1, a2) {
        let a1ptr = 0;
        let a2ptr = 0;
        let result = [];

        while (a1ptr < a1.length && a2ptr < a2.length) {
            if (a1[a1ptr].slice(-1) >= a2[a2ptr].slice(-1)) {
                result.push(a2[a2ptr]);
                a2ptr++;                 
            } else {
                result.push(a1[a1ptr]);
                a1ptr++;
            }
        }

        while (a1ptr < a1.length) {
            result.push(a1[a1ptr]);
            a1ptr++;
        }

        while (a2ptr < a2.length) {
            result.push(a2[a2ptr]);
            a2ptr++;
        }

        return result;
    }
 
    // merge sort main function
    function mergeSort(sArr) {
        
        if (sArr.length === 0 || sArr.length === 1) return sArr;
        
        let mid = Math.floor(sArr.length / 2);
        
        let left = mergeSort(sArr.slice(0,mid));
        let right = mergeSort(sArr.slice(mid));
        
        return mergeArrs(left, right);
    }
 
    // string to arr
    s = s.split(' ');

    s = mergeSort(s);

    s = s.toString().replace(/[0-9]/g, '').replace(/,/g, ' ');

    return s;
 
};

