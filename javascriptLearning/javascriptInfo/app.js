// function sortByAge(users) 
//     users.sort(function(a, b){
//         if(a.age > b.age) return 1; 
//         return -1;
//     });
// }
function sortByAge(users){users.sort((a, b) => (a.age > b.age) ? 1 : -1)};
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

console.log(arr[0].name); // John
console.log(arr[1].name); // Mary
console.log(arr[2].name); // Pete