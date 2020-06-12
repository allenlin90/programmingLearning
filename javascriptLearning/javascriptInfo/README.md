# JavaScript Fundamentals 
### **Interaction in browser** - alert, prompt, confirm 
1. `prompt()` takes 2 arguments, the 1st is the message to hint the user for the inpout, while the 2nd is the default value given in the input bar. Note that in WINDOWS IE, the default value will be undefined if the user doesn't give any input. Therefore, it's suggested to have `prompt("Test", '')`, so it will return an empty string. 
1. `confirm() will sho` a prompt and asked YES or NO. If the user click YES, the event returns a boollean `true`, otherwise it returns `false`. 

### **Conditional operators** - if, '?'
1. If the expression is very simple and in one line, we can put it right after the IF conditions without using curly braces. However, it's still suggested to have curly braces all the time though the following code is only one line. 
1. We can use variables with their bollean types. For example, `0`, `null`, `undefined`, `NaN`, and `false` are boolean `false`. If we put them in the condition of an IF statement, the code won't run. 
1. Question mark "?" is a trinary operator which can represent a simple IF/ELSE statement. For example, `let result = condition ? value1 : value2;`. We can use multiple question marks, while they are like nested IF or ELSE IF statement. 

### **Logical operators** - ||, &&, ! 
1. Each of the following characters have their meaning `||` for OR, `&&` for AND, and `!` for NOT. 
1. In IF statement, the condition will be changed to booelan value by its value type. 
1. If we use "||" in a statement, it will check operands from the left to the right, turn all operands into Boolean type. If it reaches a boolean `true`, it stops and return the operand. If all operand are falsy, such as undefined, NaN, null, false, it will return the last operand it checks. 
1. `&&` AND, on the opposite, checks all operands from the left to right as well, but returns the first falsy operand it reaches. If all operands are true, it returns the last operand it reaches. For example, `alert(1 && null &&2)` returns null, as `null` is the only falsy value. 
1. AND `&&` is in higher priority than OR `||`. Thus, `a && b || c && d` is equivalent to `(a && b) || (c && d)`. 
1. We can use double exclmation marks to turn a value into Boolean type, such as `!!0` becomes `false` as it's a falsy value. 

### **Nullish coalescing operator '??'**
```js
let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0
```
1. The nullish coalescing operator `??` provides a short syntax for selecting a first “defined” variable from the list. `x = a ?? b` is equivalent to `x = (a !== null && a !== undefined) ? a : b;`. 
1. As it returns a the first **defined** variable, it can be used as OR `||` in different conditions, especially dealing with falsy values such as `0`. 
1. `??` operator's precedence is rather low but higher than `=` and `?`. When we use it in a complex expression, it's better to give parentheses. 
1. Besides, it can't not be used with `&&` and `||` in the same expression, or it returns a syntax error. 
```js
let height = null;
let width = null;

// important: use parentheses
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000

// not correct without parentheses 
let area = height ?? (100 * width) ?? 50;
```

### **Loops: while and for**
1. A single execution of the loop body is called an **_iteration_**. 
1. If the loop body has a single statement, we can omit the curly braces `{}`
1. We can move the condition to check in `do..while`. The loop body will be executed at least once, if the condition in while loop is true, the code will be executed again. However, the regualr `while` loop is more preferable. 
1. Note that there must be 2 semi-columns in the for loop condition. Otherwise, there would be a syntax error. 
1. We can use keyword `break` and `continute` if IF/ELSE statement to check if to continue or jump out from the loop. However, we can not use `break/continue` with ternary operator `?` as one of the returned statement. This is a reason not to use question mark operator `?` instead of `if`. 
1. We can label a `for` loop and have the label after keyword `break` as if we have nested `for` loops in a statement. `continue` can also be used as 

### **The switch statement**
1. switch statement will check the variable in the condition if it is strictly equal (the same as triple equals `===`) to any of the following value in each case. Otherwise, it will return the default if there's any. Besides, each case should end with a keyword `break` or `return`. If there's no `break` or `return`, it will keep continuing the code until hitting the next `break` or end of the statement. Note that we can put the value as an expression in the case condition to be compared with the given value. 
1. We can "**categorize**" the cases without having `break` in the expression. Besides, the comparison between the condition and value in the cases are strict. A String "`3`" and Number `3` are different. 
```js
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}
```

### **Function basics**
1. If a same-named variable is declared inside the function then it shadows the outer one when the outter variable name is the same. 
1. When invoking a function, if a parameter is not provided, then its value becomes `undefined`. Besides, parameters can be given as expression. For example, we can give default value, if there's no any. If the argument is given, it will be overwritten with the given argument. The default value can be a function as well. 
1. However, in older JavaScript, the argument can not be given in expression. 
1. A function can `return` a value back into the calling codeas the result. The keyword `return` can be put any where in the code, while when the execution reaches it, the function stops. Note that we can use `return` without a value, and it causes the function to exit immediately. 
1. A function with an empty `return` or without it returns `undefined`. 
1. We can have an expression in different lines in parenthesis. Note that without parenthesis and changing the line, JavaScript will assume there's a semi-column and returns only the expression after `return` in the same line. 
1. Functions are actions, so their name is usually a verb. Besides, one function should take only one action to prevent confusion. 

### **Function expression** 
1. There are 2 ways to create a `function` by using **_function declaration_** and **_function expression_**. By both ways, the function will be assigned to a variable as the declared name or the variable created with the expression. Besides, the function is the value to the variable. (Note that if we call only the variable without parenthesis, the console will return only the function statement rather than call the function itself. However, in some other languages, the function will execute when it is called, though without parenethesis). Therefore, we can assign the function value to the other variable when assigning without parenthesis. If there are parenthesis, it means the function is called and the variable will get assigned with the output of the function. 

### **Callback functions**
1. **_Callback functions_** are function passed to other funcitons as arguments. Therefore, when we call the main function, it can return the callback when a certain condition is fulfilled. 
1. The functions can be anonymous as an one-time function, which only stays in the main function we called or created. 
1. Note that regular values such as `Strings` and `Numbers` represent the **data**, while a function is an **action**. 

### **Difference between function expression and function declaration**
1. When using a function expression, the function should be created before it is called.
1. For a global function declaration, it can be called any where in the code even though before the function is declared. When JavaScript starts and read the code, it will check all the function declaration before it starts working in its "**initialization stage**". 
1. Function declaration can be scoped as other value and variables. If a function is declared in a code block, it's parent or other outer parts can't call be function. However, if we use function expression to let a variable carry function value, the function can be called out from the code block. 
1. In the following example, the variable welcome will be assign to either version of welcome according to the IF/ELSE statement which check the value of variable `age`. 
```js
let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {

  welcome = function() {
    alert("Hello!");
  };

} else {

  welcome = function() {
    alert("Greetings!");
  };

}

welcome()
```

### Arrow functions (Basics)
1. Arrow function expression is a simpler and more succinct way to create a function. 
    ```js 
    function sum (a, b) {
        return a + b; 
    } 

    let sumUp = (a, b) => a + b; 
    sum(1,2) === sumUp(1,2) //true 
    ```
1. If the function has only one parameter, we can omit the parenthesis. If the function doesn't take parameter, we can keep an empty parenthesis `()`. 
    ```js 
    //omit parenthesis  
    let double = n => n * 2; 
    double(2); //4 

    //empty parenethsis for function that has no parameter 
    let sayHi = () => console.log('Hello!');
    sayHi();
    ```
1. Arrow functions can be used as function expression that creates a function dynamically. We can use curly braces `{}` as code block to have arrow function with multi-line code body. However, we must have a `return` to return the value of the function as a regular function "**statement**". However, the code is only one line, arrow function will return the "**expression**" after `=>` arrow without having `return`. This feature makes arrow function useful when the function has only one line. 
    ```js 
    let sum = (a, b) => {
        let result = a + b; 
        return result; 
    };
    sum(1,2); //3 
    ``` 
# Code Quality 
### [Debugging in Chrome](https://javascript.info/debugging-chrome) 
### Code Styling 
<img src="codeStyling.png">

1. **Curly braces** 
    1. In most JavaScript projects, curly braces `{}` are written in '**Egyptian**' style that the opening brace is on the same line as the corresponding keyword. 
    1. We can omit curly braces follows an `IF` statement, if the `expression` or `statement` is short and can be presented in a single line. However, we shouldn't omit curly braces if the statement has multiple lines because JavaScript may add semicolumn automatically at the end of a line and cause error. Though we still can add curly braces if it's on the same line, it's easier to read without curly braces. 
    1. After all, with curly braces, it's easier to know if there's a code block and allow the reader focus on different section easily. 
1. **Line Length**
    1. We can use backtick " \` " to divide a long `String` in multiple lines. 
    1. In `IF` statement, we can separate the expression in different lines when using AND `&&` or OR `||`. 
    ```js 
    //a long String value in multiple lines 
    let str = `ECMA International's TC39 is a group of JavaScript developers,
    implementers, academics, and more, collaborating with the community
    to maintain and evolve the definition of JavaScript. 
    `; 

    //if statement with multiple expressions 
    if (
        id === 123 &&
        codeStatus === 200 &&
        dataParsed //this is true if the variable is not null or undefined
    ) {
        function(){}
        statements();
    }
    ```
1. **Indents** 
    1. JavaScript, unlike Python, is not space sensitive. We can use either 2 whitespace, 4 whitespaces (same as Python), or a tab (which is equal spacing as 4 whitespaces, but uses different spacing character. `\s` and `\t`). 
    1. It's suggested to use <kbd>space</kbd> rather than <kbd>Tab</kbd>, as it's more flexible to change the spacing. 
1. **Nesting levels** 
    1. We can avoid having to many nesting levels which makes the code hard to read and debug. 
    1. For example, if we have an `IF` statement in a `for` loop to run a code if an expression is `true`, we can use keyword `continue` to skip the code and use `!` to check the expression to avoid having another nested level. 
    ```js 
    //a nested level in for loop 
    for (let i = 0; i < 10; i++) {
        if (cond) {
            statement(); 
        }
    }

    //avoid having a nested code block 
    for (let i = 0; i < 10; i++) {
        if (!cond) continue; 
        statement(); 
    }
    ```
    1. Besides `continue`, we can use keyword `return` and return nothing for a condition if an `IF/ELSE` statement. 
    ```js 
    //an IF/ELSE statement 
    function pow(x, n) {
        if (n < 0) {
            alert("Negative 'n' not supported");
        } else {
            let result = 1;

            for (let i = 0; i < n; i++) {
                result *= x;
            }

            return result;
        }
    }

    //using return and without ELSE
    function pow(x, n) {
        if (n < 0) { //handle n < 0
            alert("Negative 'n' not supported");
            return; //stop and leave the function 
        }

        let result = 1;

        for (let i = 0; i < n; i++) {
            result *= x;
        }

        return result;
    }
    ```
1. **Function placement** 
    1. We can either declare function on the top or at the bottom. 
    1. It's suggested to put the declaration at the bottom, as we can read the code and check the logic from the top. If the functions are named properly, we can even avoid what the functions do. 
1. **Automated Linters**
    1. We can use some extensions such as `linters` to check for pattern issues. 
    1. At the time of learning, <ins>**ESLint**</ins> is the lastest and modern one. 

# Objects 
### Object Basics
1. An `Object` can be created with curly braces with an optional list of properties. A property is a key/value pair (similar to python dictionaries type data). `key` is a `String` which can also be called property name, while the `value` can be any types of data, such as a `String`, `Number`, `Array`, `Boolean`, `Object`. We can use dot notation to retrive the value of a property from an `Object`. 
1. Keyword `delete` can remvoe a property from an `Object`. Note that `delete` returns a boolean value to indicate if a property is deleted. 
1. We can use multiple words to name a property but the `String` should be quoted. Howveer the property with space in its name should be called with square brackets notation. Besides, to call a property by square brackets the `String` should be quoted as it can take a variable. 
    ```js 
    // create an object 
    let obj = new Object(); 
    let obj = {};

    let user = {
        name: 'John', //key is 'name' and value is 'John'
        age: 30, //key is 'age' and value is '30'
    }
    console.log(user.name) //John
    delete user.age; //true 
    console.log(user) 
    //{name: 'John'} 
    let user = {
        name: 'John',
        age: 30,
        'like birds': true, 
    }
    delete user['like birds'] //true
    ``` 
1. We can use square brackets to give new property in an declaration. The element in the square brackets can be a variable from its parent or global scope. However, if we put a quoted string in the declration, 
    ```js 
    let fruit = 'apple'; 
    let bag = {
        [fruit]: 5, //fruit in square brackets is a variable 
        ['fruit']: 'This is "fruit" property',
        veg: 'This is "veg" property',
    };
    console.log(bag.apple) //5 
    console.log(bag)
    // {apple: 5, fruit: 'This is "fruit" property', veg: 'This is "veg" property'}
    ```
1. If we use a function to create an `Object`, we can use a shorthand to assign both property and value at the same time. 
    ```js 
    function makeUser(name, age){
        return {
            name, 
            age
        }
    }
    let user = makeUser('John',  30);
    console.log(user.name); //John
    ```
1. Property names (keys) of an `Object` should be a `String` or `Symbol`. Any other types will turned into `String` type value. This is actually how `Array` in JavaScript is made. JavaScript doesn't actually has `Array` type value but use `Objects` to mimic the attributes of `Array` in other programming language. Besides, properties (keys) in JavaScript `Object` is in order. If the property is a number, it will follow an ascending order. If the key is other data types, it will be ordered by its created time from old to new. Note that if the number has fractions or other symbols, it is not ordered as integer properties. 
    ```js 
    let obj = {
        0: 'test',
    }
    obj[0] === obj['0'] // true
    let arr = []; 
    typeof(arr) //object
    ```
1. Keyword `in` can check if a property is in an `Object`. Though we can also check if a property exists with `=== undefined`, if the property exists and has value as `undefined`, we can't know exactly if the property exists. Nevertheless, in convention, we use `null` to make variable or property empty rather than giving `undefined`. Besides, we can use keyword `in` in `for` loop to loop through the properties of an `Object`. We can use `in` to check if an `Object` is empty. 
    ```js 
    let user = {
        name: 'John',
        age: 30,
        country: 'TH',
        loveCats: undefined,
    }; 
    'name' in user; // true
    'language' in user; // false
    'loveCats' in user // true 
    user.loveCats === undefined // true 
    user.loveCats === user.gender // true (loveCats is a property while gender is not)
    for (let key in user) {
        console.log(key);
    }
    
    // check if a given object has any property
    function isEmpty(obj){
        for (let key in obj) {
            return false; // key has value if there's any key
        }
        return true; // otherwise return true as its empty because for loop doesn't work
    }
    ``` 
1. If we assign an `Object` to a variable, the variable doesn't copy the value of the `Object` but refer to the destination of the `Object` on computer memory. It means that if the `Object` is changed, all the variable assigned to it is changed. However, if the `Object` is assign with the same value rather than the variable, the variables are equal but not identical. 
    ```js 
    let obj1 = {}; 
    let obj2 = obj1; 
    let obj3 = {}; 
    obj1 === obj2; // true 
    obj1 == obj3 // false 
    obj2 == obj3 // false 
    ``` 