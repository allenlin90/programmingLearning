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
    ``` 
    var a = "Hello World!"; 
    a //"Hello World!"
    window.a //"Hello World!"
    this.a //"Hello World!"
    ```
1. When JavaScript code is executed, an execution context is created. If we write and run code in global environment, there are 4 components, Global Object, "this" (which refers to the global object), outer environment (which is `null` as global environment is the out most), and the written JavaScript code. 
1. JavaScript has a very special feature that though functions and variables are declared after they are called in the code, the function can still run, and variables are just `undefined` rather than having an error (But if there's no variable declared, it will return an "Uncaught ReferenceError" that says the variable is not defined. 
    ```
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
    ```
    function b(){}
    function a(){
        b();
    }
    a(); 
    ```
1. "**Invocation**" means to run a function. In JavaScript, functions are invoked (called) with function name and parenthesis. When a code runs, a "**global execution context**" will be created in the first phase as creation phase. The code will be executed line by line from top to bottom. In the example above, when the code is executed to function invocation at "**a()**", a new execution context is created and stored in the execution stack above the "**global execution context**". 
Every time a function is invoked, an new execution context is created and run the code inside the function in the scope and context. If there's another function is called in the execution context (function b in this case), the current one will be stopped, and JavaScript will create another execution context. As there's no other invocation in `function b`, the stack will be cleared from the top to the last one, which is the global execution context created as the first execution stack. 
1. "**variable environment**" is where the variables live. Every time a function is invoked, the variables declared in the function will only stay in such execution context which can't be leaked out. If there's another function invoked in the function, such variable can be passed and be manipulated in the next execution context created by the invoked function. This is concept is related to the scope of code execution. Every execution context has a reference to outer environment. The function code shows that the outer environment of both function a and b is the global execution context (If function b is declared in function a, its outer environment will be in the execution context of function a. The variable will be the one declared in function a).
    ```
    function b(){console.log(myVar)}
    function a(){var myVar = 2;b();}
    var myVar = 1; 
    a() 
    //1
    ```
1. When executing code, JavaScript will check the variable in the current execution context, if the variable is not found, it will refer to the outer environment. In the example, function b is at the same level as function a which is the global scope. When a execution context refers a variable from the outer environment, it may pass one or several execution stack and link to the correct execution context to get the variable, such behavior is called a "**scope chain**". Besides, if function b is not declared in the global scope, the function will not be allocated in the creation phase. Therefore, if we call function b, JavaScript will return an error as the b is not defined. The other way is to think that when and where the code is created. If a function is nested in another function, the function will only be created when the outer function is called.
1. "**Scope**" is where a variable is available in the code. In ES6, the keyword for variable declaration is updated from "**var**" to "**let**". Keyword "**let**" is different that it allows "**block scoping**". In this case, if we try to call the variable before it is declared by `let`. Though it is in the same execution context, JavaScript will return an error for the issue (Note that the variable is stored memory as declared by `var`). On the other hand, if we use `var` to declare the variable, the variable is assigned `undefined` in the creation phase. 
1. If we use `let` to declare a variable in `for` loop the variable is actually different as it will be created and destroyed everytime a loop iterates. 
1. **Asynchronous** means more than one at a time. Besides <ins>**execution stack**</ins>, there's another <ins>**event stack**</ins>. In a browser, there's not only the JavaScript engine but also other engines such as rendering engine or send a HTTP request. These components have hooks to link to each other, so as they can work asynchronously. However, the JavaScript engine itself still works synchronously. 
1. When the code runs, it will run through the JavaScript synchronously, while all events, such as "click" by a mouse will be held in the event queue. The events that store in the "**event queue**" will be executed when the execution stack is empty. Note that JavaScript will look into the "event queue" periodically to check if there's an event to be fulfilled. If an event is aligned with a function, the function will be called and create an execution context accordingly. In the code below, as `waitThreeSeconds` function is executed first before the last `console.log()` executes. The program will wait for 3 seconds and print out "finished function", "finished execution", and "click event!" if the user click in the browser during the code executes. 
    ```
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
    ```
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
    ```
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
    ```
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
    ```
    Number(false) //0
    Number(true) //1
    Number(undefined) //NaN 
    Number(null) //0 
    ```
1. We can use double equal signs "==" which stands for "**Equality**" to check if one value is eqaul to the other. This expression will return a boolean value `true` or `false`. However, due to <ins>**coercion**</ins> the value would be turn into another type to be compared. 
    ```
    3 == "3" //true 
    null == 0; //false 
    undefined == 0; //false
    null < 1; //true 
    "" == 0 //true 
1. In JavaScript, there's a <ins>strict equality operator</ins> "**===**" which is triple equal signs. This operator won't coerce type of value to the other to try to make the expression working. Therefore, when we are going to check equality as the condition for IF statement, it's suggested to use triple equals "===" as strict equality, as to use "<ins>**strict inequality**</ins>" with "!==" to check condition. 
    ```
    3 === 3 //true 
    "3" === "3" //true 
    3 === "3" //false 
    ```