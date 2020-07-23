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