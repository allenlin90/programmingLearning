var Parser = require('expr-eval').Parser;

var parser = new Parser();
var expr = parser.parse('2 * x + 1');

//console.log(expr.evaluate({ x: 3 })); // 7

// or
//Parser.evaluate('6 * x', { x: 7 }) // 42

let returnlog = parser.parse("lg x"); 
console.log(returnlog.evaluate({x:1000}))