//Brute Force

function brute(nums) {
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        let freq = 1;
        for (let j = i + 1; j < n; j++) {
            if (nums[i] === nums[j]) freq++;
        }
        if (freq > n / 2) return nums[i];
    }
    return nums[i]
}
let nums = [2, 1, 1, 2, 2];
// console.log(brute(nums));


//Optimize Approach
function Optimize(nums) {
    let n = nums.length;
    let ans = nums[0];
    let freq = 0;
    for (let i = 0; i < n; i++) {
        nums = nums.sort((a, b) => a - b);
        if (nums[i] === nums[i - 1]) {
            freq++;
        }
        else
            freq = 1; ans = nums[i];

        if (freq > n / 2) return ans;
    }
    return ans;
}
// console.log(Optimize(nums));

//Moore's Algo
function Moore(nums) {

    /*    let freq = 0, ans = 0;
       for (let i = 0; i < nums.length; i++) {
           if (freq === 0) ans = nums[i];
           else if (ans === nums[i]) freq++;
           else freq--;
       }
       return ans; */
    //First Create a Counter & Assume the First Element is Answer / Majority Element/ Candidate.
    let counter = 1;
    let ans = nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (counter === 0) {
            ans = nums[i];
        }
        else if (ans === nums[i]) {
            counter++;
        }
        else
            counter--;
        if (counter > nums.length / 2) return ans;
    }

    return ans;

}

// console.log(Moore(nums));

//New Moore's
function moee(nums) {
    let counter = 0, ans = null;
    for (let i = 0; i < nums.length; i++) {
        if (counter === 0) {
            ans = nums[i];
        }
        counter += (ans === nums[i]) ? 1 : -1;
    }
    
    let freq = 0;
    for (let i of nums) {
        if (ans === i) {
            freq++;
        }
    }

    let n = Math.floor(nums.length / 2);

    return freq > n ? ans : -1;
};
console.log(moee(nums));

