// Solution 1

function diffArray(arr1, arr2) {
	let newArray = [];

	for (let item of arr1) {
		if (arr2.includes(item) === false) {
			newArray.push(item);
		}
	}

	for (let item of arr2) {
		if (arr1.includes(item) === false) {
			newArray.push(item);
		}
	}

	return newArray;
}

console.log(
	diffArray(
		['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
		['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
	)
);
//Output: [ 'pink wool', 'diorite' ]

console.log(diffArray([1, 2, 3, 4, 6, 7], [1, 2, 4, 5, 87, 65]));
// Output: [ 3, 6, 7, 5, 87, 65 ]
