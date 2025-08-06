let list = ["Tarun", 21, "Github", "DSA"];
let newList = [];

for (const copy in list) {
    newList[copy] = list[copy]
}
console.log(newList);
