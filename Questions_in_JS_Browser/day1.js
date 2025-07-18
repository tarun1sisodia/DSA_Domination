
alert("Only Integers Please");
try {
    const a = parseInt(prompt('Enter A'));
    const b = parseInt(prompt('Enter B'));

    const sum = a + b;
    alert(`The Sum of ${a} & ${b} is ${sum}`)

} catch (error) {
    alert("You Done Something Incorrect.")
}