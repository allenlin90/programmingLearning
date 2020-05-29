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

The execution context: Code execution 
The 2nd phase is the "**execution phase**". In this stage, the global object, "**this**", and outer environment are all set and body code will be executed, which runs through the code line by line from top to bottom. 

"**Single threaded**" means one command at a time. Though there may have many other commands and functions are running in the browser, JavaScript behaves in a single thread manner. "**Synchronous**" means one at a time. 

```
function b(){}
function a(){
    b();
}
a(); 
```

"**Invocation**" means to run a function. In JavaScript, functions are invoked (called) with function name and parenthesis. When a code runs, a "**global execution context**" will be created in the first phase as creation phase. The code will be executed line by line from top to bottom. In the example above, when the code is executed to function invocation at "**a()**", a new execution context is created and stored in the execution stack above the "**global execution context**". 
Every time a function is invoked, an new execution context is created and run the code inside the function in the scope and context. If there's another function is called in the execution context (function b in this case), the current one will be stopped, and JavaScript will create another execution context. As there's no other invocation in function b, the stack will be cleared from the top to the last one, which is the global execution context created as the first execution stack. 

"**variable environment**" is where the variables live. Every time a function is invoked, the variables declared in the function will only stay in such execution context which can't be leaked out. If there's another function invoked in the function, such variable can be passed and be manipulated in the next execution context created by the invoked function. This is concept is related to the scope of code execution. Every execution context has a reference to outer environment. The function code shows that the outer environment of both function a and b is the global execution context (If function b is declared in function a, its outer environment will be in the execution context of function a. The variable will be the one declared in function a).
    ```
    function b(){console.log(myVar)}
    function a(){var myVar = 2;b();}
    var myVar = 1; 
    a() 
    //1
    ```
When executing code, JavaScript will check the variable in the current execution context, if the variable is not found, it will refer to the outer environment. In the example, function b is at the same level as function a which is the global scope. When a execution context refers a variable from the outer environment, it may pass one or several execution stack and link to the correct execution context to get the variable, such behavior is called a "**scope chain**". Besides, if function b is not declared in the global scope, the function will not be allocated in the creation phase. Therefore, if we call function b, JavaScript will return an error as the b is not defined. The other way is to think that when and where the code is created. If a function is nested in another function, the function will only be created when the outer function is called.

"**Scope**" is where a variable is available in the code. In ES6, the keyword for variable declaration is updated from "**var**" to "**let**". Keyword "**let**" is different that it allows "block scoping". 


