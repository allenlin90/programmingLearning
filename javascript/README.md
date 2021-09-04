This is the note learning by doing 
- [1. Javascript](#1-javascript)
  - [1.1. Array Functions](#11-array-functions)
- [2. express](#2-express)
  - [2.1. Difference between callback functions](#21-difference-between-callback-functions)

# 1. Javascript
## 1.1. Array Functions
1. `.push()` method for Arrays actually returns a value which is the length of the array after "push". For example, if we have an array with 3 elements, if we assign variable len to be `len = array.push(e)`. `len` gets not an array value but a number which is the length of the updated array. This is a similar in Python that if we assign an variable with the returned value of a method, the variable will be `None` value. 
1. keyword `return` cannot stop `.forEach()` loop in higher order function. If we'd like to stop the `for` loop during iteration with `return`, we must use a regular syntax. We can check more info. on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Description).

# 2. express
## 2.1. Difference between callback functions
1. In `express` framework, the main difference between **event handler**, **middleware**, and **error handler** are from their arguments. A route handler can have multiple methods and middlewares. Note that the order of passing functions to the handler matter the sequence of function execution. Besides, a middleware must run a `next` method for further execution. 
1. The main purpose for middleware is to check or verify the `req` parameter before going further to the route method. Therefore, we can add, modify, or reject the function during the process of a middleware. 
    1. Route method  
        ```js 
        function(req, res) {
            res.send();
        }
        ```
    1. Middleware 
        ```js 
        function(req, res, next) {
            // logic...
            next();
        }
        ```
    1. Error handler
        ```js 
        function(error, req, res, next) {
            res.stats(400).send({error});
        }
        ```
