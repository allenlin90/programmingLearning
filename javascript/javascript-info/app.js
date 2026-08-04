let str = 'abcde'; 
let arr = Array.from(str); 

console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

let text = 'abcde'; 
let array = []; 
for (let char of text) {
    array.push(char); 
}
console.log(array); // [ 'a', 'b', 'c', 'd', 'e' ]
let counter = 0; 
for (let i = 0; i < arr.length; i++){
    if (arr[i] === array[i]) {
        counter++;
    }
}
console.log(counter === 5); // 5