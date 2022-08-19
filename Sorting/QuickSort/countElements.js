// 2148. Count Elements With Strictly Smaller and Greater Elements

/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function(nums) {
    // swap function
     function swapArrVal(arr, l, r) {
         let temp = arr[l];
         arr[l] = arr[r];
         arr[r] = temp;
     }
     
     // return pivot helper function
     // - pivot: elements at its left side are all smaller than it; elements at its right side are all bigger than it
 
     function findPivot(arr, left=0, right=arr.length-1) {
         // take first element as pivot
         let pivot = arr[left];
         let pivotIdxCount = left;
         for (let i = left +1; i <= right; i++) {
             if (pivot > arr[i]) {    // when pivot is greater than current value
                 pivotIdxCount++;     // pivot index count + 1
                 swapArrVal(arr, pivotIdxCount, i); // swap current value with 
             }
         }
         swapArrVal(arr, left, pivotIdxCount);
         return pivotIdxCount;
 
     }
 
     // quick sort function
 
     function quickSort(arr, left = 0, right = arr.length - 1) {
         // as long as left is still smaller (lefter) than right, the checking arr size is not one element
         // which means the job is not done yet
         if (left < right) {
             let pivotInd = findPivot(arr, left, right);
 
             quickSort(arr, left, pivotInd-1);
             quickSort(arr, pivotInd + 1, right);
 
         }
         return arr;
     }
     
     // sort nums array
     nums = quickSort(nums);
     
 
     
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
     } else if (start === end) {   // if start and end are the same, return 1
         return 1;
     } else {
         return (end - start) + 1; // else: multiple counts. return end - start + 1 
     }
     
    
     
 };