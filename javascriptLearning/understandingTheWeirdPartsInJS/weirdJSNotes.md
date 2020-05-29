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
