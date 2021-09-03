/**
 * declare a recursive function to generate 5 random numbers in an array
 * reasoning time in 15 minutes
 * create an array with 5 random numbers
 * each number is between 2 - 32 (inclusive)
 * if the number exists, create the other random number
 * for/while loop is not allowed
 * all numbers in the array shall be unique
 * code should be in 15 lines
 */

function recursiveArr(arr = [], length = 5, min = 2, max = 32) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
  if (!arr.includes(randomNum)) {
    arr.push(randomNum);
  }
  return arr.length === length ? arr : recursiveArr(arr, length, min, max);
}

console.log(recursiveArr([], 5, 2, 32));
