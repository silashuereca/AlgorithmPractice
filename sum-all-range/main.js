// function sumAll(arr) {
// 	//select first and last array numbers
// 	let num1 = arr[0];
// 	let num2 = arr[1];

// 	//fill in the gap between two numbers by creating new array
// 	let allNumArray = [];

// 	// check to decide if we need to increment between gap of numbers
// 	if (num1 < num2) {
// 		for (let i = num1; i <= num2; i++) {
// 			allNumArray.push(i);
// 		}

// 		//add all numbers together
// 		let sumAll = allNumArray.reduce((acc, val) => {
// 			return acc + val;
// 		});

// 		// return sum of all numbers
// 		return sumAll;
// 	} else {
// 		// else decrement if number one is greater than number two
// 		for (let i = num1; i >= num2; i--) {
// 			//push numbers into allNumArray variable
// 			allNumArray.push(i);
// 		}

// 		//add all numbers in array using .reduce() method
// 		let sumAll = allNumArray.reduce((acc, val) => {
// 			return acc + val;
// 		});

// 		//return sum of all numbers
// 		return sumAll;
// 	}
// }

//console.log(sumAll([1, 5]));
// Ouput: 15

//console.log(sumAll([4, 1]))
// Output: 10

// console.log(sumAll([20, 6]));
// Output: 195

function sumAll(arr) {
	//find largest number in array
	let min = Math.min(...arr);
	//find smallest number in array
	let max = Math.max(...arr);

	let sum = 0;

	for (let i = min; i <= max; i++) {
		sum += i;
	}

	return sum;
}

// console.log(sumAll([1, 4]));
// Output: 10

// console.log(sumAll([4, 1]));
// Output: 10

// console.log(sumAll([15, 1]));
// Output: 120
