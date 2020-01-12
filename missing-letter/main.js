/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
    let alphabet = [
        "a", "b", "c", "d", "e",
        "f", "g", "h", "i", "j",
        "k", "l", "m", "n", "o", "p",
        "q", "r", "s", "t", "u",
        "v", "w", "x", "y", "z"
    ];
    let startPoint = alphabet.indexOf(str[0]);
    let strArray = str.split("");

    for (let i = 0; i <= strArray.length; i++) {
        if (alphabet[startPoint++] !== strArray[i]){
            return alphabet[startPoint -1]
        }
    }

    return;
}

console.log(fearNotLetter("abce"));
// output: d

console.log(fearNotLetter("abcdefghjklmno"));
// output: i

console.log(fearNotLetter("stvwx"));
// output: u

console.log(fearNotLetter("bcdf"));
// output: e

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
// output: undefined
