//3️⃣ Yaad rakhne ka shortcut
// 💡 Shortcut Trick:

// // 90° → (row, col) → (col ki ulta row, row) → (n - col - 1, row)

// 180° → dono ulta (n - row - 1, n - col - 1)

// 270° → (row, col) → (col, row ki ulta) → (col, n - row - 1)

// Main easy mnemonic deta hu:
/*
| Rotation | Shortcut socho   | Formula                  |
| -------- | ---------------- | ------------------------ |
| 0°       | kuch mat karo    | `(i, j)`                 |
| 90°      | `col ulta → row` | `(n - j - 1, i)`         |
| 180°     | dono ulta        | `(n - i - 1, n - j - 1)` |
| 270°     | `col → row ulta` | `(j, n - i - 1)`         |
*/


/*
4️⃣ Visual yaad rakhne ka hack
Soch matrix ek photo frame hai:

90° CW → right side niche aa jaata hai → column reverse hoke row banata hai.

180° → ulta frame → top niche, left right.

270° CW → left side niche aa jaata hai → row reverse hoke column banata hai.

*/

/*
4️⃣ Visual yaad rakhne ka hack
Soch matrix ek photo frame hai:

90° CW → right side niche aa jaata hai → column reverse hoke row banata hai.

180° → ulta frame → top niche, left right.

270° CW → left side niche aa jaata hai → row reverse hoke column banata hai.

Thik hai bhai, main tujhe **rotation ka formula** step-by-step samjhata hoon, taaki tu ek hi baar mein yaad rakh le aur confuse na ho.

---

## **1. Rotation Logic — 90° Clockwise**

90° clockwise rotation ka matlab hai:

* **Row → Column** ban jaati hai.
* **Index mapping formula**:
  Agar original matrix `mat[i][j]` hai to

  ```js
  rotated[j][n - 1 - i] = mat[i][j]
  ```

  Yahaan:

  * `i` = original row index
  * `j` = original column index
  * `n - 1 - i` = last se shift kiya hua row index

📌 **Example:**

```
Original:             After 90° Clockwise:

1 2 3                 7 4 1
4 5 6     --->        8 5 2
7 8 9                 9 6 3
```

Dekh le kaise pehli row `1 2 3` ban gayi last column `1 2 3 → vertical` me.

---

## **2. Trick to Remember**

Mujhe yaad rakhne ka shortcut:

> **"90° Clockwise = Transpose + Reverse each row"**

### Steps:

1. **Transpose** (swap rows with columns)

   ```
   1 2 3       1 4 7
   4 5 6  →    2 5 8
   7 8 9       3 6 9
   ```

2. **Reverse each row**

   ```
   1 4 7       7 4 1
   2 5 8  →    8 5 2
   3 6 9       9 6 3
   ```

---

## **3. Formula Set for All Rotations**

| Rotation                    | Formula                         | Trick                       |
| --------------------------- | ------------------------------- | --------------------------- |
| 90° Clockwise               | `rot[j][n-1-i] = mat[i][j]`     | Transpose + reverse rows    |
| 180°                        | `rot[n-1-i][n-1-j] = mat[i][j]` | Reverse rows + reverse cols |
| 270° Clockwise (or 90° CCW) | `rot[n-1-j][i] = mat[i][j]`     | Transpose + reverse cols    |

---

## **4. Optimized Single Function**

```js
function canBeObtained(mat, target) {
    let n = mat.length;

    const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);

    for (let k = 0; k < 4; k++) {
        if (isEqual(mat, target)) return true;

        // Rotate 90° Clockwise
        let newMat = [];
        for (let i = 0; i < n; i++) {
            newMat[i] = [];
            for (let j = 0; j < n; j++) {
                newMat[i][j] = mat[n - j - 1][i];
            }
        }
        mat = newMat;
    }
    return false;
}
```
*/

// Transpose of a matrix

function transpose(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let result = [];

    //💡 Simple analogy Ye pehla loop ek container banane ka kaam kar raha hai — pehle dabbe bana rahe hain, phir inner loop me un dabbon me saman (values) bhar rahe hain.
    for (let i = 0; i < cols; i++) {
        result[i] = [];
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            result[j][i] = matrix[i][j];
        }
    }
    return result;
}

// Example
let arr = [
    [1, 2, 3],
    [4, 5, 6]
];

console.log(transpose(arr));
