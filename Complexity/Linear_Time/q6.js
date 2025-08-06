let arr = [10, 20, 30, 40, 50];

function linear(arr, target) {
    let size = arr.length;
    for (let i = 0; i < size; i++) {
        if (target === arr[i]) {
            console.log(`Target: ${arr[i]} at Index: ${i}`);
        }
    }
}

linear(arr, 30);