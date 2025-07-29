//Right Reverse Triangle — Number Pattern 

let n = 5;
for (let i = n; i >= 1; i--) {
    let nums = " ";
    for (let j = 1; j <= i; j++) {
        nums += j + " ";
    }
    console.log(nums);
}