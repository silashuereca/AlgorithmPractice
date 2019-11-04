// 3 different ways to reverse a string

// function myFunction(str) {
// 	return str
// 		.split('')
// 		.reversed()
// 		.join('');
// }

// function myFunction(str) {
// 	let reversed = '';

// 	for (let char of str) {
// 		reversed = char + reversed;
// 	}

// 	return reversed;
// }

// function myFunction(str) {
// 	return str.split('').reduce((acc, val) => val + acc, '');
// }

//Palindromes

// function myFunction(str) {
// 	let reversed = str
// 		.split('')
// 		.reverse()
// 		.join('');

// 	return str === reversed;
// }

// function myFunction(str) {
// 	return str.split('').every((char, i) => {
// 		return char === str[str.length - i - 1];
// 	});
// }

//Reversing an Int
// toString() can take a number into a string
// sign() can tell if the number is positive or negative
// parseInt() can turn a number in string into a number

// function myFunction(number) {
// 	const reversed = number
// 		.toString()
// 		.split('')
// 		.reverse()
// 		.join('');

// 	return parseInt(reversed) * Math.sign(number);
//

//Finding the max number of the same character in a string

// function myFunction(str) {
// 	const charMap = {};
// 	let max = 0;
// 	let maxChar = '';

// 	for (let char of str) {
// 		if (charMap[char]) {
// 			charMap[char]++;
// 		} else {
// 			charMap[char] = 1;
// 		}
// 	}

// 	for (let char in charMap) {
// 		if (charMap[char] > max) {
// 			max = charMap[char];
// 			maxChar = char;
// 		}
// 	}

// 	return maxChar;
// }

//FizzBuzz

// function myFunction(number) {
// 	for (let i = 1; i <= number; i++) {
// 		if (i % 15 === 0) {
// 			console.log('fizzbuzz');
// 		} else if (i % 3 === 0) {
// 			console.log('fizz');
// 		} else if (i % 5 === 0) {
// 			console.log('buzz');
// 		} else {
// 			console.log(i);
// 		}
// 	}
// }

//Array Chunking
function myFunction() {}

console.log(myFunction(100));
