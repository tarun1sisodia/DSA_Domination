function introduceEveryone(people) {
    for (let i = 0; i < people.length; i++) {
        for (let j = 0; j < people.length; j++) {
            console.log(`${people[i]} met ${people[j]}`);
        }
    }
}

let guests = ["Amit", "Neha", "Rahul"];
introduceEveryone(guests); // O(n²)
