# Complexity Simplified (Hinglish Version)

## 1️⃣ Constant Time — O(1)
- **Meaning**: Input size chahe kitna bhi ho, steps same rahte hain.
- **Coding Example**:
    ```js
    let arr = [10, 20, 30, 40];
    console.log(arr[2]); // Always 1 step
    ```
- **Desi Example**: Ek plate se ek ladoo ek bande ko dena.

---

## 2️⃣ Linear Time — O(n)
- **Meaning**: Input size double, time bhi double.
- **Coding Example**:
    ```js
    let arr = [10, 20, 30, 40];
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]); // Runs once per element
    }
    ```
- **Desi Example**: Har guest ko individually milna aur gift dena.

---

## 3️⃣ Logarithmic Time — O(log n)
- **Meaning**: Har step me input ka half karte ho, isliye time bahut slow rate se badhta hai.
- **Coding Example** (Binary Search):
    ```js
    function binarySearch(arr, target) {
        let start = 0, end = arr.length - 1;
        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            if (arr[mid] === target) return mid;
            else if (arr[mid] < target) start = mid + 1;
            else end = mid - 1;
        }
        return -1;
    }
    ```
- **Desi Example**: Guess the number game — har baar beech ka number guess karke half search space hata dena.

---

## 📊 Growth Comparison Table

| Input Size (n) | O(1) Steps | O(n) Steps | O(log n) Steps |
|----------------|-----------|------------|----------------|
| 8              | 1         | 8          | 3              |
| 16             | 1         | 16         | 4              |
| 32             | 1         | 32         | 5              |
| 64             | 1         | 64         | 6              |
| 128            | 1         | 128        | 7              |

---

## 📉 Graph Representation
O(1) → Flat line (no growth)  
O(n) → Straight rising line  
O(log n) → Rising line but bends and flattens as n grows.

**Reference Graphs**:
- [Big-O Complexity Chart](https://www.bigocheatsheet.com/)
- [Visual Growth of Complexities](https://visualgo.net/en/timecomplexity)
