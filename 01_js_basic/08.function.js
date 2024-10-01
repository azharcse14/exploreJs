// 1. Function Declaration
function greet(name) {
    return "Hello, " + name + "!";
}

// ব্যবহার
console.log(greet("John")); // আউটপুট: "Hello, John!"

// 2. Function Expression
const greetExpression = function(name) {
    return "Hello, " + name + "!";
};

// ব্যবহার
console.log(greetExpression("Alice")); // আউটপুট: "Hello, Alice!"

// 3. Arrow Function
const greetArrow = (name) => {
    return "Hello, " + name + "!";
};

// ব্যবহার
console.log(greetArrow("Bob")); // আউটপুট: "Hello, Bob!"

// 4. Function with Parameters
function add(a, b) {
    return a + b;
}

// ব্যবহার
console.log(add(5, 10)); // আউটপুট: 15

// 5. Default Parameters
function multiply(a, b = 1) {
    return a * b;
}

// ব্যবহার
console.log(multiply(5));   // আউটপুট: 5 (5 * 1)
console.log(multiply(5, 2)); // আউটপুট: 10 (5 * 2)

// 6. Function with Return Statement
function square(x) {
    return x * x;
}

console.log(square(4)); // আউটপুট: 16