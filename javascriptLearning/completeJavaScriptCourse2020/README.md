# Intro and course structure 
1. JavaScript Basics 
1. How JavaScript works behind the Scenes 
1. JavaScript in the Browser: DOM Manipulation and Events 
1. Advanced JavaScript: Objects and Functions
1. Putting it all together: The Budget App Project 
1. Next Generation JavaScript: Into to ES6/ES2015 
1. Asynchronous JavaScript: Promises, Async/Await and AJAX 
1. Modern JavaScript: Using ES6, NPM, Babel and Webpack (ES7 and ES8)

Note: I started learning the course since 2020/07/04. Some of the basic parts are skipped because I've learnt from other courses and modules. These skipped sections would be checked and reviewed in the future. 
1. JavaScript Basics 
1. How JavaScript works behind the Scenes 

All the files are in "complete-javascript-course-master" directory which is copied from [complete-javascript-course](https://github.com/jonasschmedtmann/complete-javascript-course)



# JavaScript in the Browser: DOM Manipulation and Events 
1. DOM stands for Document Object Model and is used to connect webpages and scripts like JavaScript. For each HTML box, there's an object in the DOM that we can access and interact with. 
1. We will learning the materials and build a "pigGame" proejct by learning "**DOM**". 
1. HTML and CSS of the game is not the main part of learning. 

GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
<img src="./pigGame/pigGame.png">



### First DOM Access and Manipulation
1. We build up the variables to use in the initial stage. 
1. Use `Math.random()` to create a random number from 0 to 1 (not including 1) and use `.floor()` to chop off the decimals. For the dice points, we can use `Math.floor(Math.random()*6) + 1` to get a random number from 1 to 6. 
1. DOM starts with `document` object in JavaScript and has various methods to work on the object. One of the usual selector is `querySelector()` as the method takes syntax extactly the same as CSS to select a single HTML element. 
1. After selecting an element, we can use `textContent` method to change the text value of the element or `innerHTML` to change the HTML value. The main difference between how the methods affect to the HTML elements on the page. These selectors and methods allow us to check values of HTML elements or change the value that renders on the page. 
1. We can use the selector change CSS properties as well. Give `.style` to the selector object after selecting an object and give the property name. For example, we can change an element's `display` property as `none` to hide the element from the page. `document.querySelector('element').style.dispaly = 'none'`. 