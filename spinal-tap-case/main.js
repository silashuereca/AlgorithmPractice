// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
    let strArray = str.split("");
    let newString = "";
    
    for (let i of strArray) {
        if (i === i.toUpperCase()) {
            newString += "-" + i
        } else {
            newString += i
        }
    }

    return newString;
}


console.log(spinalCase("The_Andy_Griffith_Show"));
// output: 
