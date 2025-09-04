//Brute Force
//Pair Sum.
function brutePairSum(arr, target) {

    let ans = [];
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[i] + arr[j] === target) {
                ans.push(arr[i]);
                ans.push(arr[j]);
                return { i, j }; // if you want the index of elements.
                return ans; //always will be given.
            }
        }
    }
}
let array = [2, 7, 11, 15];
let target = 9;
// console.log(brutePairSum(array, target));


//Optimize Pair Sum.
console.log(sortedPairSumOptimize(array, target = 26));
function sortedPairSumOptimize(arr, target) {

    let i = 0;
    let n = arr.length - 1;
    let j = n;
    while (i < j) {
        let pairSum = arr[i] + arr[j];

        if (pairSum > target) j--;
        else if (pairSum < target) i++;
        else return { i, j };
    }

}