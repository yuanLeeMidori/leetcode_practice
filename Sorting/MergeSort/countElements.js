// 2148. Count Elements With Strictly Smaller and Greater Elements

/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function (nums) {
    
    // sort the elements function (merge sort)    
    function mergeArr(a1, a2) {
        let result = [];
        let a1ptr = 0;
        let a2ptr = 0;
        
        while (a1ptr < a1.length && a2ptr < a2.length) {
            if (a1[a1ptr] >= a2[a2ptr]) {
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
    
    function mergeSort(arr) {

        // base case
        if (arr.length === 1 || arr.length === 0) return arr;
                
        let mid = Math.floor(arr.length / 2);
        // diff input. split the array
        let left = mergeSort(arr.slice(0, mid));
        let right = mergeSort(arr.slice(mid));
        return mergeArr(left,right);
    }
    
    // sort nums array
    nums = mergeSort(nums);
    
    // if the array less than 3 elements can't continue...
    // what to return?
    
    
    // start ind
    // get the index of the first value that is greater than at least one value 
    //                                  and less than at least one value
    let start = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i-1] && nums[nums.length - 1] > nums[i]) {
            start = i;
            break;
        }
    }
    
    // end ind
    // get the index of the most right second biggest value
    let end = 0;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            end = i;
            break;
        }
    }
    
    if (start === 0 || end === 0) {
        return 0;
    }
    
    // if start and end are the same, return 1
    if (start === end) return 1;    
    // else: return end - start + 1 
    else return (end - start) + 1;
    // 0 1 2 3, 4 5, 6  => 3
};