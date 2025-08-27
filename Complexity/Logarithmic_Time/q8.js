
//Last occurrence of target in sorted array  
function last() {
    let arr = [2, 4, 4, 4, 5, 5, 6];
    let target = 5;
    let index = -1; //intially not found agr array m exist nhi krta hoga to nhi milegea .
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            index = i;
        }
    }
    return index;
}
// console.log(last());


//Better Version of it.

function Version() {
    let arr = [2, 4, 4, 4, 5, 5, 6];
    let target = 4;
    let start = 0;
    let end = arr.length - 1;
    let result = -1;

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (arr[mid] === target) {
            result = mid;
            start = mid + 1;// ye islye kra h taki hum last tk ja sake 
        }
        else if (arr[mid] < target) start = mid + 1;
        else
            end = mid - 1;
    }
    return result;
}

console.log(Version());
