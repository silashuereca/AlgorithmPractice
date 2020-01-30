/*
Find the smallest common multiple of the provided parameters that can be evenly 
divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that
is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
 */

function smallestCommons(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  // store range of numbers
  let mltple = max;
  for(var i = max; i >= min; i--){
    if(mltple % i !== 0){
      mltple += max; 
      i = max
    } 
  }

  return mltple;
}
  
  
console.log(smallestCommons([1, 5]));
// output: 60

console.log(smallestCommons([5, 1]));
// output: 60

console.log(smallestCommons([2, 10]));
// output: 2520

console.log(smallestCommons([23, 18]));
// output: 
  
