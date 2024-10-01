// আরিথমেটিক অপারেটর
let a = 10;
let b = 5;

console.log("আরিথমেটিক অপারেটর:");
console.log("যোগ: " + (a + b));        // আউটপুট: 15
console.log("বিয়োগ: " + (a - b));      // আউটপুট: 5
console.log("গুণ: " + (a * b));         // আউটপুট: 50
console.log("ভাগ: " + (a / b));         // আউটপুট: 2
console.log("মডুলাস: " + (a % b));      // আউটপুট: 0

// এসাইনমেন্ট অপারেটর
let x = 10;

console.log("\nএসাইনমেন্ট অপারেটর:");
x += 5; // x = x + 5
console.log("x এর মান: " + x); // আউটপুট: 15

// তুলনা অপারেটর
console.log("\nতুলনা অপারেটর:");
console.log(10 == '10');  // আউটপুট: true (টাইপ যাচাই করে না)
console.log(10 === '10'); // আউটপুট: false (টাইপ যাচাই করে)
console.log(10 != '10');  // আউটপুট: false
console.log(10 !== '10'); // আউটপুট: true
console.log(10 > 5);      // আউটপুট: true
console.log(10 < 5);      // আউটপুট: false

// লজিক্যাল অপারেটর
let aTrue = true;
let aFalse = false;

console.log("\nলজিক্যাল অপারেটর:");
console.log(aTrue && aFalse); // আউটপুট: false
console.log(aTrue || aFalse); // আউটপুট: true
console.log(!aTrue);           // আউটপুট: false

// বিটওয়াইজ অপারেটর
console.log("\nবিটওয়াইজ অপারেটর:");
console.log(5 & 3); // আউটপুট: 1 (বিট স্তরে গাণিতিক AND)
console.log(5 | 3); // আউটপুট: 7 (বিট স্তরে গাণিতিক OR)
console.log(5 ^ 3); // আউটপুট: 6 (বিট স্তরে গাণিতিক XOR)
console.log(~5);    // আউটপুট: -6 (বিট স্তরে NOT)
console.log(5 << 1); // আউটপুট: 10 (বাম দিকে শিফট)
console.log(5 >> 1); // আউটপুট: 2 (ডান দিকে শিফট)

// টাইপ অপারেটর
console.log("\nটাইপ অপারেটর:");
console.log(typeof "Hello"); // আউটপুট: "string"
console.log(typeof 42);      // আউটপুট: "number"
console.log(typeof true);     // আউটপুট: "boolean"
console.log(typeof []);      // আউটপুট: "object"
console.log([] instanceof Array); // আউটপুট: true