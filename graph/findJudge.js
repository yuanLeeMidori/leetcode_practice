// 997. Find the Town Judge

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    
    // if there is only one person (aka n == 1), she is the judge
    if (n == 1) return 1;
        
    
    // size of trust
    let size = 0;
    let limit = false;
    let i = 0;
    while (!limit) {
        
        if (trust[i] != undefined) {
            size ++;    
            i++;
        } else {
            limit = true;
        }        
    }
    
    // get the hashTable of each second position (bi) (example: [[1,3],[1,4],[2,3],[2,4],[4,3]])
    let distribution = {};
    let dSize = 0;
    
    // after this, the hash table should be {'3': 0, '4': 0}
    for (let i = 0; i < size; i++) {
        distribution[trust[i][1]] = 0;
    }
    
    // after this, the hash table should be {'3': 3, '4': 2}    
    for (let i = 0; i < size; i++) {
        distribution[trust[i][1]]++;
    }
    
    
    dSize = Object.keys(distribution).length;
    
    let potentialJudge = '';
    
    
    for (let i = 0; i < dSize; i++) {
        if (distribution[Object.keys(distribution)[i]] === n-1) {
            potentialJudge =  parseInt(Object.keys(distribution)[i]);
        }
    }
    // we should find exactly one potential judge that has the same value of n-1 (the number of people trusting her)
    //                                                       in this case, n = 4, so there should be 3 people trust her
    
    if (potentialJudge == '') return -1; // when no judge is found
    
    for (let i = 0; i < size; i++){
        // if judge trusts anyone, she's not a judge (aka when judge num is in the first position in each trust set)
        if (trust[i][0] == parseInt(potentialJudge)) return -1 ;
    }
    return potentialJudge;
};