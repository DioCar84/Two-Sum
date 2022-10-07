/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let numsMap = {};
    for(let i=0; i < nums.length; i++){
        numsMap[nums[i]] = i;
    }
    
    for(let i=0; i < nums.length; i++){
        if(numsMap[target-nums[i]] && i !== numsMap[target-nums[i]]) return [i, numsMap[target-nums[i]]]; 
    }
};
