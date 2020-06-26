function extractCurrencyValue(str) {
    let val = '';
    for (let num of str) {
        if (Number(num) && num !== ''|| num === '0') {
            val += num;
        }
    }
    return Number(val); 
}
console.log(extractCurrencyValue('$120') === 120 ); // true