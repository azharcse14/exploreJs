// 1. if Statement
let score = 85;

console.log("1. if Statement:");
if (score >= 60) {
    console.log("You have passed."); // Output: "You have passed."
}

// 2. if...else Statement
score = 45;

console.log("\n2. if...else Statement:");
if (score >= 60) {
    console.log("You have passed.");
} else {
    console.log("You have failed."); // Output: "You have failed."
}

// 3. if...else if...else Statement
score = 75;

console.log("\n3. if...else if...else Statement:");
if (score >= 80) {
    console.log("Your grade: A");
} else if (score >= 60) {
    console.log("Your grade: B"); // Output: "Your grade: B"
} else {
    console.log("Your grade: C");
}

// 4. switch Statement
let day = 3;
let dayName;

console.log("\n4. switch Statement:");
switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday"; // Output: "Wednesday"
        break;
    default:
        dayName = "Invalid day";
}

console.log(dayName);

let day = 2;

switch (day) {
    case 1:
    case 2:
    case 3:
        console.log("It's a weekday."); // Output: "It's a weekday."
        break;
    case 4:
    case 5:
        console.log("Almost the weekend.");
        break;
    case 6:
    case 7:
        console.log("It's the weekend!");
        break;
    default:
        console.log("Invalid day.");
}

// 5. Conditional (Ternary) Operator
score = 55;
let result = (score >= 60) ? "Pass" : "Fail"; // Output: "Fail"

console.log("\n5. Conditional (Ternary) Operator:");
console.log(result);