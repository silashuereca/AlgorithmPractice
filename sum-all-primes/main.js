/*
A prime number is a whole number greater than 1 with exactly two divisors:
1 and itself. 

Rewrite sumPrimes so it returns the sum of all
prime numbers that are less than or equal to num.
*/

function sumPrimes(num) {
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= num; ++i){
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i)
            for (j = i << 1; j <= num; j += i){
                sieve[j] = true
            }
        }
    }

    return primes.reduce((a , b) => a + b);
}

console.log(sumPrimes(10));
// output: 17

console.log(sumPrimes(977));
// output: 73156