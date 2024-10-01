// 1. মাল্টি-লাইন স্ট্রিং
const message = `Hello, 
This is a multi-line string. 
You can write it across multiple lines.`;

console.log("1. Multi-line String:");
console.log(message);

// 2. ভেরিয়েবলের মান সন্নিবেশ করা
const name = "Alice";
const age = 25;

const greeting = `My name is ${name} and I am ${age} years old.`;

console.log("\n2. Variable Interpolation:");
console.log(greeting); // আউটপুট: My name is Alice and I am 25 years old.

// 3. এক্সপ্রেশন ব্যবহার
const a = 5;
const b = 10;

const sumMessage = `The sum of ${a} and ${b} is ${a + b}.`;

console.log("\n3. Using Expressions:");
console.log(sumMessage); // আউটপুট: The sum of 5 and 10 is 15.

// 4. মাল্টি-লাইন স্ট্রিং ও এক্সপ্রেশন একসাথে
const items = 3;
const totalPrice = 59.99;

const orderMessage = `You ordered ${items} items.
The total price is $${totalPrice}.`;

console.log("\n4. Multi-line String with Expressions:");
console.log(orderMessage);