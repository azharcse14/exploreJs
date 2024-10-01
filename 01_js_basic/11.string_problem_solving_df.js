// ১. স্ট্রিংয়ের দৈর্ঘ্য বের করা
let str1 = "Hello World!";
let length = str1.length;

console.log("1. Length of String:");
console.log(length); // আউটপুট: 13

// ২. স্ট্রিংয়ের মধ্যে একটি নির্দিষ্ট অক্ষর রয়েছে কিনা তা চেক করা
let charToCheck = 'o';
let hasChar = str1.includes(charToCheck);

console.log("\n2. Check if String Contains a Character:");
console.log(`Contains '${charToCheck}': ${hasChar}`); // আউটপুট: true

// ৩. স্ট্রিংয়ের মধ্যে একটি অক্ষরের সংখ্যা বের করা
let countChar = (str, char) => str.split(char).length - 1;
let charCount = countChar(str1, 'o');

console.log("\n3. Count Occurrences of a Character:");
console.log(`'o' count: ${charCount}`); // আউটপুট: 2

// ৪. স্ট্রিংয়ের প্রথম অক্ষর বের করা
let firstChar = str1.charAt(0);

console.log("\n4. First Character of String:");
console.log(firstChar); // আউটপুট: H

// ৫. স্ট্রিংয়ের শেষ অক্ষর বের করা
let lastChar = str1.charAt(str1.length - 1);

console.log("\n5. Last Character of String:");
console.log(lastChar); // আউটপুট: !

// ৬. স্ট্রিংয়ের মধ্যে substring বের করা
let subStr = str1.substring(0, 5);

console.log("\n6. Get Substring:");
console.log(subStr); // আউটপুট: Hello

// ৭. স্ট্রিংয়ের uppercase করা
let upperStr = str1.toUpperCase();

console.log("\n7. Convert to Uppercase:");
console.log(upperStr); // আউটপুট: HELLO WORLD!

// ৮. স্ট্রিংয়ের lowercase করা
let lowerStr = str1.toLowerCase();

console.log("\n8. Convert to Lowercase:");
console.log(lowerStr); // আউটপুট: hello world!

// ৯. স্ট্রিংয়ের মধ্যে শব্দ গুনা
let wordCount = str1.split(" ").length;

console.log("\n9. Count Words in String:");
console.log(`Word count: ${wordCount}`); // আউটপুট: 2

// ১০. স্ট্রিংয়ের মধ্যে whitespace গুনা
let whitespaceCount = (str) => (str.match(/\s/g) || []).length;
let wsCount = whitespaceCount(str1);

console.log("\n10. Count Whitespace in String:");
console.log(`Whitespace count: ${wsCount}`); // আউটপুট: 1

// ১১. স্ট্রিংয়ের মধ্যে একটি শব্দ রয়েছে কিনা তা চেক করা
let wordToCheck = "World";
let hasWord = str1.includes(wordToCheck);

console.log("\n11. Check if String Contains a Word:");
console.log(`Contains '${wordToCheck}': ${hasWord}`); // আউটপুট: true

// ১২. স্ট্রিংয়ের মধ্যে একটি শব্দের সংখ্যা বের করা
let countWord = (str, word) => str.split(word).length - 1;
let wordCountResult = countWord(str1, "o");

console.log("\n12. Count Occurrences of a Word:");
console.log(`Word 'o' count: ${wordCountResult}`); // আউটপুট: 2

// ১৩. স্ট্রিংয়ের মধ্যে শব্দগুলোর দৈর্ঘ্য বের করা
let wordLengths = str1.split(" ").map(word => word.length);

console.log("\n13. Length of Each Word:");
console.log(wordLengths); // আউটপুট: [5, 5]

// ১৪. স্ট্রিংয়ের মধ্যে শব্দগুলোর শুরুর অক্ষর বের করা
let firstLetters = str1.split(" ").map(word => word.charAt(0)).join("");

console.log("\n14. First Letters of Each Word:");
console.log(firstLetters); // আউটপুট: HW

// ১৫. স্ট্রিংয়ের মধ্যে শব্দগুলোকে উল্টো করা
let reversedWords = str1.split(" ").reverse().join(" ");

console.log("\n15. Reverse Words in String:");
console.log(reversedWords); // আউটপুট: World! Hello

// ১৬. স্ট্রিংয়ের মধ্যে নির্দিষ্ট শব্দ বাদ দেওয়া
let filteredStr = str1.replace("World", "");

console.log("\n16. Remove Specific Word from String:");
console.log(filteredStr); // আউটপুট: Hello !

// ১৭. স্ট্রিংয়ের মধ্যে সমস্ত অক্ষরকে টoggled করা
let toggledCaseStr = str1.split("").map(char => {
    return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
}).join("");

console.log("\n17. Toggle Case of String:");
console.log(toggledCaseStr); // আউটপুট: hELLO wORLD!

// ১৮. স্ট্রিংয়ের মধ্যে তিনটি অক্ষর চেক করা
let hasThreeChars = str1.includes("Hello") && str1.includes("World") && str1.includes("!");

console.log("\n18. Check for Three Characters:");
console.log(`Contains 'Hello', 'World', and '!': ${hasThreeChars}`); // আউটপুট: true

// ১৯. স্ট্রিংয়ের মধ্যে শব্দের মোট সংখ্যা
let totalWords = str1.split(/\s+/).length;

console.log("\n19. Total Number of Words:");
console.log(totalWords); // আউটপুট: 2

// ২০. স্ট্রিংয়ের মধ্যে একাধিক শব্দকে ফিল্টার করা
let wordsToRemove = ["Hello", "World"];
let filteredOutStr = str1.split(" ").filter(word => !wordsToRemove.includes(word)).join(" ");

console.log("\n20. Filter Out Multiple Words:");
console.log(filteredOutStr); // আউটপুট: !

// ২১. স্ট্রিংয়ের মধ্যে একটি শব্দ যোগ করা
let newStr = str1.replace("World", "JavaScript");

console.log("\n21. Add Word to String:");
console.log(newStr); // আউটপুট: Hello JavaScript!

// ২২. স্ট্রিংয়ের মধ্যে শব্দের প্রথম অক্ষর বড় করা
let capitalizeFirst = (str) => str.charAt(0).toUpperCase() + str.slice(1);
let capitalizedStr = capitalizeFirst("hello world");

console.log("\n22. Capitalize First Letter:");
console.log(capitalizedStr); // আউটপুট: Hello world

// ২৩. স্ট্রিংয়ের মধ্যে কেস টoggled করা
let strToToggle = "Hello World!";
let toggledStr = strToToggle.split("").map(char => {
    return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
}).join("");

console.log("\n23. Toggle Case of String:");
console.log(toggledStr); // আউটপুট: hELLO wORLD!

// ২৪. স্ট্রিংয়ের মধ্যে শব্দের মধ্যে মেটার শব্দ গুনা
let metaWordsCount = str1.split(" ").filter(word => word.length > 3).length;

console.log("\n24. Count Meta Words:");
console.log(`Meta words count: ${metaWordsCount}`); // আউটপুট: 2

// ২৫. স্ট্রিংয়ের মধ্যে অক্ষরের অবস্থান বের করা
let charPositions = (str, char) => {
    let positions = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            positions.push(i);
        }
    }
    return positions;
};

let positionsOfO = charPositions(str1, 'o');

console.log("\n25. All Positions of a Character:");
console.log(`Positions of 'o': ${positionsOfO}`); // আউটপুট: [4, 7]

// ২৬. স্ট্রিংয়ের মধ্যে একটি শব্দের অবস্থান বের করা
let wordPosition = str1.indexOf("World");

console.log("\n26. Position of a Word:");
console.log(`Position of 'World': ${wordPosition}`); // আউটপুট: 6

// ২৭. স্ট্রিংয়ের মধ্যে নির্দিষ্ট অক্ষরের সব অবস্থান বের করা
let allPositions = (str, char) => {
    let positions = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            positions.push(i);
        }
    }
    return positions;
};

let positionsOfL = allPositions(str1, 'l');

console.log("\n27. All Positions of a Character:");
console.log(`Positions of 'l': ${positionsOfL}`); // আউটপুট: [2, 9]

// ২৮. স্ট্রিংয়ে কেস গুনা
let uppercaseCount = str1.split("").filter(char => char === char.toUpperCase()).length;

console.log("\n28. Count Uppercase Letters:");
console.log(`Uppercase count: ${uppercaseCount}`); // আউটপুট: 2

// ২৯. স্ট্রিংয়ের মধ্যে বড় অক্ষরের সংখ্যা বের করা
let upperCaseCount = str1.split("").filter(char => char === char.toUpperCase() && char !== ' ').length;

console.log("\n29. Count Uppercase Letters:");
console.log(`Uppercase count: ${upperCaseCount}`); // আউটপুট: 2

// ৩০. স্ট্রিংয়ের মধ্যে ছোট অক্ষরের সংখ্যা বের করা
let lowerCaseCount = str1.split("").filter(char => char === char.toLowerCase() && char !== ' ').length;

console.log("\n30. Count Lowercase Letters:");
console.log(`Lowercase count: ${lowerCaseCount}`); // আউটপুট: 10

// ৩১. স্ট্রিংয়ের মধ্যে প্রতিটি অক্ষরের ফ্রিকোয়েন্সি বের করা
let charFrequency = {};
for (let char of str1) {
    charFrequency[char] = (charFrequency[char] || 0) + 1;
}

console.log("\n31. Character Frequency in String:");
console.log(charFrequency); // আউটপুট: { H: 1, e: 1, l: 3, o: 2, ... }

// ৩২. স্ট্রিংয়ের মধ্যে অক্ষরের মাধ্যমে অক্ষর গুনা
let countLetters = (str) => str.replace(/[^a-zA-Z]/g, "").length;

console.log("\n32. Count Letters in String:");
console.log(countLetters(str1)); // আউটপুট: 10

// ৩৩. স্ট্রিংয়ের মধ্যে একাধিক নির্দিষ্ট অক্ষরকে বাদ দেওয়া
let removeChars = (str, charsToRemove) => {
    let regex = new RegExp(`[${charsToRemove}]`, "g");
    return str.replace(regex, "");
};

let cleanedStr = removeChars(str1, "lo");

console.log("\n33. Remove Specific Characters from String:");
console.log(cleanedStr); // আউটপুট: Hell Wr!

// ৩৪. স্ট্রিংয়ের মধ্যে প্রথম বারের জন্য একটি অক্ষর পরিবর্তন করা
let replaceFirstOccurrence = (str, toReplace, replaceWith) => {
    return str.replace(toReplace, replaceWith);
};

let replacedFirst = replaceFirstOccurrence(str1, "o", "0");

console.log("\n34. Replace First Occurrence of Character:");
console.log(replacedFirst); // আউটপুট: Hell0 World!

// ৩৫. স্ট্রিংয়ের মধ্যে শেষ বারের জন্য একটি অক্ষর পরিবর্তন করা
let replaceLastOccurrence = (str, toReplace, replaceWith) => {
    let lastIndex = str.lastIndexOf(toReplace);
    if (lastIndex !== -1) {
        return str.slice(0, lastIndex) + replaceWith + str.slice(lastIndex + 1);
    }
    return str;
};

let replacedLast = replaceLastOccurrence(str1, "o", "0");

console.log("\n35. Replace Last Occurrence of Character:");
console.log(replacedLast); // আউটপুট: Hell0 World!

// ৩৬. স্ট্রিংয়ের মধ্যে নতুন লাইনে পরিবর্তন করা
let multilineStr = str1.replace(/ /g, "\n");

console.log("\n36. Replace Spaces with New Lines:");
console.log(multilineStr);
// আউটপুট:
// Hello
// World!

// ৩৭. স্ট্রিংয়ের মধ্যে প্রতিটি শব্দের প্রথম অক্ষর বড় করা
let capitalizeWords = (str) => {
    return str.split(" ").map(word => capitalizeFirst(word)).join(" ");
};

let capitalizedWordsStr = capitalizeWords("hello world");

console.log("\n37. Capitalize First Letter of Each Word:");
console.log(capitalizedWordsStr); // আউটপুট: Hello World

// ৩৮. স্ট্রিংয়ের মধ্যে ভেনডরড শব্দগুলো বের করা
let vendors = ["Apple", "Google", "Microsoft"];
let strWithVendors = "I love Apple and Google.";

let foundVendors = vendors.filter(vendor => strWithVendors.includes(vendor));

console.log("\n38. Find Vendors in String:");
console.log(foundVendors); // আউটপুট: [ 'Apple', 'Google' ]

// ৩৯. স্ট্রিংয়ে বর্ণমালা বিকৃতির সংখ্যা বের করা
let distortionCount = (str) => {
    let regex = /[^a-zA-Z]/g;
    return str.replace(regex, "").length;
};

let distortions = distortionCount("Hello! W@rld#");

console.log("\n39. Count Distortions in String:");
console.log(distortions); // আউটপুট: 10

// ৪০. স্ট্রিংয়ে এম্পাসিস শব্দ গুনা
let emphasisWordsCount = (str) => {
    let regex = /\b[A-Z]{2,}\b/g;
    return (str.match(regex) || []).length;
};

let emphasisCount = emphasisWordsCount("This is a TEST and another EXAMPLE.");

console.log("\n40. Count Emphasis Words in String:");
console.log(emphasisCount); // আউটপুট: 2

// ৪১. স্ট্রিংয়ের মধ্যে ভেক্টর অক্ষরের সংখ্যা বের করা
let vectorCount = (str) => {
    return str.split('').filter(char => char.match(/[a-zA-Z]/)).length;
};

let vectorCountResult = vectorCount(str1);

console.log("\n41. Count Vector Characters in String:");
console.log(vectorCountResult); // আউটপুট: 10

// ৪২. স্ট্রিংয়ের মধ্যে একটি নির্দিষ্ট অংশ বাদ দেওয়া
let removeSubstring = (str, substring) => {
    return str.replace(substring, "");
};

let withoutSubstring = removeSubstring(str1, "World");

console.log("\n42. Remove Substring from String:");
console.log(withoutSubstring); // আউটপুট: Hello !

// ৪৩. স্ট্রিংয়ের মধ্যে এস্কেপ অক্ষরের সংখ্যা বের করা
let escapeCharCount = (str) => {
    return (str.match(/\\/g) || []).length;
};

let escapeCount = escapeCharCount("Hello\\nWorld");

console.log("\n43. Count Escape Characters in String:");
console.log(escapeCount); // আউটপুট: 1

// ৪৪. স্ট্রিংয়ের মধ্যে সিম্বল সংখ্যা বের করা
let symbolCount = (str) => {
    return str.replace(/[a-zA-Z0-9\s]/g, "").length;
};

let symbols = symbolCount("Hello @ World!");

console.log("\n44. Count Symbols in String:");
console.log(symbols); // আউটপুট: 3

// ৪৫. স্ট্রিংয়ে প্রথম অক্ষর বাদ দেওয়া
let dropFirstChar = (str) => str.slice(1);

let droppedFirst = dropFirstChar(str1);

console.log("\n45. Drop First Character from String:");
console.log(droppedFirst); // আউটপুট: ello World!

// ৪৬. স্ট্রিংয়ে শেষ অক্ষর বাদ দেওয়া
let dropLastChar = (str) => str.slice(0, -1);

let droppedLast = dropLastChar(str1);

console.log("\n46. Drop Last Character from String:");
console.log(droppedLast); // আউটপুট: Hello World

// ৪৭. স্ট্রিংয়ের মধ্যে একটি শব্দের উপস্থিতি যাচাই করা
let checkWordPresence = (str, word) => str.split(" ").includes(word);

let isPresent = checkWordPresence(str1, "Hello");

console.log("\n47. Check Presence of Word in String:");
console.log(`'Hello' present: ${isPresent}`); // আউটপুট: true

// ৪৮. স্ট্রিংয়ের মধ্যে ভাঙন স্থানে একটি অক্ষর ব্যবহার করা
let breakStr = (str, index, char) => str.slice(0, index) + char + str.slice(index);

let brokenString = breakStr(str1, 5, "-");

console.log("\n48. Break String at an Index with a Character:");
console.log(brokenString); // আউটপুট: Hello- World!

// ৪৯. স্ট্রিংয়ের মধ্যে নির্দিষ্ট শব্দের সংখ্যা বের করা
let countSpecificWord = (str, word) => str.split(" ").filter(w => w === word).length;

let specificWordCount = countSpecificWord(str1, "World");

console.log("\n49. Count Specific Word in String:");
console.log(`Count of 'World': ${specificWordCount}`); // আউটপুট: 1

// ৫০. স্ট্রিংয়ের মধ্যে বিদ্যমান শব্দগুলোকে মিলানো
let matchWords = (str, words) => {
    let matches = [];
    for (let word of words) {
        if (str.includes(word)) {
            matches.push(word);
        }
    }
    return matches;
};

let wordsToMatch = ["Hello", "JavaScript", "World"];
let matchedWords = matchWords(str1, wordsToMatch);

console.log("\n50. Match Existing Words in String:");
console.log(matchedWords); // আউটপুট: [ 'Hello', 'World' ]

// ৫১. স্ট্রিংয়ের মধ্যে সংখ্যার উপস্থিতি যাচাই করা
let hasNumbers = (str) => /\d/.test(str);

console.log("\n51. Check for Numbers in String:");
console.log(`Contains numbers: ${hasNumbers(str1)}`); // আউটপুট: true

// ৫২. স্ট্রিংয়ে কোন সংখ্যা গুনা করা
let countNumbers = (str) => (str.match(/\d/g) || []).length;

console.log("\n52. Count Numbers in String:");
console.log(countNumbers("I have 2 apples and 3 bananas.")); // আউটপুট: 2

// ৫৩. স্ট্রিংয়ের মধ্যে সাদা জায়গা সংখ্যা গুনা করা
let countWhitespace = (str) => (str.match(/\s/g) || []).length;

console.log("\n53. Count Whitespace Characters in String:");
console.log(countWhitespace("Hello World! How are you?")); // আউটপুট: 4

// ৫৪. স্ট্রিংয়ে সর্বনিম্ন অক্ষর বের করা
let getMinChar = (str) => str.split("").reduce((min, char) => char < min ? char : min);

console.log("\n54. Get Minimum Character in String:");
console.log(getMinChar(str1)); // আউটপুট: !

// ৫৫. স্ট্রিংয়ের মধ্যে অক্ষর গুণা করা
let countCharacters = (str) => str.length;

console.log("\n55. Count Total Characters in String:");
console.log(countCharacters(str1)); // আউটপুট: 13

// ৫৬. স্ট্রিংয়ের মধ্যে কোনো শব্দের প্রথম অক্ষর বড় করা
let capitalizeWordFirstChar = (word) => word.charAt(0).toUpperCase() + word.slice(1);

let wordToCapitalize = "example";
console.log("\n56. Capitalize First Character of a Word:");
console.log(capitalizeWordFirstChar(wordToCapitalize)); // আউটপুট: Example

// ৫৭. স্ট্রিংয়ের শেষ অক্ষর বের করা
let getLastChar = (str) => str.charAt(str.length - 1);

console.log("\n57. Get Last Character of String:");
console.log(getLastChar(str1)); // আউটপুট: !

// ৫৮. স্ট্রিংয়ের একটি শব্দের অবস্থান বের করা
let getWordIndex = (str, word) => str.indexOf(word);

console.log("\n58. Get Index of a Word in String:");
console.log(getWordIndex(str1, "World")); // আউটপুট: 6

// ৫৯. স্ট্রিংয়ের মধ্যে শব্দ বিভাজন করা
let splitWords = (str) => str.split(" ");

console.log("\n59. Split String into Words:");
console.log(splitWords(str1)); // আউটপুট: [ 'Hello', 'World!' ]

// ৬০. স্ট্রিংয়ের মধ্যে ট্যাব সংখ্যা গুনা করা
let countTabs = (str) => (str.match(/\t/g) || []).length;

console.log("\n60. Count Tab Characters in String:");
console.log(countTabs("Hello\tWorld!")); // আউটপুট: 1

// ৬১. স্ট্রিংয়ের অক্ষর ঘোরানো
let reverseString = (str) => str.split("").reverse().join("");

console.log("\n61. Reverse String:");
console.log(reverseString(str1)); // আউটপুট: !dlroW olleH

// ৬২. স্ট্রিংয়ের মধ্যে নতুন শব্দ যোগ করা
let addWordToString = (str, word) => str + " " + word;

let newStrWithAddedWord = addWordToString(str1, "JavaScript");

console.log("\n62. Add Word to String:");
console.log(newStrWithAddedWord); // আউটপুট: Hello World! JavaScript

// ৬৩. স্ট্রিংয়ের মধ্যে ভিন্ন ভিন্ন শব্দ গুনা করা
let countUniqueWords = (str) => new Set(str.split(" ")).size;

console.log("\n63. Count Unique Words in String:");
console.log(countUniqueWords(str1)); // আউটপুট: 2

// ৬৪. স্ট্রিংয়ের অক্ষর পরিবর্তন করা
let replaceCharacter = (str, oldChar, newChar) => str.replace(new RegExp(oldChar, "g"), newChar);

let replacedCharStr = replaceCharacter(str1, "o", "0");

console.log("\n64. Replace Character in String:");
console.log(replacedCharStr); // আউটপুট: Hell0 W0rld!

// ৬৫. স্ট্রিংয়ের মধ্যে যেকোনো স্থান ফাঁকা রাখা
let trimString = (str) => str.trim();

console.log("\n65. Trim Whitespace from String:");
console.log(trimString("   Hello World!   ")); // আউটপুট: Hello World!

// ৬৬. স্ট্রিংয়ের মধ্যে কনসোনেন্ট সংখ্যা গুনা করা
let countConsonants = (str) => (str.match(/[bcdfghjklmnpqrstvwxyz]/gi) || []).length;

console.log("\n66. Count Consonants in String:");
console.log(countConsonants("Hello World!")); // আউটপুট: 7

// ৬৭. স্ট্রিংয়ের মধ্যে ভাওয়াল শব্দ গুনা করা
let countVowels = (str) => (str.match(/[aeiou]/gi) || []).length;

console.log("\n67. Count Vowels in String:");
console.log(countVowels("Hello World!")); // আউটপুট: 3

// ৬৮. স্ট্রিংয়ের মধ্যে শব্দের দৈর্ঘ্য গুনা করা
let countWordsLength = (str) => str.split(" ").map(word => word.length);

console.log("\n68. Count Length of Each Word in String:");
console.log(countWordsLength(str1)); // আউটপুট: [ 5, 6 ]

// ৬৯. স্ট্রিংয়ের মধ্যে ছোট অক্ষর ও বড় অক্ষর মিলিয়ে রাখা
let toggleCase = (str) => {
    return str.split("").map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join("");
};

console.log("\n69. Toggle Case of String:");
console.log(toggleCase("Hello World!")); // আউটপুট: hELLO wORLD!

// ৭০. স্ট্রিংয়ের অক্ষর স্থান পরিবর্তন করা
let swapCharacters = (str, index1, index2) => {
    let charArray = str.split("");
    [charArray[index1], charArray[index2]] = [charArray[index2], charArray[index1]];
    return charArray.join("");
};

let swappedStr = swapCharacters(str1, 0, 6);

console.log("\n70. Swap Characters in String:");
console.log(swappedStr); // আউটপুট: Wello Holrd!

// ৭১. স্ট্রিংয়ের মধ্যে সংখ্যা পরিবর্তন করা
let replaceNumbersInString = (str, newNumber) => str.replace(/\d+/g, newNumber);

let replacedNumbersStr = replaceNumbersInString("I have 2 apples and 3 bananas.", "5");

console.log("\n71. Replace Numbers in String:");
console.log(replacedNumbersStr); // আউটপুট: I have 5 apples and 5 bananas.

// ৭২. স্ট্রিংয়ের মধ্যে অতিরিক্ত স্পেস মুছে ফেলা
let removeExtraSpaces = (str) => str.replace(/\s+/g, " ").trim();

let extraSpacesRemovedStr = removeExtraSpaces("Hello    World!   How   are   you?");

console.log("\n72. Remove Extra Spaces from String:");
console.log(extraSpacesRemovedStr); // আউটপুট: Hello World! How are you?

// ৭৩. স্ট্রিংয়ের মধ্যে অক্ষরের পরিসীমা বের করা
let getCharRange = (str) => {
    let min = Math.min(...str.split("").map(char => char.charCodeAt(0)));
    let max = Math.max(...str.split("").map(char => char.charCodeAt(0)));
    return { min, max };
};

let charRange = getCharRange("abcXYZ");

console.log("\n73. Get Character Range in String:");
console.log(charRange); // আউটপুট: { min: 97, max: 90 }

// ৭৪. স্ট্রিংয়ের মধ্যে সংখ্যার পরিসীমা বের করা
let getNumberRange = (str) => {
    let numbers = str.match(/\d+/g);
    if (numbers) {
        let min = Math.min(...numbers.map(Number));
        let max = Math.max(...numbers.map(Number));
        return { min, max };
    }
    return { min: null, max: null };
};

let numberRange = getNumberRange("I have 2 apples and 5 bananas.");

console.log("\n74. Get Number Range in String:");
console.log(numberRange); // আউটপুট: { min: 2, max: 5 }

// ৭৫. স্ট্রিংয়ের মধ্যে পুনরাবৃত্ত শব্দ গুনা করা
let getUniqueWords = (str) => {
    let words = str.split(" ");
    let uniqueWords = [...new Set(words)];
    return uniqueWords;
};

console.log("\n75. Get Unique Words in String:");
console.log(getUniqueWords("Hello world Hello JavaScript")); // আউটপুট: [ 'Hello', 'world', 'JavaScript' ]

// ৭৬. একটি স্ট্রিংয়ের মধ্যে পুনরাবৃত্ত শব্দ গুনা করা
let countRepeatedWords = (str) => {
    let words = str.split(" ");
    let wordCount = {};
    words.forEach(word => {
        wordCount[word] = (wordCount[word] || 0) + 1;
    });
    return wordCount;
};

console.log("\n76. Count Repeated Words in String:");
console.log(countRepeatedWords("Hello Hello World! Hello")); // আউটপুট: { Hello: 3, World!: 1 }

// ৭৭. স্ট্রিংয়ের মধ্যে দীর্ঘতম শব্দ বের করা
let getLongestWord = (str) => str.split(" ").reduce((a, b) => a.length > b.length ? a : b);

console.log("\n77. Get Longest Word in String:");
console.log(getLongestWord("I love programming in JavaScript.")); // আউটপুট: programming

// ৭৮. স্ট্রিংয়ের মধ্যে যেকোনো শব্দ বাদ দেওয়া
let removeWord = (str, word) => str.split(" ").filter(w => w !== word).join(" ");

console.log("\n78. Remove Word from String:");
console.log(removeWord("Hello World! Hello", "Hello")); // আউটপুট: World!

// ৭৯. স্ট্রিংয়ের মধ্যে শুধু সংখ্যা রেখে সবকিছু মুছে ফেলা
let keepOnlyNumbers = (str) => str.replace(/[^0-9]/g, "");

console.log("\n79. Keep Only Numbers from String:");
console.log(keepOnlyNumbers("I have 2 apples and 3 bananas.")); // আউটপুট: 23

// ৮০. স্ট্রিংয়ের মধ্য থেকে একটি নির্দিষ্ট সংখ্যা বাদ দেওয়া
let removeSpecificNumber = (str, number) => str.replace(new RegExp(number, "g"), "");

console.log("\n80. Remove Specific Number from String:");
console.log(removeSpecificNumber("I have 2 apples and 2 bananas.", "2")); // আউটপুট: I have  apples and  bananas.

// ৮১. স্ট্রিংয়ে একটি নতুন শব্দ যোগ করা
let appendWord = (str, word) => str.concat(" ", word);

console.log("\n81. Append Word to String:");
console.log(appendWord(str1, "JavaScript")); // আউটপুট: Hello World! JavaScript

// ৮২. স্ট্রিংয়ের মধ্যে শব্দ ফিরিয়ে আনতে অঙ্কের সাথে যুক্ত করা
let concatenateStringWithNumbers = (str, number) => str + number;

console.log("\n82. Concatenate String with Number:");
console.log(concatenateStringWithNumbers(str1, 2024)); // আউটপুট: Hello World!2024

// ৮৩. স্ট্রিংয়ের মধ্য থেকে সবার শেষে '?' বা '!' মুছে ফেলা
let removeEndPunctuation = (str) => str.replace(/[!?]$/, "");

console.log("\n83. Remove End Punctuation from String:");
console.log(removeEndPunctuation("Hello World!")); // আউটপুট: Hello World

// ৮৪. স্ট্রিংয়ের মধ্যে বড় অক্ষর গুনা করা
let countUpperCaseLetters = (str) => (str.match(/[A-Z]/g) || []).length;

console.log("\n84. Count Uppercase Letters in String:");
console.log(countUpperCaseLetters("Hello World!")); // আউটপুট: 2

// ৮৫. স্ট্রিংয়ের মধ্যে ছোট অক্ষর গুনা করা
let countLowerCaseLetters = (str) => (str.match(/[a-z]/g) || []).length;

console.log("\n85. Count Lowercase Letters in String:");
console.log(countLowerCaseLetters("Hello World!")); // আউটপুট: 8

// ৮৬. স্ট্রিংয়ের মধ্যে একটি নির্দিষ্ট শব্দের অবস্থান বের করা
let findWordIndex = (str, word) => str.indexOf(word);

console.log("\n86. Find Index of Specific Word in String:");
console.log(findWordIndex("Hello World!", "World")); // আউটপুট: 6

// ৮৭. স্ট্রিংয়ের মধ্যে ভিন্ন ভিন্ন সংখ্যা গুনা করা
let countUniqueNumbers = (str) => {
    let numbers = str.match(/\d+/g);
    return new Set(numbers).size;
};

console.log("\n87. Count Unique Numbers in String:");
console.log(countUniqueNumbers("I have 2 apples and 3 bananas and 2 oranges.")); // আউটপুট: 2

// ৮৮. স্ট্রিংয়ের মধ্যে অক্ষর গুনা করা
let countTotalLetters = (str) => (str.match(/[a-zA-Z]/g) || []).length;

console.log("\n88. Count Total Letters in String:");
console.log(countTotalLetters("Hello World!")); // আউটপুট: 10

// ৮৯. স্ট্রিংয়ের প্রথম ও শেষ অক্ষর বের করা
let getFirstAndLastChar = (str) => ({
    first: str.charAt(0),
    last: str.charAt(str.length - 1),
});

console.log("\n89. Get First and Last Character of String:");
console.log(getFirstAndLastChar(str1)); // আউটপুট: { first: 'H', last: '!' }

// ৯০. স্ট্রিংয়ের মধ্য থেকে একটি নির্দিষ্ট অক্ষর বাদ দেওয়া
let removeSpecificCharacter = (str, char) => str.replace(new RegExp(char, "g"), "");

console.log("\n90. Remove Specific Character from String:");
console.log(removeSpecificCharacter("Hello World!", "o")); // আউটপুট: Hell Wrld!

// ৯১. স্ট্রিংয়ের মধ্যে সমস্ত অক্ষরের মধ্যে 'X' পরিবর্তন করা
let replaceAllWithX = (str) => str.replace(/./g, "X");

console.log("\n91. Replace All Characters with 'X':");
console.log(replaceAllWithX(str1)); // আউটপুট: XXXXXXXXXX

// ৯২. স্ট্রিংয়ের মধ্যে পুনরাবৃত্ত সংখ্যা বের করা
let findRepeatedNumbers = (str) => {
    let numbers = str.match(/\d+/g);
    let count = {};
    numbers.forEach(num => {
        count[num] = (count[num] || 0) + 1;
    });
    return count;
};

console.log("\n92. Find Repeated Numbers in String:");
console.log(findRepeatedNumbers("I have 2 apples, 3 bananas, and 2 oranges.")); // আউটপুট: { '2': 2, '3': 1 }

// ৯৩. স্ট্রিংয়ের মধ্যে অক্ষরের সংখ্যার পার্থক্য বের করা
let countDifferenceBetweenChars = (str) => {
    let letters = str.match(/[a-zA-Z]/g) || [];
    return Math.abs(letters.length - (str.length - letters.length));
};

console.log("\n93. Count Difference between Letters and Other Characters in String:");
console.log(countDifferenceBetweenChars(str1)); // আউটপুট: 0

// ৯৪. স্ট্রিংয়ের মধ্যে তিনটি অক্ষরের বর্ণের পরিসীমা বের করা
let getThreeCharRange = (str) => {
    let threeCharWords = str.match(/\b\w{3}\b/g) || [];
    return threeCharWords;
};

console.log("\n94. Get Three Character Words in String:");
console.log(getThreeCharRange("The cat sat on the mat.")); // আউটপুট: [ 'cat', 'sat', 'the' ]

// ৯৫. স্ট্রিংয়ের মধ্যে একটি নির্দিষ্ট অবস্থানে একটি নতুন অক্ষর যুক্ত করা
let addCharAtPosition = (str, char, position) => str.slice(0, position) + char + str.slice(position);

console.log("\n95. Add Character at Specific Position in String:");
console.log(addCharAtPosition(str1, "X", 5)); // আউটপুট: HelloX World!

// ৯৬. স্ট্রিংয়ের মধ্যে সর্বাধিক সংখ্যা খুঁজে বের করা
let getMaxNumberInString = (str) => {
    let numbers = str.match(/\d+/g);
    return Math.max(...numbers.map(Number));
};

console.log("\n96. Get Maximum Number in String:");
console.log(getMaxNumberInString("I have 2 apples and 5 bananas.")); // আউটপুট: 5

// ৯৭. স্ট্রিংয়ের মধ্যে সর্বনিম্ন সংখ্যা খুঁজে বের করা
let getMinNumberInString = (str) => {
    let numbers = str.match(/\d+/g);
    return Math.min(...numbers.map(Number));
};

console.log("\n97. Get Minimum Number in String:");
console.log(getMinNumberInString("I have 2 apples and 5 bananas.")); // আউটপুট: 2

// ৯৮. স্ট্রিংয়ের মধ্যে থাকা সংখ্যা গুনা করা
let countTotalNumbersInString = (str) => (str.match(/\d+/g) || []).length;

console.log("\n98. Count Total Numbers in String:");
console.log(countTotalNumbersInString("I have 2 apples and 3 bananas.")); // আউটপুট: 2

// ৯৯. স্ট্রিংয়ের মধ্যে দশমিক সংখ্যা গুনা করা
let countDecimalNumbersInString = (str) => {
    let decimalNumbers = str.match(/\d+\.\d+/g) || [];
    return decimalNumbers.length;
};

console.log("\n99. Count Decimal Numbers in String:");
console.log(countDecimalNumbersInString("I have 2.5 apples and 3.14 bananas.")); // আউটপুট: 2

// ১০০. স্ট্রিংয়ের মধ্যে সংখ্যা এবং অক্ষরের সমন্বয় করা
let combineNumbersAndChars = (str) => {
    let numbers = str.match(/\d+/g) || [];
    let chars = str.match(/[a-zA-Z]+/g) || [];
    return { numbers: numbers, chars: chars };
};

console.log("\n100. Combine Numbers and Characters from String:");
console.log(combineNumbersAndChars("I have 2 apples and 3 bananas."));
// আউটপুট: { numbers: [ '2', '3' ], chars: [ 'I', 'have', 'apples', 'and', 'bananas' ] }