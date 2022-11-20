// 997. Find the Town Judge

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
 var findJudge = function(n, trust) {
    
    // if being trusted by one person gets one point
    //    trusting another person deduct one point
    // town judge should gain n-1 points
    // the rest of the ppl in town should get less than n-1 points
    
    // 0. special case - when there is only one person in the town and the trust array is empty, she is the judge
    if (n === 1 && trust.length === 0) return 1;
    
    // 1. create trust point array for everyone
    // something like [9,8] => meaning resident 1 has 9 trust points and resident 2 has 8 trust point (index + 1 is the resident number)
    
    let trustScore = new Array(n+1).fill(0); // initialize trustScore for everyone in the town with 0 point
        
    
    // 2. the index in ai should be deducting one point; the index in bi should be increasing one point
    // e.g. trust = [[1,2], [3,2]]
    //      trust[0][0] = 1, and 1 trusts someone, so index 1 in the score array should -1
    //      trust[0][1] = 2, 2 is being trusted, so index 2 in the score array should +1
    for (let i = 0; i < trust.length; i++) {
        trustScore[trust[i][0]]--;
        trustScore[trust[i][1]]++;
    }

    // 3. if we can find one resident's score that is exactly equal to n-1, return its index as town judge result
    //    otherwise, return -1 as no one is town judge...
    if (trustScore.indexOf(n-1))
        return trustScore.indexOf(n-1);
    else
        return -1;            
    
    
};