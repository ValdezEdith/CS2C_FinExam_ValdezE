const prompt = require("prompt-sync")({sigint:true});
// Declare two variables with the term listed below: (use prompt() function)
let str1 = prompt("Enter the first string (e.g., RACECAR):");
let str2 = prompt("Enter the second string (e.g., RECORDER):");


// reverse a sting (function)
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Reverse input strings
let reversedStr1 = reverseString(str1);
let reversedStr2 = reverseString(str2);

// reversed strings to the console and log the original
console.log("Original string 1:", str1);
console.log("Reversed string 1:", reversedStr1);
console.log("Original string 2:", str2);
console.log("Reversed string 2:", reversedStr2);

// checking if it is a palindrome
console.log("Is string 1 a palindrome?", str1 === reversedStr1);
console.log("Is string 2 a palindrome?", str2 === reversedStr2);
