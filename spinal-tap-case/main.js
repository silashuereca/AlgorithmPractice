// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {

    return str.split(" ").join("-").toLowerCase();
}


console.log(spinalCase("This Is Spinal Tap"));

