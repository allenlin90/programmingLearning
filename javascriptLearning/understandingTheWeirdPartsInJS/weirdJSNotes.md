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
    ```javascript
    var arr6 = _.map(arr1, function(item){return item * 3 }); 
    console.log(arr6);

    var arr7 = _.filter([2,3,4,5,6,7], function(item) {return item % 2 === 0}); 
    console.log(arr7); 
    ```
