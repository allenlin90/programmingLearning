/*
Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
*/

function digPow(n, p){
    let number = String(n); 
    let total = 0; 
    for (let digit of number) {
        total += Math.pow(Number(digit),p); 
        p++;
    }
    let k = total / n
    if (k >= 0 && k!== NaN && Math.floor(k) === k) {
        return k;
    } else {
        return -1; 
    }
    
}

console.log(digPow(46288,3));