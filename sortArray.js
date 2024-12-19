const prompt = require("prompt-sync")({sigint:true});
// two arrays using prompt function
let names = prompt("Enter names separated by commas:").split(",").map(name => name.trim());
let numbers = prompt("Enter numbers separated by commas:").split(",").map(Number);

// 2rrays,merge a1
let mergedArray = names.concat(numbers);

// Log the merged array
console.log("Merged array:", mergedArray);

// Sort sorting numbers in numerically and reverse
numbers.sort((a, b) => b - a); //Sort in descending order
console.log("Numbers sorted numerically in reverse:", numbers);

// Sorting names alphabetically
names.sort();
console.log("Names sorted alphabetically:", names);
