// ১. স্ট্রিংয়ের দৈর্ঘ্য বের করা
let str1 = "Hello World!";

let length = 0;
for (let i = 0; i < str.length; i++) {
    length++;
}

console.log("String: " + str);
console.log("Length of String: " + length);

//another
let str = "Hello, World!";

// স্ট্রিংয়ের দৈর্ঘ্য বের করার জন্য একটি while লুপ ব্যবহার
let length = 0;
let i = 0;

while (str[i] !== undefined) {
    length++; // দৈর্ঘ্য বাড়ানো
    i++; // পরবর্তী ইনডেক্সে যাওয়া
}

console.log("String: " + str);
console.log("Length of String: " + length);