// Print the count of subarrays whose sum is equal to the target. (Ex - {1,2,3,7,5}, T = 12 O/P - 2 - [ {2,3,7}, {7,5} ] - Both subarrays have sum 12)
function subArray() {
    let arr = [1, 2, 3, 7, 5];
    let target = 12;

    let subarrays = [[], []];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + arr[i + 1] === target) {
            subarrays = [arr[i], arr[i + 1]];
        }
        console.log(subarrays);

    }
}
console.log(subArray());
