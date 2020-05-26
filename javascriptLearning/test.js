var Parser = require('expr-eval').Parser;

var parser = new Parser();
var expr = parser.parse('2 * x + 1');

//console.log(expr.evaluate({ x: 3 })); // 7

// or
//Parser.evaluate('6 * x', { x: 7 }) // 42

let returnlog = parser.parse("lg x"); 
//console.log(returnlog.evaluate({x:1000}))


/*To check how variable reference and how they affect to each other*/
let arr1 = [1,2,3,4,5]; 
let arr2 = arr1; 
let arr3 = [1,2,3,4,5]; 
arr2.push(6);

//console.log(arr1);
//console.log(arr2);
//console.log(arr3);


/*Check Objects*/
let obj = {
    a: 1, 
    b: 2 
}
//console.log(Object.getOwnPropertyNames(obj))
//console.log(Object.values(obj))

var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };



let name = "My name is Allen"
console.log(name.split(" "))