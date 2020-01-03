//You will be provided with an initial array 
//(the first argument in the destroyer function), 
//followed by one or more arguments.Remove all elements 
//from the initial array that are of the same value as these arguments.

function destroyer(arr, ...destroy) {
    let newArray = [];
    
    for (let value of arr) {
        if (destroy.includes(value) !== true) {
            newArray.push(value);
        }
    }
    
    return newArray;
}

destroyer(["tree", "hamburger", 53], "tree", 53);
// output ["hamburger"]
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
// output [1, 1]
destroyer([3, 5, 1, 2, 2], 2, 3, 5);
// output [1]
