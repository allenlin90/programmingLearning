Note:

1. Start learning course on 2020/07/23
1. Finished on
1. As I just finished a course about HTML and CSS during June and July 2020, I will start the CSS session later to review the techniques and skills of HTML and CSS.

# Structure

1. CSS Animation: Transforms and Transitions
1. CSS Animation: Keyframes
1. Advanced CSS: Layout with Flexbox
1. Project: Building A Startup Site
1. Async Foundations
1. AJAX Part 1: XHR and Fetch
1. AJAX Part 2: jQuery and Axios
1. Testing with Jasmine
1. Advanced Array Methods
1. Closures and the Keyword 'this'
1. Object Oriented Programming with JavaScript
1. Creating JSON API's with Node and Mongo
1. Codealong: Single Page Todo List with Express, Mongo, and jQuery
1. ES2015 Part 1
1. ES2015 Project - Guess the Password
1. ES2015 Part 2
1. ES2016 and ES2017
1. D3 and the DOM
1. Data Joins and Update Patterns in D3
1. SVG and D3
1. D3 Odds and Ends, and Advanced Graph Types
1. Project: Building a Data Dashboard with D3
1. Introduction to React and JSX
1. Create React App and Props
1. State
1. The Virtual DOM, Events, and Forms
1. Component Lifecycle Methods
1. Building A Full-stack App with React
1. React Router
1. Redux Introduction
1. In Depth Redux Code Walkthrough
1. Warbler Introduction and Backend Part 1
1. Warbler Backend Part 2
1. Warbler Frontend Part 1
1. Warbler Frontend Part 2

# Async Foundations

### Callback Functions

1. Objectives
   1. Define callback functions
   1. Define higher order functios
   1. Use a callback function to make the code more general
   1. Create callbacks using anonymous functions
1. A "**callback function**" is a function that is passed into another function as a parameter then invoked by that other function.
1. A "**higher order function**" is a function that accept a callback as a parameter. 
   ```js
   function callback() {
     console.log("Coming from callback");
   }

   function higherOrder(fn) {
     console.log("About to call callback");
     fn();
     console.log("Callback has been invoked");
   }

   higherOrder(callback);
   ```
1. What are callbacks used for? 
    1. Advanced Array methods
    1. Browser events 
    1. AJAX Requests
    1. React Development 

### Codealong: forEach
1. Objectives 
    1. Describe and use the forEach function
    1. Implement the forEach function
1. `.forEach` method is define as an `Array` method (function on `Array` object) as the followings.
    ```js 
    function forEach(array, callback) {
        //To be implemented
    }

    function callback(curElement, currentIndex, array) {
        // Implemented by the caller of forEach 
    }
    ```
1. Define our own `forEach()` function 
    ```js 
    function forEach(array, callback) {
        for (let i = 0; i < array.length; i++) {
            callback(array[i], i, array);
        }
    }
    ```

### findIndex 
1. Objectives
    1. Describe and use the `.findIndex()` method
    1. Implement `.findIndex()` in practice
1. `.findIndex()` returns the index of the first element in the `Array` for which the callback returns a truthy value. `-1` is returned if the callback never returns a truthy value. `.find()`, `.findIndex()`, and `.filter()` use similar syntax to find either an element that fits the filter or the position of which in an `Array`. 
    ```js 
    function findIndex(array, callback) {
        // finIndex code to be implemented 
    }

    function callback(curElement, curIndex, array) {
        // callback implemented by caller of function
    }
    ```
1. A common mistake developers made in the callback function is forget to `return` the result from the callback function. We try to create the `.findIndex()` method as a function by our own. 
    ```js 
    function findIndex(arr, callback) {
        for (let i = 0; i < arr.length; i++) {
            if(callback(arr[i], i, arr)){
                return i;
            }
        }
        return -1; 
    }
    ```

### The Stack and The Heap
1. Objectives
    1. Describe what a "stack" is 
    1. Describe stack frame
    1. Describe the Heap 
1. "**stack**" is an ordered data structure, keeps track of function invocations, is part of the JavaScript runtime (which we don't access directly). 
    1. Whenever a function is invoked, the details of the invocation (execution context) are saved on the top of the stack (pushed to the top).
    1. Whenever a function returns, the information about the invocation is taken off the top of the stack (popped off of the top).
    1. In summary, stack is an ordered set of stack frames. Most recently invoked function is on the top of the stack. The bottom of the stack is the first function invoekd. The stack is processed from the top to bottom. 
1. "**Heap**" is an area in memory where the data is stored. 