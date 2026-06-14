// Print the count of subarrays whose sum is equal to the target. (Ex - {1,2,3,7,5}, T = 12 O/P - 2 - [ {2,3,7}, {7,5} ] - Both subarrays have sum 12)
function subArray() {
    let arr = [1, 2, 3, 7, 5];
    let target = 12;
    let count = 0;
    let sum = 0;
    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = i; j < arr.length - 1; j++) {
            if (arr[j] + sum === target) {
                count++;
                sum += j;
            }
        }
    }
}
console.log(subArray());



function checkArray() {
    let arr = [2, 41, 5, 7, 2, 6, 1];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > min) {
            
        }
    }
}