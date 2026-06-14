//Bijli Bill

/*

| Units Range | Rate per unit |
| ----------- | ------------- |
| 0 – 50      | ₹3            |
| 51 – 150    | ₹5            |
| 151 – 250   | ₹6.2          |
| Above 250   | ₹7.5          |



## 🧾 Final Simple Code First:

```javascript
let units = parseFloat(prompt("Enter electricity units consumed:"));
let bill = 0;

if (units <= 50) {
    bill = units * 3;
} else if (units <= 150) {
    bill = 50 * 3 + (units - 50) * 5;
} else if (units <= 250) {
    bill = 50 * 3 + 100 * 5 + (units - 150) * 6.2;
} else {
    bill = 50 * 3 + 100 * 5 + 100 * 6.2 + (units - 250) * 7.5;
}

let fixedCharge = 50;
bill = bill + fixedCharge;

alert("Total Units: " + units + "\nYour Total Bill = ₹" + bill.toFixed(2));
```

---

Now, let's break it down in **real-life language**.

---

### 🧠 Step 1: Take input from user

```js
let units = parseFloat(prompt("Enter electricity units consumed:"));
```

🔸 This shows a pop-up and asks **how many units of electricity** you used.
🔸 `parseFloat` is used to convert the input (text) into a number.
🔸 Example: If you type `240`, then `units = 240`.

---

### 💰 Step 2: Initialize the bill

```js
let bill = 0;
```

🔸 We're starting with 0. We'll **add prices based on how many units** were used.

---

### 💡 Step 3: Use slab system

In electricity billing, the **more units you use, the higher the rate** you pay:

| Units Range   | Rate per Unit |
| ------------- | ------------- |
| 0 – 50        | ₹3            |
| 51 – 150      | ₹5            |
| 151 – 250     | ₹6.2          |
| 251 and above | ₹7.5          |

Let’s explain each condition.

#### 🔹 If you use 50 or fewer units:

```js
if (units <= 50) {
    bill = units * 3;
}
```

👉 Every unit is ₹3.

#### 🔹 If you use 51 to 150 units:

```js
else if (units <= 150) {
    bill = 50 * 3 + (units - 50) * 5;
}
```

👉 First 50 = ₹3
👉 Rest (51 to your units) = ₹5

> Example: For 100 units:
> 50 * 3 = 150
> (100-50) = 50 → 50 * 5 = 250
> Total: ₹400

#### 🔹 If you use 151 to 250 units:

```js
else if (units <= 250) {
    bill = 50 * 3 + 100 * 5 + (units - 150) * 6.2;
}
```

👉 First 50 → ₹3
👉 Next 100 → ₹5
👉 Rest → ₹6.2

> Example: 200 units →
> 50*3 = 150 + 100*5 = 500 + (200-150)*6.2 = 310
> Total: ₹960

#### 🔹 If above 250:

```js
else {
    bill = 50 * 3 + 100 * 5 + 100 * 6.2 + (units - 250) * 7.5;
}
```

👉 First 50 → ₹3
👉 Next 100 → ₹5
👉 Next 100 → ₹6.2
👉 Remaining → ₹7.5

> Example: 280 units →
> 50*3 = 150
> 100*5 = 500
> 100*6.2 = 620
> (280-250) = 30 → 30*7.5 = 225
> Total: ₹1495

---

### 💡 Step 4: Add Fixed Charges

```js
let fixedCharge = 50;
bill = bill + fixedCharge;
```

👉 ₹50 is added to all bills. Like a meter maintenance fee.

---

### 📢 Step 5: Show the bill

```js
alert("Total Units: " + units + "\nYour Total Bill = ₹" + bill.toFixed(2));
```

👉 `\n` = new line
👉 `.toFixed(2)` keeps 2 decimal places like ₹1495.00

---

## ✅ Final Example

If you enter `units = 280`, you'll get:

```
Total Units: 280
Your Total Bill = ₹1545.00
```

---

## 📌 Summary

| Step          | What it does                     |
| ------------- | -------------------------------- |
| Input         | Ask user for electricity units   |
| Calculate     | Use slab rates to calculate bill |
| Fixed Charges | Add ₹50 to every bill            |
| Output        | Show total with 2 decimal places |

| Units Range   | Rate per Unit |
| ------------- | ------------- |
| 0 – 50        | ₹3            | 50*3 => 150
| 51 – 150      | ₹5            | 100*5 => 500
| 151 – 250     | ₹6.2          | 100*6.2 => 620
| 251 and above | ₹7.5          |

---

*/
let units = parseFloat(prompt("Enter units.."));


let bill = 0;

if (units <= 50) {

    bill = units * 3;
    alert("Total Units: " + units + "\nYour Total Bill = ₹" + bill.toFixed(2));
}
else if (units > 50 && units <= 150) {

    bill = 50 * 3 + (units - 150) * 5;
    alert("Total Units: " + units + "\nYour Total Bill = ₹" + bill.toFixed(2));
}
else if (units > 101 && units <= 250) {

    bill = 50 * 3 + 100 * 5 + (units - 150) * 6.2;
    alert("Total Units: " + units + "\nYour Total Bill = ₹" + bill.toFixed(2));
}
else if (units > 251) {

    bill = 50 * 3 + 100 * 5 + 100 * 6.2 + (units - 250) * 7.5;
    alert("Total Units: " + units + "\nYour Total Bill = ₹" + bill.toFixed(2));
}