/*
Given a position integer num, 
return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1.
Every additional number in the sequence is the sum of the two previous numbers.
The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example sumFibs(10) should return 10 because
all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, 5.

*/

function sumFibs(num) {
    if (num === 1) return 2;

    let array = [1, 1];
    let newNum = 0;
    let total = []

    for (let i = newNum; newNum <= num; i++){
        if (newNum % 2 !== 0) {
            total.push(newNum)    
        }
        newNum = array[0] + array[1];
        array.shift();
        array.push(newNum);
            
    }

    return total.reduce(function(a, b){ return a + b}, 0) + 2;
  }
  
console.log(sumFibs(4));
// output: 5

console.log(sumFibs(1000));
// output: 1785

console.log(sumFibs(4000000));
// output: 4613732

console.log(sumFibs(75024));
// output: 60696