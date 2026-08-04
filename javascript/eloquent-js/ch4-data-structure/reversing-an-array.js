//reverseArray takes an array as argument and produces a new array that has the same elements in the inverse order
//index and add elemetns reversely
function reverseArray(arr){
    let array = new Array; 
    for (let i = arr.length - 1; i >= 0; i--){
        array.push(arr[i]); 
    }
    return array; 
} 

//add elements to the first in the array
function reverseElements(arr) {
    let array = []; 
    for (let i = 0; i < arr.length; i++){
        array.unshift(arr[i])
    }
    return array; 
}

console.log(reverseArray(["A", "B", "C"]));
console.log(reverseElements(["A", "B", "C"]));
// → ["C", "B", "A"];

//reverseArrayInPlace does what the reverse method does: it modifies the array given as argument by reversing its elements.
//use swaping rather than copying the array and reassign 
function reverseArrayInPlace(arr){
    for (let i = 0; i < Math.floor(arr.length/2); i++){
        let hold = arr[i]; 
        arr[i] = arr[arr.length - 1 - i]; 
        arr[arr.length - 1 - i] = hold; 
    }
    return arr;
}

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]