# Declare a recursive function which create an array with 5 unique random numbers from 2 - 32
Date: 2021/09/01

## Conditions
1. Reasoning time in 15 minutes
2. Create an array with 5 random numbers
3. Each number is between 2 - 32
4. If the number exists, create the other random number
5. for/while loop is not allowed
6. All numbers in the array shall be unique
7. All code should be in 15 lines

## Subjects
1. How `Math.random` works in Javascript
2. How to create a random number in certain range
3. Declare recursive function in Javascript

## Solution

```js
function recursiveArr(arr = [], length = 5, min = 2, max = 32) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
  if (!arr.includes(randomNum)) { arr.push(randomNum); }
  return arr.length === length ? arr : recursiveArr(arr, length, min, max);
}
```

## Hints
1. `Math.random` create a number between 0 (inclusive) and 1 (exclusive)
2. Get a random number between 2 numbers `max` and `min`.
  
  ```js
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  ```

3. Get a random integer between 2 numbers `max` and `min`.
  ```js
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  ```

4. Get a random integer between 2 numbers `max` and `min` inclusive.
  ```js
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
  ```

## Reference
1. [`Math.random()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)