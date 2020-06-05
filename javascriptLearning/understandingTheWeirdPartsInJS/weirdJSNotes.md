Note: 
1. The lecture uses "brackets.io" editor for the course which can render the front-end files in browsers direclty. This can be done in VS Code with extension "Live Server" as well. 

# **Execution contexts and Lexical Environment** 
1. "**Syntax parser**" is a program that reads your code and determines what it does and if its grammar is valid. It means that it will check the pattern and layout. For example, after a function declaration, there should be a pair of parenthesis and code block for the parameters and function body. If the parenthesis and braces don't close correctly, the program will alert and return an error. If everyting is correct, it will translate the code to other code that can give instructions to the computer. 
1. "**Lexical environment**" is where something sits physically in the code we write. This is considered similar to the scope of variables as that when the code is executed, the program will check the surrounding of the code to understand how should the code interact with the other parts in the code. 
1. "**Execution contents**" is a wrapper to help manage the code that is running. There are lots of lexical environments. Which one is currently running is managed via execution contexts. It can contain things beyond what you've written in the code. 
1. **NAME/VALUE Pair** in Objects is a name which maps to a unique value. The name may be defined more than once, but only can have one value in any given context. An `Object` is a collection of name value pairs. A value of a property in an object can be another object. 

**The global environment and the global object** 
1. Global execution context is the base execution context, in which all the things here are accessible in the code. Besides, it creates "**Global Object**" and "**this**" automatically by the JavaScript engine. 
1. In the browser, the Global Object is `window` which is the browser that opens the HTML file. If we type keyword `this` it return the global object `window` as well. Note that there's always a global object when running JavaScript, but it varies accoding to the environment such as Chrome browser or Node.js. 
1. Usually when we mention about `global`, it mean the variable or context **IS NOT** inside a function. 
1. If we create any variable or function in a global environment, it becomes a property of the global ojbect, which we can check it by printing out the global object and check its properties. For example, in Google Chrome browser. 
    ``` javascript
    var a = "Hello World!"; 
    a //"Hello World!"
    window.a //"Hello World!"
    this.a //"Hello World!"
    ```
1. When JavaScript code is executed, an execution context is created. If we write and run code in global environment, there are 4 components, Global Object, "this" (which refers to the global object), outer environment (which is `null` as global environment is the out most), and the written JavaScript code. 
1. JavaScript has a very special feature that though functions and variables are declared after they are called in the code, the function can still run, and variables are just `undefined` rather than having an error (But if there's no variable declared, it will return an "Uncaught ReferenceError" that says the variable is not defined. 
    ```javascript
    console.log(a); 
    b(); 
    var a = "Hello World!"; 
    function b(){
        console.log("b is called!"); 
    }
    ```
1. Subjected to the phenomenon, We can learn from how JavaScript creates the execution context as it is created in 2 phases. Before executing the code, JavaScript engine will check all the functions and variables in the code and allocate working memories of the computer accordingly. Variables and functions are stored in the memory before the code is executed. Therefore, functions can be called before they are decalred in the code. The phenomenon is called "**Hoisting**". 
1. However, variables are just kept and initially set an `undefined` value as placeholder before they are declared in the code. 

**undefined value**
1. "**undefined**" is a special value rather not setting a value to a variable which is "**not defined**" and an error. When the code starts JavaScript will check all variables and functions in the code and assign them to working memories of the computer accordingly. If a variable is not declared, it will return an error and cause an error when it is called in the 2nd stage. However, all variable (regardless of having assigned value) will be assigned "undefined" in this "creation phase". When programming, we should avoid setting a variable as "undefined" value, as it will be hard to check if a variable is undefined because the code set it, or if there's anything wrong with flow. 

**The execution context: Code execution** 
1. The 2nd phase is the "**execution phase**". In this stage, the global object, "**this**", and outer environment are all set and body code will be executed, which runs through the code line by line from top to bottom. 
1. "**Single threaded**" means one command at a time. Though there may have many other commands and functions are running in the browser, JavaScript behaves in a single thread manner. "**Synchronous**" means one at a time. 
    ```javascript
    function b(){}
    function a(){
        b();
    }
    a(); 
    ```
1. "**Invocation**" means to run a function. In JavaScript, functions are invoked (called) with function name and parenthesis. When a code runs, a "**global execution context**" will be created in the first phase as creation phase. The code will be executed line by line from top to bottom. In the example above, when the code is executed to function invocation at "**a()**", a new execution context is created and stored in the execution stack above the "**global execution context**". 
Every time a function is invoked, an new execution context is created and run the code inside the function in the scope and context. If there's another function is called in the execution context (function b in this case), the current one will be stopped, and JavaScript will create another execution context. As there's no other invocation in `function b`, the stack will be cleared from the top to the last one, which is the global execution context created as the first execution stack. 
1. "**variable environment**" is where the variables live. Every time a function is invoked, the variables declared in the function will only stay in such execution context which can't be leaked out. If there's another function invoked in the function, such variable can be passed and be manipulated in the next execution context created by the invoked function. This is concept is related to the scope of code execution. Every execution context has a reference to outer environment. The function code shows that the outer environment of both function a and b is the global execution context (If function b is declared in function a, its outer environment will be in the execution context of function a. The variable will be the one declared in function a).
    ```javascript
    function b(){console.log(myVar)}
    function a(){var myVar = 2;b();}
    var myVar = 1; 
    a() 
    //1
    ```
1. When executing code, JavaScript will check the variable in the current execution context, if the variable is not found, it will refer to the outer environment. In the example, function b is at the same level as function a which is the global scope. When a execution context refers a variable from the outer environment, it may pass one or several execution stack and link to the correct execution context to get the variable, such behavior is called a "**scope chain**". Besides, if function b is not declared in the global scope, the function will not be allocated in the creation phase. Therefore, if we call function b, JavaScript will return an error as the b is not defined. The other way is to think that when and where the code is created. If a function is nested in another function, the function will only be created when the outer function is called.
1. "**Scope**" is where a variable is available in the code. In ES6, the keyword for variable declaration is updated from "**var**" to "**let**". Keyword "**let**" is different that it allows "**block scoping**" (or <ins>**block scope**</ins>). In this case, if we try to call the variable before it is declared by `let`. Though it is in the same execution context, JavaScript will return an error for the issue (Note that the variable is stored memory as declared by `var`). On the other hand, if we use `var` to declare the variable, the variable is assigned `undefined` in the creation phase. 
1. If we use `let` to declare a variable in `for` loop the variable is actually different as it will be created and destroyed everytime a loop iterates. This the most essential distinction between `let` and `var` that `let` and `const` is scoped by <ins>**code block**</ins> which is the <ins>**curly braces**</ins> "{}", while `var` only scope the variable in a function. Therefore, variable declared by `var` will be hoisted and "**leak out**" the scope which can cause problems such as overriding other global variables or creating undesirable variables in the global scope. 
1. **Asynchronous** means more than one at a time. Besides <ins>**execution stack**</ins>, there's another <ins>**event stack**</ins>. In a browser, there's not only the JavaScript engine but also other engines such as rendering engine or send a HTTP request. These components have hooks to link to each other, so as they can work asynchronously. However, the JavaScript engine itself still works synchronously. 
1. When the code runs, it will run through the JavaScript synchronously, while all events, such as "click" by a mouse will be held in the event queue. The events that store in the "**event queue**" will be executed when the execution stack is empty. Note that JavaScript will look into the "event queue" periodically to check if there's an event to be fulfilled. If an event is aligned with a function, the function will be called and create an execution context accordingly. In the code below, as `waitThreeSeconds` function is executed first before the last `console.log()` executes. The program will wait for 3 seconds and print out "finished function", "finished execution", and "click event!" if the user click in the browser during the code executes. 
    ```javascript
    function waitThreeSeconds(){
        var ms = 3000 + new Date().getTime(); 
        while (new Date() < ms){}
        console.log("finished function"); 
    }

    function clickHandler(){
        console.log("click event!"); 
    }

    document.addEventListener("click", clickHandler); 

    waitThreeSeconds();
    console.log("finished execution"); 
    ```
1. **Asynchronous** callbacks are possible in JavaScript, but the part is happening outside the JavaScript engine. 

# **Types and Operators**
1. **Dynamic typing** means that we don't tell JavaScript engine waht type of data a variable holds. It fugres the data type out while the code is running. Therefore, a variable can hold different types of values at different times when running the code. 
    ```javascript
    Static Typing 
    bool isNew = "hello"; //error 

    Dynamic Typing 
    var isNew = true; //no error
    isNew = 'hello'; 
    isNew = 1;
    ```
1. In contrast, **Static typing**, as in other languages such as **Java** and **C#**, is that the type of the data which is held by a variable. 
1. **Primitive type** means a type of data that represents **_a single value_**, which means the data **IS NOT** an object. There are 6 types in JavaScript. 
    1. `undefined` represents "lack of existence", and we shouldn't set a variable to this as it is the default value of all variables in JavaScript. 
    1. `null` represents "lack of existence" which we can use to set a variable to empty. 
    1. `boolean` is either `true` or `false` 
    1. `Number` is floating point number. Unlike other programming languages, there's only one "number" type which can be make math weird. 
    1. `String` a squence of characters (both single and double quotes can be used). 
    1. `symbol` is a new type introduced in ES6. 
1. **operators** are special functions that are syntactically (written) differently. Generally, operators take 2 parameters and return one result. For example, in code `3 + 4`, plus sign "+" is the operator which is actually a function call with "**infix notation**" that it takes 2 values aside it as its arguments. This infix notation makes plus function a shorthand which is similar to call a function that takes arguments and add them together. 
1. **Operator precendence** means which operator function gets called first. Functions are called in order of precedence. 
1. **Associativity** means what order that an operator function get called in. It may be left-to-right (left associativity) or right-to-left (right associativity). 
1. If there are some operators on a line of code, "**operator precendence**" will give the order that which one to execute first. However, if some of them have the same precendence, those operators will be executed according to associativity of the programming language. We can check [operator precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) at MDN. For example, in the code below, the equal sign "=" which is "Assignment" has **precedence** at <ins>**3**</ins> and **associativity** is from "**right-to-left**". Therefore, all variables have a value 4. 
    ```javascript
    var a = 2, b = 3, c = 4; 
    a = b = c; 
    console.log(a);
    console.log(b);
    console.log(c);
    //4
    //4
    //4
    ```
1. **Coercion** is to convert a value from one type to another. This happens quite often in JavaScript because the language is dynamically typed. In computer memory, a number in string type is very different from that in number type. In the following example, number "1" is coerced into a String type value and concatenate with "2" as a string. 
    ```javascript
    var a = 1 + "2"; 
    console.log(a) //12; 
    ```
1. When we use comparison operators, the associativity is from left-to-right if all the operators have the same precedence. Therefore from the code below we can see the first line prints a `true`, though it doesn't work exactly as human thinks. The first comparison returns a `true` which can be converted to 1, while 1 is less than 3, so the expression retruns `true`. The 2nd line returns a `false` for `3 < 2`. However, when a boolean `false` compares to "1", it becomes `true` as due to coercion, `false` is turned into 0, while `true` is 1. 
    ```
    console.log(1 < 2 < 3); //true; 
    console.log(true < 3); //true; 
    console.log(3 < 2 < 1); //true;
    console.log(false < 1); //true; 
    ```
1. We can use `Number()` function to turn a value into a number according to JavaScript design. Note that if we turn `undefined` into a number, the function returns `NaN`. 
    ```javascript
    Number(false) //0
    Number(true) //1
    Number(undefined) //NaN 
    Number(null) //0 
    ```
1. We can use double equal signs "==" which stands for "**Equality**" to check if one value is eqaul to the other. This expression will return a boolean value `true` or `false`. However, due to <ins>**coercion**</ins> the value would be turn into another type to be compared. 
    ```javascript
    3 == "3" //true 
    null == 0; //false 
    undefined == 0; //false
    null < 1; //true 
    "" == 0 //true 
1. In JavaScript, there's a <ins>strict equality operator</ins> "**===**" which is triple equal signs. This operator won't coerce type of value to the other to try to make the expression working. Therefore, when we are going to check equality as the condition for IF statement, it's suggested to use triple equals "===" as strict equality, as to use "<ins>**strict inequality**</ins>" with "!==" to check condition. 
    ```javascript
    3 === 3 //true 
    "3" === "3" //true 
    3 === "3" //false 
    ```
1. By the features in JavaScript, if a variable is not `null`, `undefined`, or `""` (empty string), its boolean type will be `true`. Therefore, we can use this to check if a data is retrieved and assigned correctly with a truthy value. However, note that if the variable has number `0` as value, the condition in IF statement will return false. Thus, we can have an `or` expression to check if the variable is strictly equal to `0`. (Note that if the zero is a string, it will be a truthy value, so the equality here must be triple equals. Besides, `||` or sign has a lower precedence than triple equal, so that the equality condition will be checked first.) This is an example to demonstrate that why **coercion** feature is useful in JavaScript. 
    ```javascript
    var a; //set variable to grasp data from else where. 
    if (a){console.log("'a' has a truthy value")} //Nothing happens
    a = 1;
    if (a || a === 0){console.log("'a' has a truthy value")}
    ```
1. When using `||` or operator it will return the first value, left-to-right, that it truthy. If both values are falsy, it will return a `false`. It will **coerce** the value and check if it is `true` or `false`. Thus, We can set a default value for a function, if the argument is not given correctly. Note that `null`, `undefined`, `NaN`, and `""` are all falsy values. Though we can use `IF` statement to check the arugment value as well, this method is neat and simple. 
    ```javascript
    function greet(name){
        name = name || "<Your name here>"; 
        console.log("Hi " + name);
    }
    greet(); //Hi Your name
    ```
1. When we refer JavaScript files in HTML by `<src>` tag, it's actually stacking up the code from each file as in the same file in order from top to bottom. In the following code, the JavaScript files stack from `lib1.js`, `lib2.js`, to `app.js`. If we have a variable `libraryName` in both lib1 and lib2 JS file and print it out in `app.js`, the result will be the one in `lib2.js` as the variable. However, note that if a variable is declared by keyword `let`, we will get an error if we have the same variable name declared by keyword `var` in the same file. If we use both `let` or `var` to declare the same variable name, the last one will be applied as the final result. Therefore, as to order and import the JS code correctly we can have another line to check if a variable has been declared in the other imported library/framework. In a browser, the global object which takes all variables is `window` object. Thus, we can check if the variable is declared and assigned without overriding it with a new value
    ```javascript
    <script src="lib1.js"></script>
    <script src="lib2.js"></script>
    <script src="app.js"></script>

    //Check if variable "libraryName" has been declared in the JS file imported before this file. 
    window.libraryName = window.libraryName || "Lib 2" 
    ```

# Objects and Functinos 
1. In other programming languages, `Objects` and `Functions` are very different entities. In JavaScript, however, they are very close related to each other. An `Object` is a collection of values. There are 3 main types of properties. The object has a reference of where it is stored on memory. Unlike values in array that each element of the array is stored in a chunk of memory, properties of an object stores separately in the memory and can be called by reference its property name as calling a variable. 
    1. <ins>**Primitive**</ins> properties are those having primitive data type as values, such as `String` and `Boolean`.
    1. <ins>**Object**</ins> properties are properties that have other `child` objects (or array, as arraies are also objects) as values. 
    1. <ins>**Function**</ins> properties are those values that are functions. Note that in this condition, these functions are the `methods` of the object. 
1. "**Object literal syntax** is that we can use "Square brackets notation (or dot notation) as the operator which has very high precedence. Besides, associativity of both notations are left-to-right. If we have a "**list**" which is a data structure that has multiple layers of objects in it, we can use "dot notation" to get into each layer as a chain by its property names. It's suggested to use "**dot notation**" if the data is static and use "**square brackets notation**" for dynamic property names or other purpose. 
    ```javascript
    var person = new Object(); 
    person["firstname"] = "Allen"; 
    person["lastname"] = "Lin"; 

    person.address = new Object(); 
    person.address.street = "Sukhumvit 26"; 
    person.address.city = "Bangkok"; 
    person.address.state = "NY"; 
    ```
1. We can use shorthands to create an object in JavaScript rather than assign properties in the object line by line. Besides, a funciton can take a value such as an object as its parameter(s), the argument can be the data without having it assigned to a variable in advance. This feature is due ot the dynamic type of JavaScript that the language knows (or try to guess) what is the type of value that the user creats or tries to pass in. 
    ```javascript
    var person = {
        firstname: "Allen", 
        lastname: "Lin", 
        address: {
            street: "Sukhumvit", 
            city: "Bangkok, 
            state: "Bangkok"
        }
    }

    var person = new Object(); 
    person.firstname = "Allen"; 
    person.lastname = "Lin";
    person.address = new Object(); 
    person.address.street = "Sukhumvit"; 
    person.address.city = "Bangkok"; 
    person.address.state = "Bangkok"; 

    function greet(person) {
        console.log("Hi " + person.firstname);
    }

    greet(person);
    greet({firstname: "Mai", lastname: "Ko"});
    ```
1. **Namespace** is a <ins>**container**</ins> for variables and functions. It is typically used to keep variables and functions with the same name separate. For example, we can have objects as containers to hold variables in the same name (which is the property of the object and so as functions to be its values). We then can keep the variable in the same name without overwriting each other. Besides, to create an inner layer of property, we need to ensure the middle properties are object type values, or we must declare the type of property first before assigning new value to it. 
    ``` javascript
    var greet = "Hello!"; 
    var greet = "Sawadi"; 
    console.log(greet); //Sawadi
    var english = {}; 
    var thai = {};

    english.greet = "Hello"; 
    thai.greet = "Sawadi"; 

    english.basics.greet = "Hello"; //Error 
    ``` 
### JSON and Objects 
1. `JSON` stands for JavaScript Object Notation which is a `String` type value, which name is given as it is inspired by object literal syntax. In the past, people use `XML` type data to send the information which is similar to HTML structures and have multiple opening and closings tags. However, at the time the bandwith and internet speed wasn't fast. The additional characters consumes much more bandwith and memories for programs and computers to deal with. Therefore, people found `JSON` is more simple and succinct to have the data transfering job done. 
1. In `JSON`, the properties are quoted with double quotes. `JSON` is technically a subset of object literal syntax. Therefore, <ins>**all JSON valid value is also valid Object literal syntax**</ins>. 1. We can use `JSON.stringify()` function to turn an Object value into a JSON string and use `JSON.parse()` to turn a JSON string into a JavaScript Object value.  
1. **`JSON` and `Object literal` are 2 different types of value**, but they can use functions to transfer into each other. (Object literal is the regular JavaScript object syntax.)

### Functions are objects 
1. **First class function** means that everything we can do with other types of value can be done with functions. It means that we can assign a function to a variable, pass them as values or arguments, or create them as an one-off or anonymous function. 
1. A `Function` is a special type of `Object`. It can take primitive types of values as value of a property, an object, another function. Besides, a function can be anonymous that it can be called only in certain conditions. The code we put in the function is also part of the function object property that is "<ins>**invocable**</ins>" which can be invoked with parenthesis "**()**". 
    ```javascript
    //a function is a special property 
    function greet() {
        console.log("hi"); 
    }

    greet.language = "english"; 
    console.log(greet.language); //english 
    ```

### Function statements and function expressions 
1. `Expression` is a unit of code that results in a value. It doesn't have to save to a variable. An `expression` returns a value (in any type). A `statement` is a code to mainpulate something in the code block or its scope such as an `IF` statement. A function statement is a regular function declaration that it doesn't execute the code, while it is created and stored in the execution context in the "**creation phase**". The function then can be called immediately right after JavaScript gets into "**execution phase**".  
    ```javascript
    //function statement
    greet() //function declared with function statement can be called  
    function greet() {
        console.log("hi"); 
    }

    //function expression can be called only after the variable is declared with value.     
    var anonymousGreet = function (){
        console.log("hi"); 
    }
    anonymousGreet(); 
    ```
1. The difference between `function statement` and `function expression` is that in the creation phase, when the engine see `function` as the keyword, the function will be hoisted that the function can be called immediately though it is called at the end of the code. While for function expression, it is assigned to a variable which is assigned `undefined` in the creation phase. Thus, if we call the function before it is declared, we will get an error as the `undefined` value can't be called as a function. Besides, we can pass a function as variable. To call the passed function we can have the paraments with parenthesis "()" to invoke it. This is a function expression and can be done due to "first class function" 
    ```javascript
    function log(a) {
        a();
    }

    log(function(){
        console.log("Hi");
    })
    ```

### By value and by reference 
1. When we set a value (primitive types) to a variable `a` and assign the variable `a` to another variable `b`. The variable `b` gets a copy of the value of variable `a`. However, when the value is an `Object` or other mutable values (such as `Array` but note that `Array` is actually an `Object` in JavaScript), both variable `c` and `d` are having reference and pointing to the same location in the memeory. Therefore, when we change either of the variable, the other variable will be changed as they are pointing to the same value in the memeory. 
1. <ins>**Mutate**</ins> means to change something. If an entity is "**immutable**", it means the entity can't be changed. In the case below, for variable `c` and `d`, they are alias to each other. **Equal operator** "=" sets up new memory space (new address). Therefore, if we assign a new `Object` to an variable, JavaScript detects that the variable IS NOT referncing to one another. A new `Object` is created and variable `c` and `d` are not pointing to the same value in the memory. 
1. In JavaScript, there's no option to choose a variable can be set by value or by reference. All `primitive` values are set by value, while all `Objects` are set by reference only if there's an `object literal` or keyword `new` to declare that the `Object` is a new one.
    ```javascript
    //by value (primitives) 
    var a = 3; 
    var b; 

    b = a; 
    a = 2 
    console.log(a);
    console.log(b);

    //by reference (all objects including functions)
    var c = { greeting: "hi" }; 
    var d; 

    d = c 
    c.greeting = "Hello"; //mutate 

    console.log(c); 
    console.log(d); 

    //by reference (even as parameters) 
    function changeGreeting(obj){
        obj.greeting = "Hola"; //mutate
    }
    changeGreeting(d); 
    console.log(c); 
    console.log(d); 

    //equals operator sets up new memory space (new address)
    c = {greeting: "Howdy"}; 
    console.log(c);
    console.log(d);
    ```
### Objects, functions, and "this" 
1. Everytime a function is invoked, an execution context is created. When calling (invoking) a funciton, there are 3 components created in the creation phase, "**variable environment**", "**outer environment**", and "**this**'. If we call a variable which doesn't exist in the variable environment, it will keep refering to outer environment until it reaches global environment. Besides, keyword `this` is also created in the execution context. The keyword `this` points to an object which depending on where and how the function is called. 
    ```javascript
    function a(){
        console.log(this); 
        this.newvariable = "hello"; 
    }
    var b = function() {
        console.log(this);
    }
    a();
    console.log(newvariable);
    b(); 
    ```
1. Note that we can understand that a variable is a property of the "<ins>**global object**</ins>". 
1. Keyword `this` points to the object which carries the keyword. If it's called in a regular function, it refers outer environment which is the `global object` of the environment, as the function is a `method` of the `global object`. However, if it's called in a `method` (which is a function value of an `Object`), it will refer to the `Object` which carries the `method`. 
    ```javascript
    //"this" in the function which in a method refers to the global object 
    var c = {
        name: "The c object", 
        log: function(){
            console.log(this); //this refers to object variable c
            var setname = function (newname) {
                this.name = newname; 
            }
            setname("Updated again! The c object");
            console.log(this); //this refers to the global object 
        }
    }

    c.log(); 
    ```
1. <ins>**Set a variable that refers to the correct object**</ins>. However, if we have another inner function in the method and call the inner function, the keyword `this` will refer to the `global Object` which is not the object that carries the method and function. The solution is to set an variable in the method function body a variable that is equal to `this` which is the "**object variable c**". Therefore, we can create a variable (`self` in this case) in the method code body and assign `this` to make it point to the whole `object variable "c"`. We then change all the `this` keyword in the code to the newly created variable, so that the the funcitons will point to the desirable object. 
    ```javascript
    var c = {
        name: "The c object", 
        log: function(){
            var self = this; //this variable self is pointing to parent object variable c 
            console.log(this); //this refers to object variable c
            var setname = function (newname) {
                self.name = newname; 
            }
            setname("Updated again! The c object");
            console.log(self); //this refers to the global object 
        }
    }

    c.log(); 
    ```
### Arrays 
1. We can create an `Array` by "Array literal" which is similar to an `Object` but a pair of square brackets "**[]**" or `new Array()`. It's a collection of anything. All elements in an `Array` are indexed and can be in any type, such as `pimitive types`, `Objects`, `Functions`, and `Array`. If a function (which is anonymous) is an element in an `Array`, we can use index notation to call the function with parenthesis and give arguments. 
    ```javascript
    var arr = [ 
        1, 
        false, 
        {
            name: "Allen", 
            address: "Sukhumvit 26"
        }, 
        function(name){
            var greeting = "Hello "; 
            console.log(greeting + name); 
        },
        "hello"
    ]; 
    console.log(arr); 
    arr[3](arr[2].name);
    ```
### Keyword "arguments", triple dots (spread) "...", and its alias paremeters of functions 
1. **Arguments** are the parameters you pass to a function. When calling a function, the execution context is set up during the creation phase, and `arguments` are also set up which carry all the values and parameters. JavaScript is very special that though a function has parameters to pass in, if we don't pass any argument to the function, the argument will be like an empty variable that just a placeholder in the memory and assign with `undefined` in the creation phase (note that in other languages, such as Python, this will cause an error if a function takes argument(s) but we pass nothing to it.). 
1. By this feature, we can set value to the arguments by default, or skip part of or all the arguments of the function. 
1. In JavaScript, a keyword `arguments` is reserved to use in functions that it returns an "**array-like**" list of arguments that passed into the function. We can use this to perform a detector to check if there no or insufficient arguments are given to the function with `.length` method. Besides, we can use `index notation` to call an element from the argument list. 
1. After ES6, a new feature "**triple dots**" `...` is introduced to take all the extra arguments given to the function in a list. In the example below, variable `other` is an array that takes all the given arguments after `language`. Besides, `argument` and variable `other` is different array that `other` IS NOT nested in `arguments`. As we pass 6 arguments in the example, `arguments` is a list which `length` is 6.  

```javascript
function greet(firstname, lastname, language, ...other) {
    firstname = firstname || "[Put your name in the argumet!]"
    if (arguments.length === 0) return "This function takes 3 arguments!"
    console.log(firstname); 
    console.log(lastname); 
    console.log(language); 
    console.log(arguments); 
    console.log("arg 0: " + arguments[0]);
    console.log("------------"); 
}

greet("John", "Oliver", "en", "Birmingham", "Funny", "LW2N");
```

1. **Function overloading** is that we can pass a fucntion into another function with its parameters. For example, we have a function which takes 3 parameters as for generic purpose, and we set this function in the other function to give default values similar to using OR `||` when argument(s) is not given. Therefore, we can build up function based on other functions for different purpose. 
    ```javascript
    function greet(firstname, lastname, language) {
        language = language || "en"; 
        if (language == "en") {
            console.log("Hello " + firstname + ' ' + lastname); 
        }
        if (language == 'es') {
            console.log("Hola " + firstname + ' ' + lastname); 
        }
    }
    function greetEnglish(firstname, lastname) {
        greet(firstname, lastname, "en"); 
    }
    function greetSpanish(firstname, lastname) {
        greet(firstname, lastname, 'es'); 
    }
    greetEnglish("Allen", "Lin");
    greetSpanish("Steve", "Jobs");
    ``` 
### Syntax parser 
1. JavaScript engine recognizes the language syntax that if there's a line break (a "return" character which is "\n" that is usually invisible), it will add a semi-column automatically to follow the syntax. Therefore, when coding, we should always put a semi-column at the end of the line. Otherwise, it will be hard to review and debug when there's an issue or error. 
1. This is the reason why when declaring a function, the first curly brace should be on the same line as the declaration. If it's not on the same line, JavaScript will automatically add a semi-column that breaks the code. In the example below, we put the returned `Object` value in the line between keyword `return`, the function returns `undefined` as after `return`, a semi-column is added and all the code after `return` is ignored. 
    ```javascript
    function getPerson(){
    return 
    {
        firstname: "Tony"
        }
    }
    console.log(getPerson()); //undefined 
    ```
### Whitespace 
1. "**Whitespaces**" are invisible characters that create literal "space" in the written code, including `carriage returns`, `tabs`, and `spaces`. 
1. These characters don't affect to code execution and somehow useful as we can insert comments in lines to explain what the code is about. This can be helpful when making large project in a large line of code. 

### Immediately invoked function expressions (<ins>**IIFEs**</ins>) and <ins>**safe code**</ins>
1. We can invoke a function immediately after it is created by a function expression which is assigned to a variable. In this case, variable `greeting` holds a `String` value "Hello Allen" rather than a function. The argument is passed right after the function expression. 
    ``` javascript
    var greeting =  function(name){
        return "Hello " + name;
    }("Allen");
    ``` 
1. In JavaScript we can just put a value in lines of code without doing anything such as returning or printing. The value will just be there which has no pointer as variable to refer. However, it is not avaiable if we put keyword `function` directly in the line because the syntax parser will treat it as function declaration which force every function to have a name to be a function statement. The way to avoid it is to trick JavaScript by giving any other character, so that the first thing when JavaScript read the line, it doesn't find keyword `function`. We can use parenthesis `()` to wrap the function up for the trick. 
1. Note that "**parenthesis()**" are mainly used for "**expression**" that returns a value and JavaScript notes this feature as well. Therefore, JavaScipt will treat a funciton in the parenthesis as an expression. Note that in the example, if we don't put semi-column after variable declaration, the following function expression will be passed as an argument to `String` value "Allen" which will cause an error. This also shows that we should always put a semi-column to allow syntax parser works correctly. 
    ``` javascript
    var name = "Allen"; 
    (function (name) {
        console.log("Hi " + name); 
    }(name));
    ``` 
1. This feature can prevent variable collision when a HTML file refers multiple JS files. The variables and function only executes at its own scope without affect the global environment. This is often used in JavaScript libraries. Thus, we can create "**Safe code**" to prevent from colliding to other code in the program. 
1.  On the other hand, we still can create a variable in the global environment by referring to `global Object` in the function expression. For example, in browser environment, we can refer to `windwo` object and createa variable. 
    ```javascript
    (function(global, name){
        var greeting = "Hello"; 
        global.greeting = greeting; 
        console.log(greeting + " " + name); 
    }(window, "Allen")); 
    console.log(greeting);
    ```

### **Closures** 
Note that the issue here is the scopeing of variable declaration by keyword `var` and `let` 
1. "**Closures**" are simply a feature of JavaScript programming language that it makes functions have access to the variables that it is supposed to have access to. This property is that when we have a function return another function as a returned value, the inner returned value still can access the variables that are in the outer function which returns the function. In summary, all functions in JavaScript are closures. 
    ```javascript
    function greet(whattosay){
        let text = "How are you?"; 
        return function(name) {
            console.log(whattosay + " " + name  + ". " + text);
        }
    }
    var sayHi = greet("Hi"); 
    sayHi("Tony"); //Hi Tony. How are you?
    ```
1. In the following example, the function is trying to catch the counter `i` in an ascending order. However, in the variable assignment, we assign 3 elements to `arr` when calling the funciton `buildFuctions`. We then assign this array to variable `fs` which is an array that has 3 funcitons as elements. 
    1. When we run the code, `Global execution context` is the **1st** item which has function `buildFunctions` and `fs` as the <ins>**variable declaration**</ins> with a <ins>**funciton invocation**</ins> in the scope in the execution stack. 
    1. The 2nd execution context is the invocation of function `buildFunctions`. There are variable in the context which are `arr` the empty array that collects data and  `i` as the `for` loop counter. However, there's no other funciton is invoked as, in the `for` loop, it's only pushing a "**function object**" (which can be invoked with parenthesis behind) to the array. Therefore, when the code finishes `for` loop and runs to the last line `return`, variable `i` is at "<ins>**3**</ins>" because it's when the `for` loop stops when the counter is no longer less than 3. Thus, all function objects pushed to the array carry variable `i` as "<ins>**3**</ins>". 
    1. Therefore, when we call the functions from element in the array, it refers to the data in the closure which is the `buildFunctions` execution context. Thus, `i` is "<ins>**3**</ins>" and all invocation will return 3. 
    1. Note that `i` is declared by `var` which is in scope of function. However, if `i` is declared by `let`, it's in the scope in the `for` loop rather than the function because `let` is in `block scope` which is scoped by "**code block**" (the curly braces). The statements in `for` conditions are actually part of the `for` loop. If we use `let` rather than `var`. The output of the following code will be the desireable output which is from 0 to 2. 
    ```javascript
    function buildFunctions(){
        var arr = []; 
        for (var i = 0; i < 3; i++){
            arr.push(
                function(){
                    console.log(i);
                }
            )
        }
        console.log("1st version");
        return arr 
    }


    var fs = buildFunctions(); 
    fs[0](); //3 
    fs[1](); //3 
    fs[2](); //3 
    ```
1. We can use `let` to have another variable created in every iteration of the `for` loop. However, `function declaration` is very similar to keyword `let` that it only exists in the block scope where it is declared unless it is assigned and held by a variable. We can't use `var` as this keyword is in "**function scope**" which only limits the declared variable in the function scope. If `var` declared variable is not in a function body code, it will be in the outer scope though it's in a code block (curly braces "{}"). 
1. Without keyword `let`, the other way is to invoke the function immediately to return the current value of the counter and push it to the array. We can use function expression to invoke the function immediately which returns a function object and be pushed into the array. 
    ```javascript
    function buildFunctions2(){
        var arr = []; 
        for (let i = 0; i < 3; i++){
            let j = i //We can't use var to declare as the variable will be in function scope 
            arr.push(
                function(){
                    console.log(j);
                }
            )
        }
        console.log("2nd version");
        return arr 
    }

    var fs2 = buildFunctions2(); 
    fs2[0]();
    fs2[1]();
    fs2[2]();

    function buildFunctions3(){
        var arr = []; 
        for (var i = 0; i < 3; i++){
            arr.push(
                (function(j){
                    return function(){
                        console.log(j);
                    }
                }(i))
            )
        }
        console.log("3rd version");
        return arr 
    }           

    var fs3 = buildFunctions3(); 
    fs3[0]();
    fs3[1]();
    fs3[2]();
    ```
1. "**Closure**" is very useful that we can create a main function and pass different arguments and create distinct function objects which can be called for different purpose. As each function object creates its own execution context and doesn't affect to each other, we can reuse the main code without rewriting the function again. 
1. "**Callback functions**" are functions objects that passed to a function to run after the function finishes its execution. 
    ```javascript
    function tellMeWhenDone(callback){
        var a = 1000; 
        var b = 2000; 

        callback(); 
    }

    tellMeWhenDone(function(){
        console.log("All done"); 
    });
    ```
### call(), apply(), and bind() methods 
1. A <ins>**function**</ins> is an `Object` which can hold properties and methods. All functions in JavaScript has `.call()`, `.apply()`, and `.bind()` method. These methods are usually use when
    1. To have a shorthand to copy and adjust some of the parameters of functions. 
    1. To "borrow" a method from another object but manipulate on an `Object` we prefer. 
1. `.bind()` is used to give a function expression a specific object to call with. The method can be used on a function expression or a variable that holds the expression. Therefore, the keyword `this` in the function expression can point to the given object in the `.bind()` method parameter. This method creates a copy of the function object (return a function object), so we can assign it to a varible which can be invoked later. (Note that the other 2 methods will run the function immediately when they are called, so we will only get returned result rather than a function.). `.bind()` method takes the 1st argument as the object to passed into the function, while the rest of the arguments will be the arguments passed into the function object. 
    ``` javascript
    var person ={
        firstname: "John", 
        lastname: "Doe", 
        getFullName: function(){
            var fullname = this.firstname + " " +this.lastname; 
            return fullname; 
        }
    }

    var logName = function(lang1, lang2) {
        console.log("Logged: " + this.getFullName());
        console.log(`Arguments: ${lang1} ${lang2}`); 
    }

    var logPersonName = logName.bind(person)

    logPersonName("en", "es");
    logName.call(person, "en", "es");
    logName.apply(person, ["en", "es"]); 
    ```
1. `.call()` and `.apply()` are similar to `.bind()` method, but both methods execute the function and pass the object immediately when invoked. However, `.apply()` takes an `Array` as the 2nd argument to pass the parameters into the function object. Note that if we don't pass any argument after the 1st one, both `.call()` and `.apply()` work exactly the same. 
1. We can also use funciton expressions to return a value from an `Object` with `.call()` or `.apply()` method. This is useful to "borrow" a function (or method) from the other `Object`. 
    ```javascript
    var person ={
        firstname: "John", 
        lastname: "Doe", 
        getFullName: function(){
            var fullname = this.firstname + " " +this.lastname; 
            return fullname; 
        }
    }; 
    (function(lang1, lang2) {
        console.log("Logged: " + this.getFullName());
        console.log(`Arguments: ${lang1} ${lang2}`); 
    }).apply(person, ['th', 'jp'])

    ```
1. "**Function Currying**" means to create a copy of a function but with some preset parameters. This is very useful in mathematical situation. For example, we can create a generic function does multiplication and create another funcion using `.bind()` method based on the generic function. (We use `.bind()` as to create a copy of the function rather than call the function immediately.) In the following example, the keyword `this` is to create a copy of the function and pass an argument as "2", so the variable carries the functoin with one of the parameters has been set to "**2**". 
    ``` javascript
    function multiply (a, b) {
        return a * b; 
    }
    var multipleByTwo = multiply.bind(this, 2)
    console.log(multipleByTwo(4)); 
    ```

### Functional Programming 
1. Since functions are "First class" in JavaScript, we can pass a function as a value or make it as a callback in certain conditions. We can use these methods to manipulate the data in different data structures and reuse them. Therefore, we can write the least code without repeating and several kinds of functions.
1. We can also use `.bind()` method and "**function currying**" to set up a function that has a default parameter in it. for example, we can set a variable `checkPastLimit` to have a limiter passed into the function. 
    ```javascript
    function mapForEach(arr, fn) {
        var newArr = []
        for (var i = 0; i < arr.length; i++) {
            newArr.push(
                fn(arr[i])
            )
        };
        return newArr; 
    }

    var arr1 = [1,2,3]; 
    console.log(arr1); 

    var arr2 = mapForEach(arr1, function(item){
        return item > 2; 
    });
    console.log(arr2); 

    var checkPastLimit = function(limiter, item) {
        return item > limiter; 
    };

    var arr4 = mapForEach(arr1, checkPastLimit.bind(this,1)); 

    console.log(arr4); //return an array of boolean values 

    var checkPastLimitSimplified = function(limiter) {
        return function (limiter, item) {
            return item > limiter; 
        }.bind(this, limiter);
    };

    var arr5 = mapForEach(arr1, checkPastLimitSimplified(2)); 
    console.log(arr5); 
    ```
1. `underscore.js` and `lodash` library are good examples for funcitonal programming. We can import it from the HTML file and use it in a separate JS file. 
    ```js
    var arr6 = _.map(arr1, function(item){return item * 3 }); 
    console.log(arr6);

    var arr7 = _.filter([2,3,4,5,6,7], function(item) {return item % 2 === 0}); 
    console.log(arr7); 
    ```
# Object-oriented JavaScript and prototypal inheritance 
1. Everything in JavaScript is an `Object` or a primitive value. 
1. Every `Object` has a property `__proto__` which has the prototype from which the `Object` inherits. For example, an empty `Object` has `__proto__` that has all the methods that every `Object` values can use. 
1. In the example below, we can noticed that all variables have `__proto__ ` property which is inherited from another `Object` which is the orignal setup of an `Object` prototype. Therefore, for empty funcitons and arrays, they have an additional `__proto__` that is the `Object` prototype. 
    ```js
    var a = {}; 
    var b = function(){};
    var c = []; 
    a.__proto__.__proto__ //null 
    b.__proto__.__proto__.__proto__ //null 
    c.__proto__.__proto__.__proto__ //null 
    a.__proto__ == b.__proto__.__proto__ //true 
    b.__proto__.__proto__ == c.__proto__.__proto__ //true 
    ```
### Classical and prototypal inheritance 
1. <ins>**Inheritance**</ins> means that an `Object` can get access to the properties and methods of another `Object`. 
    1. <ins>**Classical Inheritance**</ins> is relative "**verbose**" and several methods to work with. This mainly used in other programming languages, such as C and Java. 
    1. <ins>**Prototypal Inheritance**</ins> is relatively "**simple**", flexible, extensible, and easier to understand. 
### <ins>**Prototypes**</ins>
1. Every `Object` value (including functions) in JavaScript has a property `proto` which is from its <ins>**Prototypes**</ins> and point to another `Object`. A `proto` property can have another `proto` inherited from its prototype as a chain. Therefore, when we try to call a property or method that is not directly in its property, the engine will go further in the `proto` property to find if there's any property matches until it reaches a `null`. This is called a "**prototype chain**" 
1. Different `Object` values can share the same `proto`, so each of the `Object` values can call the same property or method by sharing the same "property chain". Therefore, we can use this feature to create "classes" which is similar to the concept to work on OOP in the other programming languages. 
### Reflection and Extend 
1. <ins>**Reflection**</ins> means that an `Object` can look at itself, listing and changing its properties and methods. 
1. We can use keyword `in` (which is similar to `of` for array elements) in a `for` loop for to iterate through each property of an `Object`. Note that if an `Object` inherits properties and methods from another `Object` as its prototype, it will be listed if we loop through the `Object`. 
    ```js
    var person = {
        firstname: "Default", 
        lastname: "Default",
        getFullName: function(){
            return this.firstname + " " + this.lastname;
        }
    };

    var john = {
        firstname: "John", 
        lastname: "Doe"
    }

    john.__proto__ = person; 
    for (var prop in john) {
        if(john.(prop)){
            console.log(prop + ": " + john[prop]); //include "getFullName" method!
        }
    }

    for (var prop in john) {
        if(john.hasOwnProperty(prop)){
            console.log(prop + ": " + john[prop]); //does not include "getFullName" method
        }
    }
    ```
1. We can use `underscore.js` library with functions such as `_.extend(objToExtend, obj1, obj2, ...)`. The function is to add properties and methods from `obj1` and other given `Objects` that `objToExtend` doesn't have. This function is different from add from `prototype object` that the properties will become `objToExtend`'s own properties, so the `objToExtend` is "**extended**" with the new properties. 
1. This `_.extend()` function uses 2 `for` loops to iterate through the properies of the `Object` to be extended and `Objects` which has the source of properties and methods. 
1. However, if the `Objects` which are used to extend have the same property of the `Object` to be extended, the original properties on the `Object` to be extended will be overwritten. 
    ```js
    var john = {
        firstname: "John", 
        lastname: "Doe"
    }

    var jane = {
        address: "26 soi Sukhumvit", 
        getFormalFullName: function(){
            return this.lastname + ", " + this.firstname; 
        }
    }

    var jim = {
        getFirstName: function(){
            return firstname; 
        }
    }

    _.extend(john,jane,jim); 
    ```
# Building Objects 
### Function constructors (or constructor functions)
1. Function constructros, keyword `new`, which is a very similar feature in `Java` language, as `JavaScript` is a browser-based programming language that was firstly created to attract `Java` programmers to use it. In Java, the keyword `new` creates an `Object` from a "**class**". 
1. In JavaScript, we can use keyword `new` to create an `Object` that inherits properties from the `Function Object` as its prototype. Note that this is just one of the ways to create an `Object` in JavaScript. 
1. According to the table of JavaScript Operator precendence, we can learn that keyword `new` is actually an operator with precedence at <ins>**18**</ins>. 
    1. When we use the keyword `new`, an empty `Object` is created and invokes the function that follows. 
    1. keyword `this` in the function will point to the new `Object` created by keyword `new`, so the properties in the constructor function will be added to the new created empty `Object`. 
    1. Then the new created `Object` is "**returned**" as the value, so the declared varibale can hold the `Object` as a value. 
    ```js 
    function Person(){
        this.firstname = "John"; 
        this.lastname = "Doe"; 
    } 
    var john = new Person(); 
    ``` 
1. Since the new `Object` created in this way will inherit the properties, we can also give arguments to the "**constructor function**" which can hold the properties as default but create with customized values. In the following example, we can see both variable `john` and `jane` have properties `firstname` and `lastname` but with different given values when created as arguments. 
    ```js 
    function Person(firstname, lastname) {
        this.firstname = firstname; 
        this.lastname = lastname; 
    }
    var john = new Person("John", "Doe"); 
    var jane = new Person("Jane", "Doe"); 

    ```
1. "**Function constructors**" (or constructor functions) are functions which are used to construct `Objects`. It makes keyword `this` in the function points to the new created empty `Object`, and the `Object` is the returned value of the keyword `new`. 

### Function constructors and ".prototype" 
1. When we use keyword `new` and "constructor function" to create an `Object`, the `Object` has the constructor function as its prototype stored in its property `__proto__`
1. Every `Function` in JavaScript is a special type of `Object` (as function object), which has several properties in default such as 
    1. `code` which is the code body that in the "**code block**" (curly braces) and is "invocable" by parenthesis "`()`" 
    1. `name` which is optional that a function can be anonymous as in an expresssion. 
    1. `prototype` that is only used by keyword `new` (as an operator). Note that this prototype will point to the `Object` that is the same from any `Object` that creates by `new`. 
    ```js
    function Person(firstname, lastname) {
        this.firstname = firstname; 
        this.lastname = lastname; 
    }
    var john = new Person("John", "Doe"); 
    john.__proto__ === Person.prototype //true 
    ```
1. We can use this feature to extend/update the "**constructor function**" and add new features to all `Objects` that created by this "constructor function" with keyword `new`. 
    ```js
    function Person(firstname, lastname) {
        this.firstname = firstname; 
        this.lastname = lastname; 
    }
    var john = new Person("John", "Doe"); 
    var jane = new Person("Jane", "Doe");

    Person.prototype.getFullName = function(){
        return this.firstname + " " + this.lastname; 
    }

    console.log(john);
    console.log(jane);
    ``` 
1. The main benefit from this feature is that not all the `Objects` created with the constructor function carries all the properties it should have, while, if we add on later, the `Object` has fewer properties and all the common property and methods are linked with prototype, so the program can take less space (memory) to run the code. Besides, we don't need to add the new method to each of the `Object` in the same "**class**", so it can save a lot of time and space for efficiency. Usually `Objects` in the same class same properties with different values and use the same methods. 
1. If we forget to put keyword `new` before function constructor to assign a variable, the variable we get the return value from the executed function which is usually `undefined`. The code will cause erros by trying to use methods or call properties from `undefined`.
1. In convention, a constructor function usualy named with a capital letter as the first character, so developers will find the bug easier as if the `new` keyword is missing. Besides, we can use `Lint` (such as "**ESLint**") to ensure the code is following a certain format and pattern. 
1. There are several built-in function constructors such as `Number()` and `String()`. If we assign a variable with `new` and the built-in function constructor, we will get an `Object` which can use the methods of the type of the primitive values in JavaScript. These variables are `Objects` rather than primitives.
1. However, JavaScript engine knows the type of the value and give it aligned methods. That's the reason why we can manipulate the primitive values with certain methods. 
    ```js
    var a = new String('John'); 
    console.log(a.indexOf("o")); 
    //1 is the index of string 'John'
    "John".indexOf("o") == a.indexOf("o"); 
    //true 

    String.prototype.isLengthGreater = function(limit){
        return this.length > limit;
    };
    "John".isLengthGreater(3); //true 
    ``` 
1. However, using built-in function constructors to create primitives, as problems may happen because of coercion. This is similar to compare `String` `"3"` with `Number` `3`. This built-in constructor functions are usually used for converting value types, such as from `String` to a `Number` 
    ```js 
    var a = 3; 
    var b = new Number(3); 
    a == b; //true 
    a === b; //false 
    "3" == 3; //true 
    "3" === 3; //false 
    var c = Number("3"); 
    c === 3; //true 
    ```
1. Therefore, it's not recommended to use built-in function constructor to create `Objects`. We can use other libraries for the purpose instead such as `moments.js` which is library mainly for parsing, manipulating, and displaying dates in JavaScript. 

### Issues with Arrays and for in 
1. Since `Arrays` are actually a type of `Object` in JavaScript, we should avoid using `for in` loop for `Arrays`, as it may loop out other customized properties of the value. Besides, there's another shorthand `for of` to loop through all elements similar to using a regualr `for` loop with counters. 
    ```js
    Array.prototype.myCustomFeature = 'cool!'; 
    var arr = ['John', 'Jane', 'Jim'];

    for (var prop in arr) {
    console.log(prop + ': ' + arr[prop]);
    }

    //use regular for loop with counter 
    for (let i = 0; i < arr.length; i++) {
        console.log(i + ': ' + arr[i]); 
    }

    //use for of loop 
    let i = 0; 
    for (var element of arr) {
        console.log(i++ + ': ' + element); 
    }
    ```
### Object.create and Pure prototypal inheritance 
1. We can use `Object.create(prototypeObj)` to create a another `Object` that inherits all the properties in its `__proto__` property, so the new variable will be an empty `Object` when assigned. Though the new created `Object` is empty, we still can its properties inherited from its prototype, which is hidden in its `__proto__` property. 
1. Besides, as the inherited properties are hidden in the `__proto__` property, we can assign properties with the same name as its prototype to override the value when called but without affecting its prototype. 
1. The main difference between "**prototypal inheritance**" and "**function constructor**" are that 
    1. "**Prototypal inheritance**" uses an `ProtoObject` to build an `Object` which is an <ins>**empty**</ins>. `Object.__proto__ == ProtoObject` is `true`. 
    1. "**Function constructor**" uses a `Function` and keyword `new` to build an `Object` which has properties inherited from the <ins>**constructor function**</ins>. `Object.__proto__ == ConstructorFunction.prototype` is `true`. 
    ```js 
    var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'Hi ' + this.firstname;
        },
    };

    var john = Object.create(person); //john is an empty object 
    john.firstname = 'John';
    john.lastname = 'Doe';
    console.log(john.greet());
    john.__proto__ == person //true 
    ```
1. We can edit/update the `Object` for prototype similar to constructor function that once the prototypal `Object` is updated, all the `Object` created by this methods will be updated as well. 
1. **Polyfill** is code that adds a feature which the engine may lack. It means that if the code runs on an older browser and the old browser's engine lack of certain function or feature, we can fill the gap by adding other code to have the same function or feature in the new version of code. For example, `Object.create()` is a new feature that it's not in the JavaScript engine of older browsers. `!Object.create` will be true when `Object.create` is `undefined` which is a falsy value. That means `Object.create` doesn't support in the JavaScript engine. 
    1. The `Object` is the "**global object**" in the runtime, and we assign it with a new function. 
    1. The `IF` statement catches the error if there's more than one `Object` is passed into the function. 
    1. We make a constructor function `F()` and assign the prototype object to its `.prototype` property and return an `Object` built by `new F()`.
    1. Therefore, we create the `Object.create()` method if it doesn't exist in the older browser. 
    ```js
    //polyfill for Object.create() function
    if(!Object.create) {
        Object.create = function (o) {
            if (arguments.length > 1) {
                throw new Error('Object.create implementation' + ' only accepts the first parameter.');
            }
            function F(){}
                F.prototype = o; 
                return new F(); 
            };
        };
    ``` 
### ES6 and Classes 
1. "Classes" in other programming languages are very popular. It's a way to defining an object in of a class with certain methods and properties. However, this feature **IS NOT** available in JavaScript. 
1. A JavaScript `class` defines an `Object`. It has a constructor which is similar to constructor functions worked with `new` and we can have a function liked method to be declared in the code block directly with less code. 
1. However, "class" in the other programming languages is not an object. It's a definition or template to define an object. We must use a `new` keyword to create an object that is in certain "class". 
1. Keyword `class` in JavaScript creates an `Object` and use that `Object` to create other `Objects` which is similar to the concept of what "class" does in the other programming language but in a different way. 
    ```js 
    class Person {    
        constructor(firstname, lastname) {
            this.firstname = firstname; 
            this.lastname = lastname;
        }
        greet() {
            return 'Hi' + firstname; 
        }
    }
    var john = new Person('John', 'Doe'); 
    ```
1. To extend the `class` as adding new properties or methods to `.prototype` property of constructor functions, we use keyword `extends` to create another `class` which inherits the properties and methods from a given `Object`. `super()` method is to inherit the properties from its parent `class`. The arguments in `super()` are the properties that is with `this` in its parent `class`. Note that the methods will also be inherited if it's not overwritten with new statement.
    ```js 
    class Person {    
        constructor(firstname, lastname) {
            this.firstname = firstname; 
            this.lastname = lastname;
        }
        greet() {
            return 'Hi' + firstname; 
        }
    }

    class InformalPerson extends Person {
        constructor(firstname, lastname) {
            super(firstname, lastname); 
        }
        greeting () {
            return 'Yo ' + this.firstname; 
        }
    }

    var jane = new InformalPerson('Jane', 'Doe');
    jane.greet() //Hi Jane 
    jane.greeting() //Yo Jane 
    ```
1. "**Syntactic Sugar**" means that the code just uses a different to be written without changing the way of how it works under the hood. We can see `Object.create`, `constructor functions`, and `class` work similarly. 

# Odds and Ends 
### Use "typeof" and "instanceof" and figure out what something is  
1. We can use `typeof` to check the type of a value. However, `Array` values in JavaScript are also `Objects`, so the type will be also be `Object`. We can use `Object.prototype.toString.call(d)` to change the `Object` input from built-in function `Object` to the given empty `Array`. 
1. We can use `instanceof` to check if an `Object` is an instance of a "class" (constructor function). 
1. `null` is very special and considered a bug but stays too long to be fixed that its type is `object`. 
    ```js 
    var d = [];
    console.log(typeof d); //object 
    console.log(Object.prototype.toString.call(d));//[object Array] 


    function Person(name){
        this.name = name; 
    }
    var e = new Person('Jane'); 
    console.log(e instanceof Person); //true 

    console.log(typeof undefined); //undefined 
    console.log(typeof null); //object 
    ``` 
### Strict mode 
1. We can change JavaScript to be more "strict" on the type of values and variables. This "strict mode" can help to prevent some errors in some circumstances. For example, a variable must be declared before it can be assigned a value. 
1. Strict mode code and non-strict mode code can coexist, so scripts can opt into strict mode incrementally. We can use "strict" in a function's code body without affecting to the global environment. This is useful as on a webpage may import several JS files and not all the code follow the "strict mode". 
1. We can use `"strict mode";` (in double or single quotes) to invoke strict mode for scripts. 
    ```js
    person = {}; 
    //The statement can work but not in strict mode
    ```

# Examining Famous Frameworks and Libraries
### jQuery
1. When we use a jQuery selector which start with a dollar sign "$", we get an array-like value which include all the elements we select by jQuery selector. Each of the elements has several properties of a regular HTML element. Besides, we can check the methods we can work on a jQuery object in its `__proto__` property.  
1. When we look into the jQuery source code, we notice that variable `jQuery` is a variable that holds a function value which function returns an `Object` created with keyword `new` in `jQuery.fn.init`. Then we find that `jQuery.fn = jQuery.prototype = {properties and methods}`. 
1. jQuery also uses other JavaScript libraries such as [`Sizzle`](https://sizzlejs.com/). 
1. We can do "**Method chaining**" in jQuery, which is calling one method after another, and each method affects the parent `Object`. This works as jQuery selector returns an `Object` and jQuery methods will return the modified `Object` after processs. If we investigate the source code, we can find that every method returns a `this`, which is the `Object` that the method manipulates. 
1. In the last section of jQuery source code, we can find that a variable `_$` is set up as `window.$` which is also assigned to variable `jQuery`, and all these variables have function value, so can be invoked (As in the very first section of the source code that `var jQuery = function(selector, context){...}`). This is the reason why we can use dollar sign with parenthesis as jQuery selector because the dollar sign is actually a variable after we import jQuery library. (This is the same concept as the underscore library, as variables in JavaScript can start with punctuation characters). 
    ```js
    _$ = window.$; 
    window.jQuery = window.$ = jQuery;
    $ == jQuery; //true 
    ```

# Build a Framework/Library 
### Greetr library 
1. This `Greetr` is the framework instructed to be built in the course and have several functions. 
    1. When given a firstname, lastname, and optional language, it generates formal and informal greetings. 
    1. Support English and Spanish languages. 
    1. Reusable library/framework 
    1. Easy to type 'G$()' structure (which mimics jQuery). 
    1. Support jQuery. 
1. Therefore, we import `jQuery`, `Greetr`, and `app.js` to the HTML file in order. We use immediate invoked functions. The structure is similar to jQuery that it returns an `Object`, which should be created by keyword `new`. With the shorthand, we can skip `new` as the function IFEEs. Note that by using IFEEs, we can prevent the variables and code "**pollute**" the execution context. 
    ```js
    (function (global, $) {
        //Create a Greetr object with constructor function when invocation
        var Greetr = function(firstName, lastName, language) {
            return new Greetr.init(firstName, lastName, language);
        }
        //properties and methods of Greetr objects 
        Greetr.prototype = {}; 

        //initiation of a Greetr object 
        Greetr.init = function(firstName, lastName, language) {
            var self = this; 
            self.firstName = firstName || ''; //set default value as empty if argument isn't given
            self.lastName = lastName || ''; //set default value as empty if argument isn't given
            self.language = language || 'en'; //set default value as english if argument isn't given
            
        }
        
        //link new created Greetr objects with added methods. 
        Greetr.init.prototype = Greetr.prototype; 

        //align variables with shorthands
        global.Greetr = global.G$ = Greetr; 

    }(window, $));//pass global object and jQuery library (variable $ or jQuery) to this library 
    ```
1. With the feature of "**closure**" in JavaScript, we can set up variables in the IFEE without leaking it out to pollute the environment. Thus, other developers can only modify the source code to access the variables that declared in the function expression. Even though we use `var` to declare, as it's in a function, it can't leak out from the scope. 
    ```js 
    (function (global, $) {
        //Create a Greetr object with constructor function when invocation
        var Greetr = function(firstName, lastName, language) {
            return new Greetr.init(firstName, lastName, language);
        }
        //variables declared here can't access or be changed from outside
        var supportedLangs = ['en', 'es']; 
        var greetings = { 
            en: 'Hello', 
            es: 'Halo'
        };
        var formalGreetings = { 
            en: 'Greetings', 
            es: 'Saludos'
        };
        var logMessages = { 
            en: 'Logged in', 
            es: 'Inicio sesion'
        };

        //methods of Greetr objects which can be access after the object is created 
        Greetr.prototype = {
            fullName: function(){
                return this.firstName + ' ' + this.lastName; 
            }, 

            validate: function() {
                if (supportedLangs.indexOf(this.language) === -1) { //if the given language isn't found in the supportedLangs array, index will reutrn -1 as not found 
                    throw 'Invalid language'; //return an error as the given language isn't found 
                } 
            },

            greeting: function(){ //checks the object variable above for and return the text with aligned language
                return greetings[this.language] + ' ' + this.firstName + '!'; 
            }, 

            formalGreeting: function(){
                return formalGreetings[this.language] + ' ' + this.fullName(); 
            }, 

            greet: function(formal){
                var msg; 
                
                //if undefined or null it will be coerced to 'false'
                if (formal) {
                    msg = this.formalGreeting();
                }
                else {
                    msg = this.greeting(); 
                }

                if (console){
                    console.log(msg); 
                }

                //'this' refers to the calling object at execution time 
                //makes the method chainable 
                return this; 
            }, 

            log: function(){
                if (console) {
                    console.log(logMessages[this.language] + ': ' + this.fullName())
                }
                return this;
            }, 

            setLang: function(lang){
                this.language = lang;

                this.validate(); 

                return this;
            }
        }; 

        //initiation of a Greetr object 
        Greetr.init = function(firstName, lastName, language) {
            var self = this; 
            self.firstName = firstName || ''; //set default value as empty if argument isn't given
            self.lastName = lastName || ''; //set default value as empty if argument isn't given
            self.language = language || 'en'; //set default value as english if argument isn't given
            
        }
        
        //link new created Greetr objects with added methods. 
        Greetr.init.prototype = Greetr.prototype; 

        //align variables with shorthands
        global.Greetr = global.G$ = Greetr; 

    }(window, $));//pass global object and jQuery library (variable $ or jQuery) to this library 
    ```

### Adding jQuery supports and use "Greetr" library
1. We add a new method in `Greetr.prototype` 
    ```js
    HTMLGreeting: function(selector, formal){
        if (!$) {//check if jQuery is imported, so $ dolloar sign variable is not empty
            throw 'jQuery not loaded'; 
        } 

        if (!selector) {//check if a selector to pass to jQuery is given 
            throw 'Missing jQuery selector'; 
        }

        var msg; 
        if(formal) { //use formal greeting function
            msg = this.formalGreeting();
        } else { //use regular greeting function
            msg = this.greeting(); 
        }

        $(selector).html(msg); //jQuery DOM to modify the message on page 

        return this; //make the method chainable 
    }
    ```
1. Some libraries will start the code with a semi-column ";", as to prevent if there's any other library or source code imported to the same HTML forget to close a statement or expression. (Note that I made a mistake in the HTML file at the first time that I put the "h1" tag in the "div" tag section, so it is hidden after clicking the button.)
    ```js
    //gets a new object (the architecture allows us to not have to use the 'new' keyword here)
    var g = G$('John', 'Doe'); 

    //use our chainable methods
    g.greet().setLang('es').greet(true).log();
    
    //add listener to the login button 
    $('#login').on('click', function(){
        //create a new 'Greetr' object (let's pretend we know the name from the login)
        var loginGrtr = G$('John', 'Doe');

        //hide the login on the screen 
        $('#logindiv').hide(); 

        //fire off an HTML greeting, passing the '#greeting' as the selector and the chosen language, and log the welcome as well 
        loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log(); 
    });
    ```
### HTML file 
    ```html 
    <div id="logindiv">
        <select id="lang">
            <option value="en">English</option>
            <option value="es">Spanish</option>
        </select>
        <input type="button" value="Login" id="login">
    </div>
    <h1 id="greeting"></h1>
    <script src="jquery-3.5.1.js"></script>
    <script src="Greetr.js"></script>
    <script src="app.js"></script>
    ```