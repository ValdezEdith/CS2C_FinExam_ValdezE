const prompt = require("prompt-sync")({sigint:true});
// Create sub-arrays using prompt()
let subArray1Names = prompt("Enter names for subArray1 separated by commas:").split(",").map(name => name.trim());
let subArray2Ages = prompt("Enter ages for subArray2 separated by commas:").split(",").map(Number);

//Check if lengths of the arrays are equal. If not, handle the error.
if (subArray1Names.length !== subArray2Ages.length) {
    console.error("Error: The number of names and ages must be equal.");
} else {
    // Create multi-dimensional array
    let mdArray = [];
    for (let i = 0; i < subArray1Names.length; i++) {
        mdArray.push([subArray1Names[i], subArray2Ages[i]]);
    }

    // Log the restructured multi-dimensional array
    console.log("Restructured multi-dimensional array:");
    mdArray.forEach(element => console.log(element));
}
