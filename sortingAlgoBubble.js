const readlineSync = require('readline-sync');
//constructing function
function bubbleSort(arr) {
  //swapping
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap elements
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

// Example usage for readline cause some codes are not working
let numbers = [];
while (numbers.length < 10) {
    let numStr = readlineSync.question("Enter a number: ");
    let num = parseInt(numStr);
    if (!isNaN(num)) {
        numbers.push(num);
    } else {
        console.log("Invalid input. Please enter a number.");
    }
}

const sortedNumbers = bubbleSort(numbers);
console.log("Sorted array:", sortedNumbers);
