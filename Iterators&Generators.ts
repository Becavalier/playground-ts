let someArray = [1, "string", false]

// Array.prototype[Symbol.iterator]
for (let entry of someArray) {
    console.log(entry);
}

let list = [4, 5, 6]
for (let i in list) {
    console.log(i); // "0", "1", "2"
}

for (let i of list) {
    console.log(i); // "4", "5", "6"
}



