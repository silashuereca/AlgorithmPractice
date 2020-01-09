


/*
Perform a search and replace on the sentence using the arguments
provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are replacing it.
For example if you mean to replace the word "Book" with the word "dog", 
it should be replaced as "Dog"
*/

function myReplace(str, before, after) {
    let regex = /^[A-Z]/;
    let firstLetter = [];
    let arrayAfter = after.split("");
    let updateWord = '';

    // check if the first letter of "before" is capitalized or not
    if (regex.test(before)) {
        firstLetter.push(arrayAfter[0].toUpperCase())
        arrayAfter.shift();
        updateWord = firstLetter.join("") + arrayAfter.join("");
        return str.replace(before, updateWord)
    }

    return str.replace(before, after);
  }

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
// ouput: A quick brown fox leaped over the lazy dog

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
// output: He is Sitting on the couch

console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));
// output: This has a spelling error

console.log(myReplace("His name is Tom", "Tom", "john"));
// output: His name is John

console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));
// output: Let us get back to more Algorithms