/*
In this Kata, you will be given a number n (n > 0) and your task will be to return the smallest square number N (N > 0) such that n + N is also a perfect square. If there is no answer, return -1
*/

function solve(n){
    if (n <= 0) return "Given number must be greater than 0";
    for (let i = 1; i <= Infinity; i++) {
        let N = (i ** 2); 
        if (Math.sqrt(n + N) % 1 === 0) return N; 
    }
    return -1;
}

console.log(solve(3)); 