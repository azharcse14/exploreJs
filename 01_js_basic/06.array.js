// ১. অ্যারে তৈরি করা
let fruits = ["apple", "banana", "orange"];
console.log("1. Create an Array:");
console.log(fruits); // আউটপুট: ['apple', 'banana', 'orange']

// ২. অ্যারের মধ্যে উপাদান যোগ করা
fruits.push("mango");
console.log("\n2. Add Element to Array:");
console.log(fruits); // আউটপুট: ['apple', 'banana', 'orange', 'mango']

// ৩. অ্যারের মধ্যে উপাদান বাদ দেওয়া
fruits.pop();
console.log("\n3. Remove Last Element from Array:");
console.log(fruits); // আউটপুট: ['apple', 'banana', 'orange']

// ৪. অ্যারে থেকে একটি নির্দিষ্ট অবস্থানে একটি উপাদান যোগ করা
fruits.splice(1, 0, "kiwi");
console.log("\n4. Add Element at Specific Index in Array:");
console.log(fruits); // আউটপুট: ['apple', 'kiwi', 'banana', 'orange']

// ৫. অ্যারেতে একটি নির্দিষ্ট উপাদান খুঁজে বের করা
let index = fruits.indexOf("banana");
console.log("\n5. Find Index of Element in Array:");
console.log(index); // আউটপুট: 2

// ৬. অ্যারের আকার পাওয়া
let count = fruits.length;
console.log("\n6. Count Elements in Array:");
console.log(count); // আউটপুট: 4

// ৭. অ্যারে পুনরাবৃত্তি করা
console.log("\n7. Iterate Over Array:");
fruits.forEach((fruit) => console.log(fruit));

// ৮. অ্যারে সাজানো
fruits.sort();
console.log("\n8. Sort Array:");
console.log(fruits); // আউটপুট: ['apple', 'banana', 'kiwi', 'orange']

// ৯. অ্যারে থেকে নির্দিষ্ট উপাদান বাদ দেওয়া
let removeElementFromArray = (arr, element) => {
    return arr.filter(item => item !== element);
};

console.log("\n9. Remove Element from Array:");
console.log(removeElementFromArray(fruits, "kiwi")); // আউটপুট: ['apple', 'banana', 'orange']

// ১০. অ্যারের মধ্যে যোগফল বের করা
let sumArray = (arr) => arr.reduce((acc, curr) => acc + curr, 0);
console.log("\n10. Sum of Array Elements:");
console.log(sumArray([1, 2, 3])); // আউটপুট: 6

// ১১. অ্যারে থেকে প্রথম উপাদান বের করা
let getFirstElement = (arr) => arr[0];
console.log("\n11. Get First Element from Array:");
console.log(getFirstElement(fruits)); // আউটপুট: 'apple'

// ১২. অ্যারে থেকে শেষ উপাদান বের করা
let getLastElement = (arr) => arr[arr.length - 1];
console.log("\n12. Get Last Element from Array:");
console.log(getLastElement(fruits)); // আউটপুট: 'orange'

// ১৩. অ্যারেকে একটি স্ট্রিং-এ রূপান্তর করা
let arrayToString = (arr) => arr.join(", ");
console.log("\n13. Convert Array to String:");
console.log(arrayToString(fruits)); // আউটপুট: 'apple, banana, orange'

// ১৪. অ্যারে থেকে যেকোনো একাধিক উপাদান বাছাই করা
let selectRandomElements = (arr, count) => {
    let shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

console.log("\n14. Select Random Elements from Array:");
console.log(selectRandomElements(fruits, 2)); // আউটপুট: ['banana', 'orange'] (প্রত্যেকবার ভিন্ন হতে পারে)

// ১৫. অ্যারে থেকে প্রতিটি উপাদানকে দ্বিগুণ করা
let doubleArrayElements = (arr) => arr.map(item => item * 2);
console.log("\n15. Double Each Element in Array:");
console.log(doubleArrayElements([1, 2, 3])); // আউটপুট: [2, 4, 6]

// ১৬. অ্যারের মধ্যে উপাদান খুঁজে বের করা
let findElement = (arr, element) => arr.includes(element);
console.log("\n16. Check if Element Exists in Array:");
console.log(findElement(fruits, "banana")); // আউটপুট: true

// ১৭. অ্যারে থেকে প্রথমবার উপস্থিত উপাদানের সূচক বের করা
let findFirstOccurrenceIndex = (arr, element) => arr.indexOf(element);
console.log("\n17. Find First Occurrence Index of Element in Array:");
console.log(findFirstOccurrenceIndex(fruits, "banana")); // আউটপুট: 1

// ১৮. অ্যারে ফিরিয়ে দেয় যাদের দৈর্ঘ্য নির্দিষ্ট
let filterByLength = (arr, length) => arr.filter(item => item.length === length);
console.log("\n18. Filter Elements by Length:");
console.log(filterByLength(fruits, 6)); // আউটপুট: ['banana']

// ১৯. অ্যারে গুণফল বের করা
let productArray = (arr) => arr.reduce((acc, curr) => acc * curr, 1);
console.log("\n19. Product of Array Elements:");
console.log(productArray([1, 2, 3, 4])); // আউটপুট: 24

// ২০. অ্যারে থেকে একটি নির্দিষ্ট উপাদান মুছে ফেলা
let removeElementByValue = (arr, element) => {
    const index = arr.indexOf(element);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
};

console.log("\n20. Remove Specific Element from Array:");
console.log(removeElementByValue(fruits, "apple")); // আউটপুট: ['banana', 'orange']