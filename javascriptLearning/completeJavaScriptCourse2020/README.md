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

### Events and Event Handling: Rolling the Dice 
1. `Events` are notification that send to notify the code that something happened on the webpage. Events are tricked by user activities, such as clicking button, resizing browser, scrolling, and pressing a key. 
1. `Event listener` is a function that performs an action based on a certain event. The function will be added to an object and wait a specific event to happen.  
1. A `callback` function is called only when the event listener catches an event and gets trigerred. This function can be set in advance (but remember that it should not be called and passed as a function value). Besides, we can pass an anonymous function, which is only for one-time use for the event. 
1. Besides `querySelector()`, we can use `getElementById()` to select an element by its "id". In this case, though the scores in HTML is given, we can use JavaScript and DOM to reset the values to 0. 

### Updating scores and changing the active player 
1. In this section, we will use ternary operator `?`, so we can have one-line succinct code rather than using `IF/ELSE`, and use DOM to toggle HTML classes. 
1. We can use `document.querySelector('element').classList.toggle('class')` to turn on/off (add/remove) a class to an element. This method will add the class to element that doesn't have it or remove the class if the element has it. 

### Implementing "Hold" function and the DRY principle 
1. If a section of code can be used in different part or event, we can make it as a "**function**" to be called accordingly and reduce repetitive code. 
1. In this secion, we focus on changing the record of accumulated points of rolling dice and let the DOM selector edit HTML elements accordingly. 

### Creating a Game Initialization Function
1. The part is to create a function to initilize the game to the initial state, such as reseting scores and player state. 
1. By using DRY concept, we can have a section of code used in different part part of the program or be called according to events. 

### State Variables 
1. A state variable is to tell the user the condition of the system. In this case, we set this variable to prevent the game keeping going after one of the player wins. Therefore, we can use the state to know if the game is playing or not. 
1. In this game, the state control is relatively simple that there are only "playing" or "not playing" state for the game. Therefore, we can set up a single variable that holds `true` or `false` to indicate the state of the program. Besides, we can use this variable to be the indicator that whether some of the functions should be working by using `IF` statement. 



# Advanced JavaScript: Objects and Functions
### Everything is an Object: Inheritance and the Prototype Chain
1. In JavaScript there are "Primitives" and "Objects" 
    1. **Primitives** include `Numbers`, `Strings`, `Booleans`, `Undefined`, and `Null`.
    1. **Objects** include `Arrays`, `Functions`, `Objects`, `Dates`, and Wrappers for Numbers, Strings, Booleans. 
1. **Object-Oriented Programming**
    1. Objects interacting with one another through methods and properties. 
    1. Objects are used to store data, structure applications into modules and keeping code clean. 
1. In JavaScript we can use a "**constructor**" to create a type of objects (which is a "**class**" in other programming languages). By the constructor, we can create instances which inherits the properties from the "**class**". Besides, we can have a class inherits the properties from another as its prototype. 
1. **Prototype Chain**: When we try to access a property of method of an `Object`, JavaScript will firstly check on the `Object` itself. If there's no such property or method, it will access its "**prototype**" until it reaches `null`, which is the prototype of `Object` and returns that the `Object` has no property or method. 
1. Every JavaScript object has a "prototype property", which makes inheritance possible in JavaScript. 
1. The prototype property of an object is where we put methods and properties that we want other objects to inherit. 
1. The constructor's prototype property is **NOT** the prototype of the constructor itself, it's the prototype of **ALL** instances that are created through it. 

### Creating Objects: Function Constructors 
1. By convention, the variable name of constructor function starts with an uppercase. 
1. When we use keyword `new`, an empty `Object` is created and the constructor function is called. The properties with `this` are assigned to the `Object` and given to the variable. 
1. **Inheritance** - To extend the properties or method that aren't created in the constructor function, we can use `Constructor.prototype.method = function(){}` to add the method to all instances (descendants) which are created by the constructor function. 
    ```js 
    let Person = function(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    Person.prototype.calculateAge = function(){
        console.log(2020 - this.yearOfBirth); 
    }

    let john = new Person('John', 1990, 'teacher'); 
    let jane = new Person('Jane', 1969, 'designer');
    let mark = new Person('Mark', 1948, 'retired'); 

    john.calculateAge();
    jane.calculateAge();
    mark.calculateAge();
    ```

### The Prototype Chain in the Console
1. We can check with `__proto__` of an `Object` to check its constructor properties. 
1. `.hasOwnProperty()` method can be used to check if the `Object` has a property or method by the `Object` itself, or is from its constructor. 
1. key word `instanceof` can be used to check if an `Object` is an instance of another `Object`, such as `ObjectA instanceof ObjectB`. 

### Creating Objects: Object.create()
1. Besides using `new` keyword, we can use `Object.create()` which takes a function as argument to create an `Object` as using the function as prototype. 
    ```js 
    // Object.create
    let personProto = {
        calculateAge: function() {
            console.log(2020 - this.yearOfBirth); 
        },
    }

    let john = Object.create(personProto); 
    john.name = 'John'; 
    john.yearOfBirth = 1990;
    john.job = 'teacher';

    let jane = Object.create(personProto, {
        name: {value: 'Jane'},
        yearOfBirth: {value: 1969},
        job: { value: 'designer'},
    })
    ```

### Primitives vs Objects 
1. Variables assigned with "**primitive**" values keeps the values. However, variables assigned with "**objects**" only point to the location of the storage in memory rather than having the copy of the `Object`.
    ```js 
    // Primitives vs objects 

    // Primitives 
    let a = 23; 
    let b = a; 
    a = 46; 
    console.log(a); // 46 
    console.log(b); // 23

    // Objects 
    let obj1 = {
        name: 'John',
        age: 26,
    }

    let obj2 = obj1; 
    obj1.age = 30;
    console.log(obj1.age); // 30 
    console.log(obj2.age); // 30 

    // Functions
    function change(a, b) {
        a = 30;
        b.city = 'San Francisco';
    }

    change(age, obj); 
    console.log(age); 
    console.log(obj.city); 
    ```

### First Class Functions: Passing Functions as Arguments 
1. A function is an instance of the Object type. 
1. A function behaves like any other object. 
1. We can store functions in a variable. 
1. We can pass a function as an argument to another function. 
1. We can return a function from a function. 
1. "**callback**" functions are function that are passed as arguments to another function and only runs in the function scope. Note that we should be careful with the syntax that the callback function usually not execute for the result and be passed as argument. It'd be pass as function value and execute as a callback. 

### First Class Functions: Functions returning Functions
1. We can make a function that returns another function and assign the value to a variable. The variable can be called and passed arguments. 
1. If a function return a function as value, we can use another parenthesis to pass argument and to execute the returned function directly. 
    ```js     
    function interviewQuestion(job) {
        if (job === 'designer') {
            return function (name) {
                console.log(name + ', can you please explain what UX design is?')
            }
        } else if (job === 'teacher') {
            return function (name) {
                console.log('What subject do you teach, ' + name + '?');
            }
        } else {
            return function (name) {
                console.log('Hello ' + name + ', what do you do?')
            }
        }
    }

    let teacherQuestion = interviewQuestion('teacher'); 
    teacherQuestion('John'); 
    // What subject do you teach, John?
    let designerQuestion = interviewQuestion('designer'); 
    designerQuestion('John');
    // John, can you please explain what UX design is?
    interviewQuestion('teacher')('John');
    // What subject do you teach, John?
    ```

### Immediately invoked function expression (IIFE)
1. IIFEs are used to keep data privacy, as the variables in the function scope can't be reached from outside. 
    ```js 
    function game() {
        let score = Math.random() * 10; 
        console.log(score >= 5); 
    }
    game(); 
    (function(){
            let score = Math.random() * 10; 
            console.log(score >= 5);
    })(); 
    (function(goodLuck){
            let score = Math.random() * 10; 
            console.log(score >= 5 - goodLuck);
    })(5); 
    ```

### Closures 
1. Closure is an inner function has always access to the variables and parameters of its outer function, even after the outer function has returned. 
    ```js 
    function retirement(retirementAge) {
        let a = ' years left until retirement.';
        return function(yearOfBirth) {
            let age = 2020 - yearOfBirth;
            console.log((retirementAge - age) + a);
        }
    }

    let retirementUS = retirement(66); 
    let retirementGermany = retirement(65); 
    let retirementIceland = retirement(67); 

    retirementUS(1990);
    retirementGermany(1990);
    retirementIceland(1990);

    let score = 10;
    function display(){
        let score = 0;
        let addUp = function(){
        return score++;
        };
        return addUp;
    }

    let finalScore = display();
    console.log(finalScore()); // 0
    console.log(finalScore()); // 1
    console.log(score); // 10
    ```

### Bind, Call, and Apply 
1. With `.bind()`, `.call()`, and `.apply()` method can borrow methods from other `Objects` to work on an `Object`. 
    1. `.call(obj, arguments...)` takes an `Object` as argument and call the method immediately. 
    1. `.apply(obj, Arr[])` is similar to `.call()` that it calls the method immediately, but it takes arguments to pass to the method as `Array` 
    1. `.bind(obj, arguments...)` creates a function that we can keep as a function value and call it at other places. 
    ```js 
    let john = {
        name: 'John', 
        age: 26,
        job: 'teacher',
        presentation: function(style, timeOfDay) {
            if (style === 'formal') {
                console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.'); 
            } else if (style === 'friendly') {
                console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.')
            }
        }
    };

    let emily = {
        name: 'Emily', 
        age: 35, 
        job: 'designer',
    };

    john.presentation('formal', 'morning');

    john.presentation.call(emily, 'friendly', 'afternoon');
    john.presentation.apply(emily, ['friendly', 'afternoon']);
    let johnFriendly = john.presentation.bind(john, 'friendly');
    johnFriendly('morning'); 
    johnFriendly('night'); 

    let emilyFormal = john.presentation.bind(emily, 'formal'); 
    emilyFormal('afternoon'); 
    ```
1. We can use `.bind()` method to create a new function with a preset argument. For example, if we have a function `fn(arg1, arg2)` that takes 2 arguments, we can use `fn.bind(this, preset)` to create another function that takes the "**preset**" argument. Thereofre, the new function takes only `arg2`. Note that the keyword `this` here represents the function object itself. 
    ```js 
    let years = [1990, 1965, 1937, 2005, 1998]; 

    function arrayCalc(arr, fn) {
        let arrRes = [];
        for (let i = 0; i < arr.length; i++) {
            arrRes.push(fn(arr[i]));
        }
        return arrRes;
    }

    function calculateAge(el) {
        return 2020 - el;
    }

    function isFullAge(limit, el) {
        return el >= limit;
    }

    let ages = arrayCalc(years, calculateAge);

    let fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

    console.log(ages);
    console.log(fullJapan);
    ```

### Coding Challenge 7 
1. Build a function constructor called Question to describe a question. A question should include: 
    1. question itself
    1. the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
    1. correct answer (I would use a number for this)
1. Create a couple of questions using the constructor 
1. Store them all inside an array 
1. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the **Question** objects for this task). 
1. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4. 
1. Check if the answer is correct and print to the console whether the answer is correct or not (Hint: wirte another method for this). 
1. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with other programmers code (Hint: we learned a special technique to do exactly that). 


**Expert Level** 

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)
1. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8. 
1. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to just do this)
1. Display the score in the console. Use yet another method for this. 

### Solutions - Basics
1. Note that data collect from `prompt()` method is a `String`. We can use plus sign `+`, `Number()`, or `parseInt()` to turn a `String` value into a `Number`. 
1. We use "**IIFE**" to wrap the values and variables into a function, so it won't affect to the variables outside the scope, and can't be accessed as well. 
    ```js 
    (function() {
        function Question(question, answers, correct) {
            this.question = question; 
            this.answers = answers; 
            this.correct = correct; 
        }

        Question.prototype.displayQuestion = function() {
            console.log(this.question);

            for (var i = 0; i < this.answers.length; i++) {
                console.log(i + ': ' + this.answers[i]); 
            }
        }

        Question.prototype.checkAnswer = function(ans) {
            if (ans === this.correct) {
                console.log('Correct answer!');
            } else {
                console.log('Wrong answer. Try again:)')
            }
        }

        let q1 = new Question('Is JavaScript the coolest programming language in the world?', ['Yes', 'No'], 0);

        let q2 = new Question('What is the name of this course\'s teacher?', ['John', 'Michael', 'Jonas'], 2);

        let q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tediuous'], 2); 

        let questions = [q1, q2, q3]; 

        let n = Math.floor(Math.random() * questions.length); 

        questions[n].displayQuestion(); 

        let answer = +prompt('Please select the correct answer.');

        questions[n].checkAnswer(answer);
    })();
    ``` 

### Solutions - Expert
1. We use a closure here to record the score if the user give a correct answer. The variable `sc` can't be accessed not modified from the outside. Therefore, we can ensure the score is correct and can't be "**hacked**". 
    ```js 
    function score() {
        let sc = 0;
        return function (correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }
    ```