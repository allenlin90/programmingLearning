// /*builds up a list structure like the one shown when given [1, 2, 3] as argument*/
function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
      list = {value: array[i], rest: list};
    }
    return list;
  }
console.log(arrayToList([10, 20]));
//→ {value: 10, rest: {value: 20, rest: null}}

/*produces an array from a list*/ 
function listToArray(list){
    let arr = new Array; 
    for (let node = list; node; node = node.rest) {
        arr.push(node.value); 
    }
    return arr; 
}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]

/*takes an element and a list and creates a new list that adds the element to the front of the input list*/
function prepend(e, list){
    return {e, rest:list}
}

console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}

//which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.
function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
  }

console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

