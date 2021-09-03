# Remove the last given character from a string
Date: 2021/09/03

## Conditions
1. Create a Javascript function which can
2. Find the last, specific character from a string
3. Remove the character from the string

## Solution
```js
// use String.prototype.lastIndexOf
function removeLastChar(text = '', char = '') {
  if (text && char) {
    const index = text.lastIndexOf(char);
    if (index > -1) {
      // use split, splice, join
      const textArr = text.split('')
      textArr.splice(index, 1);
      return textArr.join('');

      // use substring or substr
      return text.substr(0, index - 1) + text.substring(index + 1, text.length);
    }
  }
  return null;
}

// loop the string reversly
function removeLastCharLoop(text = '', char = '') {
  if (text && char) {
    chars = text.split('');
    for (let i = (chars.length - 1); i >= 0; i--) {
      if (chars[i] === char) {
        return chars.slice(0, i).join('') + chars.slice((i + 1), chars.length).join('');
      }
    }
  }
}
```

## Hints
1. `Array.prototype.splice` will modify the array directly and return the modified elements in an array if the element is more than one.
2. `Array.prototype.lastIndexOf` is similar to `Array.prototype.indexOf` but search in a reverse way. Both methods return `-1` if no target is found.

## Reference
1. [Array.prototype.lastIndexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)
2. [Array.prototype.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)