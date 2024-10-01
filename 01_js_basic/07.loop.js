// 1. for Loop
console.log("1. for Loop:");
for (let i = 0; i < 5; i++) {
    console.log(i); // আউটপুট: 0, 1, 2, 3, 4
}

// 2. while Loop
console.log("\n2. while Loop:");
let j = 0;
while (j < 5) {
    console.log(j); // আউটপুট: 0, 1, 2, 3, 4
    j++;
}

// 3. do...while Loop
console.log("\n3. do...while Loop:");
let k = 0;
do {
    console.log(k); // আউটপুট: 0, 1, 2, 3, 4
    k++;
} while (k < 5);

// 4. for...of Loop
console.log("\n4. for...of Loop:");
let fruits = ["apple", "banana", "orange"];
for (const fruit of fruits) {
    console.log(fruit); // আউটপুট: "apple", "banana", "orange"
}

// 5. for...in Loop
console.log("\n5. for...in Loop:");
let person = { name: "John", age: 30, city: "New York" };
for (const key in person) {
    console.log(key + ": " + person[key]); // আউটপুট: name: John, age: 30, city: New York
}

// 6. forEach Loop
console.log("\n6. forEach Loop:");
fruits.forEach((fruit, index) => {
    console.log(index + ": " + fruit); // আউটপুট: 0: apple, 1: banana, 2: orange
});