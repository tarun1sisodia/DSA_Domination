//40 Print \hello\" until user gives wrong input using do while"

let input;
do {
    input = +prompt('Enter +ve');
    if (input > 0)
        alert(`${input}`)
} while (input > 0);