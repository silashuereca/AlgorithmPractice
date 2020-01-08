// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the
// word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// If a word does not contain a vowel, just add "ay" to the end.

// Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
  let regex = /[aeiou]/ig;
  let notVowel = /^[^aeiou]+/ig
  

  // if first letter is a vowel then add "way" at the end of the string
  if (regex.test(str[0])) {
      return str + "way";
  }
  // if the string doesn't contain any vowels add "ay" at the end  
  if (regex.test(str) === false) {
      return str + "ay";
  }
   // if the string contains vowels and the first letter isn't a vowel, return the collection
   // of cononants plus "ay" at the end of the string
  let firstConsonants = str.match(notVowel).join("");
    
  return str.replace(firstConsonants, "") + firstConsonants + "ay";
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