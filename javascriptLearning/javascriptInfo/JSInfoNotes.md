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