// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
    let res = str.replace(/_/g, "");

    // split into whole words
    let array = res.split(" ");

    // search for capital letters in array
    let cap = /^[A-Z]/;

    // where the new string will be stored
    let emptyStr = "";

    // capitalize the beginning of all words and join them back together into a string
    let capFirstLetter = array.map(word => word[0].toUpperCase() + word.substr(1)).join("");

    // split array of words into separate letters
    let secondArray = capFirstLetter.split("");

    // place a dash before every capitalize word except for the first character
    for (let i = 1; i < secondArray.length; i++){
        if (cap.test(secondArray[i])) {
            emptyStr += "-" + secondArray[i];
        } else {
            emptyStr += secondArray[i];
        }
    }

    return (str[0] + emptyStr).toLowerCase();
}



console.log(spinalCase("Teletubbies say Eh-oh"));
// output: teletubbies-say-eh-oh

console.log(spinalCase("The_Andy_Griffith_Show"))
// output: the-andy-griffith-show

console.log(spinalCase("This Is Spinal Tap"))
// outpue: this-is-spinal-tap

console.log(spinalCase("thisIsSpinalTap"));
// output: this-is-spinal-tap

console.log(spinalCase("AllThe-small Things"))
// output: all-the-small-things