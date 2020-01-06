// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the
// word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// If a word does not contain a vowel, just add "ay" to the end.

// Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
    return str;
  }
  
console.log(translatePigLatin("consonant"));
// output: "aliforniacay"

console.log(translatePigLatin("glove"));
// output: "oveglay

console.log(translatePigLatin("algorithm"));
// output: algorithmway

console.log(translatePigLatin("eight"));
// output: eightway

console.log(translatePigLatin("schwartz"));
// output: artzschway

console.log(translatePigLatin("rhythm"));
// output: rhythmay