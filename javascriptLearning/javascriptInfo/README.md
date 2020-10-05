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

# Objects Basics
### Objects 
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
1. If we assign an `Object` to a variable, the variable doesn't copy the value of the `Object` but refer to the destination of the `Object` on computer memory. It means that if the `Object` is changed, all the variable assigned to it is changed. However, if the `Object` is assign with the same value rather than the variable, the variables are equal but not identical. However, if we assign `undefined` or `null` to one of the variables, the other object holds the same value. 
    ```js 
    let obj1 = {}; 
    let obj2 = obj1; 
    let obj3 = {}; 
    obj1 === obj2; // true 
    obj1 == obj3; // false 
    obj2 == obj3; // false 
    obj1 = null; 
    console.log(obj2) //{}
    ``` 

### Symbol 
1. `Object` property keys can be either `String` or `Symbol` type. Othher property names, such as numbers and boolean values will be transferred to `String`. `Symbols` are guaranteed to be unique. 2 `Symbols` that with the same description are not equal. `Symbol` is not `String` type and can't be converted into `String` directly. However, we can use `.toString()` method or `.description` (not a method) to check the description of a `Symbol`. 
    ```js 
    let id1 = Symbol('id');
    let id2 = Symbol('id');
    id1 == id2 // false 
    console.log(id1.toString()) // Symbol(id) 
    console.log(id1.description) // id
    ```
1. We can hide the property name if it's set up by `Symbol`. The only way to call and modify the value of the property is to call the variable that carries the `Symbol` as property. Besides, we can't get the variable that carries the `Symbol` by `for` `in` loop and `Object.keys(obj)` method because the property is "**hidden**". However, if we use `Object.assign()` method, the whole obj including symbols will be duplicated. 
    ```js
    let id = Symbol('id');
    let id1 = Symbol('id');
    let user = {
        name: "John",
        [id]: 123, 
        [id1]: 456,
        id: 'abc',
    };

    console.log(user); // { name: 'John', id: 'abc', [Symbol(id)]: 123, [Symbol(id)]: 456 }
    console.log(user[id]); //123
    console.log(user['id']); //abc 
    console.log(Object.keys(user)); // ['name', 'id']
    for (let key in user) {
    console.log(key); 
    } 
    // name 
    // id

    let obj = {
        [id]: 123, 
    }; 

    let obj1 = Object.assign({}, obj);
    console.log(obj1); // { [Symbol(id)]: 123 }
    console.log(obj == obj1); // false 
    ```
1. **Global symbols** - Though all `Symbols` are unique and different, We can use `Symbol.for(key)` to refer the same symbol value to variables. The `Symbols` created will be stored in `global symbol registry`.  This function will create a `Symbol` by the key it doesn't exist. If the key has been created, it will refer to the `Symbol` with the key. 
    ```js 
    let id = Symbol.for('id');
    let idAgain = Symbol.for('id');
    console.log(id === idAgain); // true 
    ``` 
1. At the opposite, we can use `Symbol.keyFor(sym)` method that takes a variable which has `Symbol` as value and return the `key` of the `Symbol`. Note that the `Symbol` must be in global scope or the method can't find the `Symbol` and returns `undefined` . 
    ```js 
    let sym = Symbol.for('name');
    let sym2 = Symbol.for('id');

    console.log(Symbol.keyFor(sym)); // name 
    console.log(Symbol.keyFor(sym2)); // id
    ```
1. **Summary of `Symbol`** - `Symbol` is a primitive type for unique identifiers which is created with `Symbol()` with an optional description as the argument. Besides, they are always different values though we assign the same description. We can use "**global registry**" and `Symbol.for(key)` to have same-named symbols to be equal. 

### Object methods, "this"
1. We can use either "function expression" or "function declaration" to add a method to an `Object`. 
1. IF we want to call the and use the properties of the `Object` in a method of the `Object` itself, we can use keyword `this` to refer to the `Object`. `this` will refer to different `Object` according to how the method and `this` is called. It means that `this` is dynamic and knows which object it refers to when the code runs. This feature give is both pros and cons that the function using `this` can be reuse, but without pointing to a specific object, it may return wrong value. 
1. Arrow functions have no `this`. These functions will refer to `Object` from its outer element. 
1. In each method of an `Object`, we can `return this` to make the methods chainable. 
    ```js 
    let ladder = {
        step: 0,
        up() {
            this.step++;
            return this;
        },
        down() {
            this.step--;
            return this;
        },
        showStep: function() { // shows the current step
            console.log( this.step );
            return this;
        }
    };

    ladder.up().up().down().up().down().showStep(); // 1 
    ```

### Object to primitive conversion 
1. All objects are `true` in a boolean context. We can check with `Boolean({})` that it returns true. Therefore, an `Object` can only be converted to "**numeric**" or "**string**" type. The numeric conversion happens when we subtract objects or apply mathematical functions. We can use `Number(obj)` or `+obj` with a plus sign to convert an `Object` to a number. 
1. As for the string conversion – it usually happens when we output an object like `console.log(obj)`. We can also pass an `Object` in square bracket notation as the property key of another `Object`. 

# Data types 
### Constructor and operator new
1. Constructor functions technically are regular functions, while they have 2 conventions
    1. They are named with capital letter first. 
    1. They should be executed only with keyword `new`. 
1. When a function is executed with `new`, it does the following steps:
    1. A new empty object is created and assigned to `this`.
    1. The function body executes. Usually it modifies `this`, adds new properties to it.
    1. The value of this is returned.
    ```js 
    let user1 = new User('Jack'); 

    function User(name) {
        // this = {};  (implicitly)

        // add properties to this
        this.name = name;
        this.isAdmin = false;

        // return this;  (implicitly)
    }
    ```
1. We can use `new.target` in a constructor. If we create an `Object` by this constructor function without `new`, it will use `new` keyword to create the `Object`. However, this is not often used, as it's better to have the keyword in the code to know that we've created a new `Object` by the constructor function. 
    ```js 
    function User(name) {
        if (!new.target) { // if you run me without new
            return new User(name); // ...I will add new for you
        }

        this.name = name;
    }
    ```
1. In the constructor function, if we have a `return`, and it returns an `Object`, the constructor function will return the `Object`. If `return` doesn't return anything, it returns an `Object` with `this`. Note that usually constructor function doesn't have `return` statement. 
    ```js 
    function BigUser() {

        this.name = "John";

        return { name: "Godzilla" };  // <-- returns this object
    }

    console.log( new BigUser().name );  // Godzilla, got that object

    function SmallUser() {

        this.name = "John";

        return; // <-- returns this
    }

    console.log( new SmallUser().name );  // John
    ```
1. Besides properties, we can add methods in constructor functions as well. 
    ```js 
    function User(name) {
        this.name = name;

        this.sayHi = function() {
            alert( "My name is: " + this.name );
        };
    }

    let john = new User("John");

    john.sayHi(); // My name is: John
    ```

### Methods of primitives 
1. `Primitives` are not `Objects`. A `Primitive` is a primitive type. There are 7 primitive types in JavaScript: 
    1. `string`
    1. `number`
    1. `bigint`
    1. `boolean`
    1. `symbol`
    1. `null`
    1. `undefined` 
1. An `Object`, on the other hand, can store multiple values as properties. An `Object` can even take a function as a value. 
1. For different primitive values, there are several different kinds of methods that we can use of each of them, though some of the methods are similar. However, we have to understand that primitive values are just values which are considered to be simple, ligh-weighted, and can work as fast as possible. JavaScript allows us to access properties and methods of `string`, `number`, `boolean`, and `symbol` type value through "**object wrappers**". 
    1. In JavaScript, we can also use function constructor such as `Number()`, `String()`, and `Boolean()` with keyword `new` to create `Objects` for primitive values. However, these values are `Object` rather than primitives and some problems occur such as `new Number(0)` is actually an `Object` and its boolean value is `true` which is totally different from a `0`. However, we can use the function without `new` keyword to turn primitive values to one another. 
    1. Note that `null` and `undefined` type value has no "**object wrappers**". 
    ```js 
    let zero = new Number(0); 
    if (zero) console.log("why 0 is true?");
    4 === Number('4'); // true 
    true === Boolean(' ') //true
    '4' === String(4) // true
    ```

### Numbers 
1. In modern JavaScript, there are 2 types of numbers. 
    1. Regular numbers which we use most of the time. 
    1. BigInt that can represent integer at any length between (-2^53) and 2^53. 
1. To createa a variable with large number value, we can give zeros directly, such as creating 1 billion as `100000000`, or we can use `1e9` which means that there are 9 zeros after 1. 
    ```js 
    let billion = 1000000000; 
    let bn = 1e9;
    let ms = 1e-6; 

    console.log(billion);
    console.log(bn);
    console.log(ms);
    console.log((1/1000) === 1e-3); // true 
    ```
1. "**Hex**", "**Binary**", and "**Octal**" numbers are also available in JavaScript though less in use. 
    1. Hexadecimal numbers are usually used for color, encode characters, and many other things. It counts from 0 to 'f' which are 16 digits in total. We can start a number value with `0x` and follows with digits. 
    1. We can use `0b` for binary and `0o` for octal numbers. 
1. For `Numbers`, we can use `num.toString(base)` method which returns a string representation of `num` in the numeral system with the given `base`. Note that the `base` can vary from "**2**" to "**36**". `base=36` system is usually used for shortening a long numeric identifier, such as for shortening URL. 
    ```js 
    let num = 255; 
    console.log(num.toString(16)); // ff 
    console.log(num.toString(2)); // 11111111 
    ```
1. To call a method on a number, we can use double dots ".." without assigning the number to a variable. For example, `16..toString(16)` which is `10` in hexadecimal system. 

**Rounding**
1. To round numbers, there are several commands
    1. `Math.floor()` which rounds "**down**" all the decimals. For example, `Math.floor(3.1)` is `3`, and `Math.floor(-1.1)` is `-2`.
    1. `Math.ceil()` which rounds "**up**" all the decimals. For example, `Math.ceil(3.1)` is `4`.
    1. `Math.round()` which rounds to the "**nearest**" integer. For example, `Math.round(3.1)` is `3`, while `Math.round(3.5)` is `4`.
    1. `Math.trunc()` which takes off anything after the decimal point without rounding. For example, `Math.trunc(3.1)` is `3`, and `Math.trunc(-1.1)` is `-1`. Note that this method is not available in "Internet Explorer" browser. 
1. There are 2 ways to round the number to `n-th` digit after the decimal. We can use expression or `.toFixed()` method to get the number. Note that if the decimal part is shorter than requried, zeros are appended to the end.  
    ```js 
    let num = 1.23456;
    // Multiply and divide 
    console.log(Math.floor(num * 100) / 100); // 1.23456 -> 123.456 -> 123 -> 1.23
    // use toFixed()
    console.log(num.toFixed(2)); // 1.23
    console.log(num.toFixed(4)); // 1.2346
    let n = 1.23;
    console.log(n.toFixed(4)); // 1.2300 
    ```
1. JavaScript, so as other programming languages, has the problem of "**imprecise calculations**". We can fix the problem with `.toFixed()` method that takes off the decimals.  
    ```js 
    console.log((0.1 + 0.2) == 0.3); // false 

    // chop off the decimals 
    let num = (0.1+0.2); 
    console.log(Number(num.toFixed(2)) === 0.3); // true 
    ```
1. Tests: `isFinite` and `isNaN`. `Infinity` and `-Infinity` are special numeric value that is greater and less than anything, while `NaN` represents an error. 
    1. `isNaN()` is a function that converts its argument to a number and tests it for being `NaN`. We can't use `=== NaN` directly because `NaN` is special that it's not enven equal to itself. 
    ```js 
    console.log(isNaN(NaN)); // true
    console.log(isNaN('str')); // true
    console.log(isNaN(NaN === NaN)); // false
    ```
    1. `isFinite()` is a function that converts its argument to a number and return `true` if it's regular number, not `NaN`/`Infinity`/`-Infinity`. Sometimes, `isFinite` is used to validate whether a string value is a regular number. 
    ```js 
    console.log(isFinite('15')); // true 
    console.log(isFinite('str')); // false, because a special value: NaN 
    console.log(isFinite(Infinity)); // false, because a specialvalue: Infinity
    ```
1. We can use `Object.is()` to compare to values. The function is similar to `===`. However, there are 2 special cases. 
    ```js 
    console.log(Object.is(NaN, NaN)); // true 
    console.log(Object.is(0, -0)); // false 
    console.log(Object.is('1', 1)); // false 
    ```
1. Though we can use `+` or `Number()` to convert a value to a number, if the value isn't pure digits, the conversion will fail. We can use `parseInt()` to get a "integer" and `parseFloat()` to get a "float" from a `String`. Note that `parseInt(str, radix)` function have the 2nd argument `radix` which is the base of numeric system. For example, we can check for "hexadecimal" and "octal" numbers. 
    ```js 
    console.log(parseInt('123rem')); // 123
    console.log(parseInt('123.0')); // 123
    console.log(parseFloat('123.456')); // 123.456 
    console.log(parseFloat('123.456.42')); // 123.456 
    console.log(parseInt('ff', 16)); // 255 
    ```
**Math** Object 
1. `Math` is an internal `Object` that has several mathmetical functions. 
1. `Math.random()` returns a fraction from 0 to 1 (not including 1). 
1. `Math.max(a,b,c)` returns the maximum number from the given values. 
1. `Math.min(a,b,c)` returns the minimum number from the given values. 
1. `Math.pow(n, power)` returns `n` raised the given power. For example, `Math.pow(2,10)` is 1024. 

Note: We should be very careful with the calculation by programming language due to "**impercision**" that makes the calculation incorrect. For example, in the exercise, `6.35.toFixed(1)` is `6.3` rather than rounded as `6.4`. We have to use multiplication `console.log(Math.round(6.35 * 10) / 10)` to make the number correct. 

### Strings 
1. In JavaScript the textual data is stored as `Strings`. There is no separate type for a single character, such as "char" type in C language, while "string" is an array of chars. 
1. The internal format for strings is always UTF-16, it is not tied to the page encoding, which could be "UTF-8" or other types. 

**Quotes**
1. `Strings` can be enclosed within either single quotes ('), double quotes ("), and backticks (`). Note that singel and double quotes are essentially the same. We can use one another in the String as part of the value. 
    ```js 
    console.log("I'm Allen");
    ```
1. Backticks, on the other hand, allow us to embed any expression into the string with `${expression}`. Besides, it can allow a string to span multiple lines, which is similar to triple quotes in Python. Backticks also can be used for "template function" with syntax ``func`string` ``.

**Special characters** 
1. We can create multiline strings with single and double quotes with "newline character" `\n`. If we use backticks to make a multilline string, it's the same as using "newline character" to create a `String` with single or double quotes. There are several other special characters such as `\r` (this isn't used alone and should be used with \r\n to represent a line break in Windows text files), `\t` for a tab. Note that all special characters start with a backslash `\`, which is also called "**escape character**". 
    1. `\xXX` is for unicode characters with given hexadecimal unicode `XX`. For example, `\x7A` is the same as `z`. 
    1. `\uXXXX` is a unicode symbol with the hex code `XXXX` in UTF-16 encoding, for instance `\u00A9` is a unicode for the copyright symbol `©`. It must be exactly 4 hex digits. 
    1. `\u{X...XXXXXX}` A unicode symbol with the given UTF-32 encoding (from 1 to 6 hex characters). Some rare characters are encoded with two unicode symbols, taking 4 bytes. This way we can insert long codes.
    ```js 
    let str1 = "Hello\nWorld"; 
    let str2 = `Hello
    World`; 

    console.log(str1 == str2); // true 

    console.log('I\'m Allen'); // escape single quote with backslash 

    console.log("\u00A9"); // ©
    console.log("\u{20331}"); // 佫, a rare Chinese hieroglyph (long unicode)
    console.log("\u{1F60D}"); // 😍, a smiling face symbol (another long unicode)
    ```

**String length** 
1. We can use `.length` to check a `String` value length. Note that `\n` is a single character. Besides, `.length` is a numeric property which is not a function. When calling `.length` we don't put parenthesis. 

**Accessing characters**
1. We can pass a position (index) to either square bracket notation `[]`  or `.charAt()` method to get a character at the given position. Note that the 1st character of the sequnece starts from zero position. Besides, square brackets return `undefined`, while `.charAt()` method returns an empty string when there's no character found. 
1. Similar to `Array`, we can use `for (of)` to loop through each character of a `String`. 

**Strings are immutable**
1. Strings can't be changed in JavaScript. It is impossible to change a character. The usual workaround is to create a whole new string and assign it to the variable instead of the old one. 
    ```js 
    let str = 'Hi'; 
    str[0] = 'h'; // error
    console.log(str[0]); // H

    str = 'h' + str[1]; 
    console.log(str); // hi
    ```

**Changing the case**
1. We can use `.toLowerCase()` method and `toUpperCase()` method to change the case. Note that the methods return a new value without modifying the `String` value. To keep the value, we can assign it to a variable. 

**Searching for substring**
1. `.indexOf()` method takes 2 arguments. The 1st one is the substring we want to find from the `String` value, and the 2nd one is the position to start the search. The method returns the position of the character in the `String`. If the character isn't found, it returns `-1`. Besides, we can use a `while` loop with a counter to check character in the string. The loop keeps iterating until the substring isn't found in the `String` and it `break`. 
    ```js 
    let str = 'Widget with id'; 
    console.log(str.indexOf('Widget')); // 0
    console.log(str.indexOf('id', 2)); // 12

    let str = 'As sly as a fox, as strong as an ox';
    let target = 'as'; // let's look for it
    let pos = 0;
    while (true) {
        let foundPos = str.indexOf(target, pos);
        if (foundPos == -1) break; // stop iteration if substring isn't found
        console.log( `Found at ${foundPos}` );
        pos = foundPos + 1; // continue the search from the next position
    }

    pos = 0; //reset counter
    while ((pos = str.indexOf(target, pos + 1)) != -1) {
        console.log(pos);
    }
    // Found at 7
    // Found at 17
    // Found at 27
    ``` 

**The bitwise NOT trick**
1. This is a very old trick that usually exists in old code. If a number starts with a tilde `~`, the number will be converted to a 32-bit integer (its decimal part will be removed if exists) and reserves all bits in its binary representation. It means for 32-bit integers `~n` equals `-(n+1)`. Therefore, `~n` can only be zero when `n == -1`. We can use this trick to work on `IF` statement. However, this trick is mostly not used, as modern JavaScript introduces other useful methods, such as `.include()`. 
    ```js 
    let str = 'Widget'; 
    if (~str.indexOf('Widget')) {
        console.log('Found it!'); // Found it! 
    }
    ```

**includes, startsWith, endsWith**
1. We can use `.includes()`, `.startsWith()`, and `.endsWith()` methods to check if a substring is in the `String` value. `.includes()` method takes 2 arguments, which is the substring and the starting position. All methods return a boolean value `true` or `false`. 
    ```js 
    let str = 'Widget with id'; 
    console.log(str.includes('Widget')); // true 
    console.log(str.startsWith('Widget')); // true 
    console.log(str.endsWith('Widget')); // false 
    ```

**Get a substring**
1. We can use either `.substring()`, `.substr()`, or `.slice()` to get substring from a `String`. 
1. `.slice()` takes 2 arguments, the first one is the starting position, while the 2nd is the ending (but not included) position. If we give only 1 argument, the method returns a substring from the given starting position till the end. 
1. Besides, we can give negative values to let the method starts reversely. Note that since `-0` is considered the same as `0`, the negavtive value starts from `-1` to count the sequence reversely. 
    ```js 
    let str = 'stringify'; 
    console.log(str.slice(0, 5)); // strin
    console.log(str.slice(0, 1)); // s
    console.log(str.slice(2)); // ringify
    console.log(str.slice(-4, -1)) // gif
    ``` 
1. `.substring()` method is similar to `.slice()` method, as it returns a substring between the given positions. However, it can take starting and ending position reversely. Besides, `.substring()` method doesn't work as `.slice()` as to take negative values to work reversely. 
    ```js 
    let str = 'stringify'; 
    console.log(str.substring(2, 6)) // ring
    console.log(str.substring(6, 2)) // ring
    ```
1. `.substr()` method takes 2 arguments which is the starting position and length of the substring. This allows the user to specify the desireable "**length**" after the given position.
1. Overall, since `.slice()` is more flexible and takes negative arguments and is shorter, it's worthy to remember and use solely with this method over the others. 

**Comparing strings** (#compareString)
1. We know that strings are compared character-by-character in alphabetical order according to "ASCII" or modern "UNICODE" for encoding. In JavaScript, all strings are encoded using "**UTF-16**". It means that each character has a corresponding numeric code. There are special methods that allow to get the character for the code and back. We can use `.codePointAt()` method to check the code of a character. 
1. We can use this method on `String` class `Object` (simialr as using `Object.keys()` or other built-in object related methods). 
    ```js 
    // check code for the character at position '0' 
    console.log('z'.codePointAt(0)); // 122
    console.log('Z'.codePointAt(0)); // 90
    
    // create a character with method 
    console.log(String.codePointAt(90)); // Z

    // 90 is 5a in hexadecimal system
    console.log('\u005a'); // Z

    let str = '';
    for (let i = 0; i <= 220; i++) {
        str += String.fromCodePoint(i);
    }
    console.log(str); // all characters starting from capital A
    ```
1. Most modern browsers support ECMA-402 which allows to compare characters in different language. We can use `str1.localCompare(str2)`. 
    1. If `str1` is greater than `str2`, the method returns a "**positive**" number. 
    1. If `str1` is less than `str2`, the method returns a "**negative**" number. 
    1. If `str1` is the same as `str2`, the method returns `0`. 
    ```js 
    console.log('Österreich'.localeCompare('Zealand')); // -1
    ```

**Internals, Unicode**
1. This part is not used by me at the moment. Therefore, this section is skipped and would be reviewed in the future. The part is mainly about how JavaScript and Unicode handling characters from different languages or emojis. Mostly these special characters are used 2-byte codes, which, however, can have only up to 65,536 combinations ("256 * 256" from "16\*16 \* 16\*16"). 



### Arrays 
**Decalartion**
1. An `Array` in JavaScript can be declared by creating an `Array` "Object" or with square brackets notation. 
    ```js 
    let arr = new Array(); 
    let arr = [];
    ```
1. We can use square brackets notation to add, edit, or remove an element in an `Array`. 
1. To count the length, we can check `.length` property of the `Array`. 
1. An `Array` can store any type of value as its element, such as primitive values, `Object`, and functions. 
    ```js 
    let arr = ['Apple', {name: 'John'}, true, function(){console.log('hello')}];
    
    console.log(arr[1].name);

    arr[3]();
    ```
1. Similar to object, elements in an `Array` are separated by comma. Besides, we can comman on the last element before closing. 

**Methods pop/push, shift/unshift**
1. A "**queue**" (first in first out) is one of the most common uses of an array. For example, we can use `.push()` to append an element to the very end of an `Array` or `.shift()` to remove the element at `arr[0]` which is the very beginning of the `Array` and advance the queue, so the 2nd element becomes the 1st one. 
1. Note that these methods modify the `Array` without returning the `Array` itself. For example, `.push()` method returns the length of the `Array` after adding the new element. Therefore, if we'd like to have the array, we have to assign the array itself to other variables. However, `Arrays` are mutable which means that if the array is modified, the variable pointing to the same array will also change. 
    ```js 
    let arr = [1,2,3,4,5,6]; 
    let list = arr; 
    console.log(arr.push(7)); // 7
    let array = arr.push(8); 
    console.log(array); // 8
    console.log(list); // [1,2,3,4,5,6,7,8]
    ```
1. JavaScript `Array` also supports "**stack**" (last in first out, as dining trays at canteen). We can use `.push()` to add an element at the very end, and `.pop()` to take off the very last element of an `Array`. Note that `.push()` method works as using square bracket notation of `arr[arr.length]`, as we can pass expression to square bracket notation. 
1. `.unshift()` and `.push()` methods takes more than 1 argument to add to an `Array`. 

**Internals**
1. `Array` in JavaScript is a special kind of `Object`, where it uses square brackets to access a property and follows `Object` syntax. In other programming languages, `Array` are data structure that store its elements in a continuous chunk of computer memories with high execution efficiency. However, since `Arrays` are `Objects` in JavaScript, we can also add an element over the `Array` length or a property with dot or square bracket notation. 
    ```js 
    typeof []; // 'object'

    let arr = [1,2,3,4,5]; 
    let obj = {
        0: 1, 
        1: 2, 
        2: 3, 
        3: 4, 
        4: 5, 
    };
    arr[0] === obj[0] // true 
    arr.test = 100;
    console.log(arr) // [1,2,3,4,5,test:100]
    ```
1. Though with the features, `Array` are mostly used to handle ordered data. 

**Performance**
1. Methods `push/pop` run fast, while `shift/unshift` are slow because of the tasks behind the scenes when calling the methods. 
1. When calling `.shift()`, the program not only remove the first element but also renumber all the rest elements in the `Array` and change the property `length`. Therefore, if there are many element in an `Array`, it takes more memory to work when calling `.shift()` or `.unshift()` method. 
1. On the other hand, `.pop()` and `.push()` only add/remove the last element and update property `length`. 

**Loops**
1. Besides using `for` loop with counters, we can use `for of` keyword to call each element in an `Array`. Technically, `Arrays` are `Objects` in JavaScript. We can use square bracket notation with `for in` to loop through the elements as well. 
1. However, it's not good to use `for in` to loop through elements of an `Array` as it may call some prototype methods which we don't want. 
    ```js 
    let fruits = ['Apple', 'Oragne', 'Pear'];
    for (let i = 0; i < arr.length; i++) {
        console.log(fruits[i]);
    }

    for (let fruit of fruits) {
        console.log(fruit);
    }

    for (let key in fruits) {
        console.log(fruits[key]);
    }
    ```

**About length property**
1. `.length` property will be updated automatically when we modify an `Array`. However, it doesn't represent the number of elements in an `Array`, but the last index number plus 1. For example, if we have an `Array` that has only one element but with a very large index number. The `.length` of the `Array` is large as well. 
1. As a property of an `Object`, we can modify `.length` property of an `Array` directly to cut off the elements. However, the process can't be recovered. Though we may add the length back, the elements still are gone. Therefore, we can empty an `Array` with `arr.length = 0`. 
1. Since we can modify `.length` directly, we can add length to an `Array`. The empty slots will be assigned with `undefined`. 
    ```js 
    let arr = [];
    arr[123] = 'abc';
    console.log(arr.length) // 124 

    let array = [1,2,3,4,5]; 
    array.length = 2; 
    console.log(array) // [1,2] 
    array.length = 0;
    console.log(array) // [] 
    ```

**Multidimensional arrays**
1. We can save arrays in another array to create multidimensional arrays. 
    ```js 
    let matrix = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
    ]

    console.log(matrix[1][1]) // 5
    ```

**toString**
1. If we use `.toString()` method on an `Array`, the elements of the `Array` are concatenated but separated with comma. `Arrays` have no `Symbol.toPrimitive` nor `valueOf` and has only `toString()` method. Therefore, `[]` becomes an empty `String`. 
    ```js 
    let arr = [1,2,3]; 
    console.log(String(arr) === '1,2,3'; // true 

    console.log([]+1); // 1 
    console.log([1]+1); // 11 
    console.log([1,2]+1); // 1,21 
    ``` 

**Exercise** 
1. One of the exercises in this section is the "[A maximal subarray](https://en.wikipedia.org/wiki/Maximum_subarray_problem)". The following is the first approach which use nested `for` loop to create `Arrays` and calculate the results. However, this method has O(n^2). Besides, the code has several redudant parts. For example, we can calculate the sum result in the very first nested for loops without having the 2nd set. 
    ```js 
    let numArr = [1, -2, 3, 4, -9, 6]; 

    console.log(getMaxSubSum(numArr));
    console.log(getMaxSubSum([-1, 2, 3, -9])); //5
    console.log(getMaxSubSum([2, -1, 2, 3, -9])); // 6 
    console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
    console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
    console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100
    console.log(getMaxSubSum([1, 2, 3])); // 6

    function getMaxSubSum(arr) {
        let number = 0; 
        let numbers = [];
        for (let i = 0; i < arr.length; i++) {
            let list = [];
            for (let j = i; j < arr.length; j++) {
                list.push(arr[j]);
            }
            numbers.push(list); 
        }
        // return numbers;
        let empty = [];
        numbers.forEach(function(ele){
            let num = 0;
            ele.forEach(function(element){
                num += element;
                empty.push(num);
            })
        })
        // return empty;
        for (let e of empty) {
            if (e > number) {
                number = e;
            }
        }
        return number; 
    }
    ```
1. A better solution is to have 2 variables to "remember" the numbers and use `Math.max()` function to keep the larger number as the result. The algorithm is optimized and has `O(n)` as time complexity. 
    ```js 
    function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;

    for (let item of arr) { // for each item of arr
        partialSum += item; // add it to partialSum
        maxSum = Math.max(maxSum, partialSum); // remember the maximum
        if (partialSum < 0) partialSum = 0; // zero if negative
    }

    return maxSum;
    }

    console.log(getMaxSubSum([-1, 2, 3, -9]) ); // 5
    console.log(getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
    console.log(getMaxSubSum([-2, -1, 1, 2]) ); // 3
    console.log(getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
    console.log(getMaxSubSum([1, 2, 3]) ); // 6
    console.log(getMaxSubSum([-1, -2, -3]) ); // 0
    ```

### Array Methods 
**Methods that modifies**
1. Since `Array` is an `Object` in JavaScript, we can use keyword `delete` to delete an element of an `Array`. However, though we delete an element from the `Array`, the `length` property of `Array` is still the same, as the method doesn't affect to `length` property. 
1. We can use `.splice()` (which is like a swiss army knife that can "insert", "remove", and "replace" elements. The syntax is as `arr.splice(index[, deleteCount, elem1, ..., elemN])`. The method starts from `index`, removes `deleteCount` elements, inserts `elem1, ..., elemN`, and return the `Array` of removed elements. (This method is similar to other methods that it doesn't return the modified `Array` itself.)
1. We can also use `.splice()` method to insert elements without any removals by setting `deleteCount` to 0 and giving the position to insert the elements. 
    ```js 
    let arr = ['I', 'study', 'JavaScript', 'right', 'now'];
    let removed = arr.splice(0,2); 
    console.log(arr) // ['I', 'study'] which is the list of removed elements

    arr.splice(2, 0, 'complex', 'language'); 
    console.log(arr) // ['JavaScript', 'right', 'complex', 'language', 'now']
    ```
1. We can give negative indexes as the starting position of an `Array`, which will be counted reversely by the end. Note that if we want to add to the end of the `Array`, we can sue `.push()` method. In other programming language, such as Python, negative 1 `-1` starts to count from the last element of the list reversely. Besides, `.push()`, we can use `.concat()` method to extend an `Array`. 
    ```js 
    let arr = [1,2,5];
    arr.splice(-1, 0, 3, 4); 
    console.log(arr) //[1,2,3,4,5]
    ```

**Methods that return a new Array**
1. `.slice()` is another method that returns a new `Array` copying the items from `start` to `end` (not including). Both `start` and `end` can be negative. If we don't give any argument, the method will return a copy of `Array`. Note that since `Array` is mutable and we can use the method to make a copy to another variable to store the same `Array` value without affecting to one another by regular variable assignment. 
    ```js
    let arr = ['t', 'e', 's', 't']; 
    console.log(arr.slice(1,3)) // ['e','s'] (copy from 1 to 3)
    console.log(arr.slice(-2)) // ['s', 't'] (copy from -2 till the end)
    console.log(arr.slice()) // ['t', 'e', 's', 't'] (a copy of array)
    ```
1. `.concat()` method takes `Array` as arguments and returns a new `Array` that concate the first `Array` with the given ones. Note that `.concat()` method also takes arguments other than `Array`. It works as `.push()` method that it adds the given arguments as elements at behind of the `Array`. If we give an `Object` as argument, the `Object` value will become an element of the `Array`. 
    ```js 
    let arr = [1,2]; 
    console.log(arr.concat([3,4])); // [1,2,3,4]
    console.log(arr.concat([3,4], [5,6])); // [1,2,3,4,5,6]
    ```
1. If an array-like object has a special `Symbol.isConcatSpreadable` property, the object will be treated as an array by `.concat()` method and the elements of the `Object` will be added to the array.   
    ```js 
    let arr = [1,2];
    let arrayLike = {
        0: 'something', 
        1: 'else',
        [Symbol.isConcatSpreadable]: true, 
        length: 2,
    }; 
    console.log(arr.concat(arrayLike)); // [1,2,'something','else'] 
    ```

**forEach**
1. `.forEach()` method takes a function as argument to allow every element in the `Array` runs the function. The syntax of the function is `function(item, index, array)`, which "**item**" is the element in the `Array` in every iteration, "**index**" is the position of the element in the `Array`, and "**array**" is the `Array` it self. 
    ```js 
    ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
        console.log(`${item} is at index ${index} in ${array}`);
    });
    // Bilbo is at index 0 in Bilbo,Gandalf,Nazgul
    // Gandalf is at index 1 in Bilbo,Gandalf,Nazgul
    // Nazgul is at index 2 in Bilbo,Gandalf,Nazgul
    ```

**Searching in array** 
1. `.indexOf()`, `.lastIndexOf()`, and `.includes()` have the same syntax and work essentially the same as their `String` counterparts. 
    1. `arr.indexOf(item, from)` – looks for item starting from index from, and returns "**the index**" where it was found, otherwise `-1`.
    1. `arr.lastIndexOf(item, from)` – works the same as `.indexOf()`, but looks for from right to left.
    1. `arr.includes(item, from)` – looks for item starting from index from, returns a boolean `true` if found. 
1. These methods use `===` comparison, so it does a strict match to find a boolean `false` is in the `Array` rather than `0` or empty string `''`. 
1. Note that `.indexOf()` and `.lastIndexOf()` can't return `NaN` in an `Array` though it exists. Both methods will return `-1` as not found. However, `.includes()` method can correctly handle the value 
    ```js 
    let arr = [1, 0, false]; 
    console.log(arr.indexOf(0)); // 1
    console.log(arr.indexOf(false)); // 2
    console.log(arr.indexOf(null)); // -1

    console.log(arr.includes(1)); // true 

    arr = [NaN]; 
    console.log(arr.indexOf(NaN)); // -1 
    console.log(arr.includes(NaN)); // true  
    ```

**find and findIndex**
1. If we have an array of objects, we can use `.find()` method to check if any of the objects matches a specific condition. If the method returns `true`, the search (iteration) stops and the `item` (which is the `Object`) is returned. If there's nothing found, the method returns `undefined`. Though `.find()` method takes a function that can have `index` and `array` as parameter, these arugments are seldom passed and used. 
1. `.findIndex()` is similar to `.find()`. However, `.findIndex()` returns the index of the matched `Object` element rather than the `Object` itself. 
    ```js 
    let users = [
        {id: 1, name: 'John'},
        {id: 2, name: 'Pete'},
        {id: 3, name: 'Mary'},
    ]; 
    let user = users.find(item => item.id == 1);
    console.log(user.name); // John
    ``` 

**filter**
1. `.filter()` is similar to `.find()`. However, unlike `.find()` that returns only the first matched element, `.filter()` returns an `Array` of all matched elements. 
    ```js 
    let users = [
        {id: 1, name: 'John'},
        {id: 2, name: 'Pete'},
        {id: 3, name: 'Mary'},
    ]; 
    let someUsers = users.filter(item => item.id < 3); 
    console.log(someUsers.length) // 2
    ``` 

**Transform an array**
1. `.map()` method takes a function as its argument and call the function to work on each of the elements and returns an `Array` of the result. 
    ```js 
    let lengths = ['Bilbo', 'Gandalf', 'Nazgul'].map(item => item.length); 
    console.log(lengths); // [5, 7, 6]
    ``` 
1. `.sort()` method sorts the `Array` it works on, change the `Array`'s elements order, and return the sorted `Array`. Note that the method modify the `Array` and return the sorted `Array` (both arrays are the same). However, the elements are sorted as `Strings` by default. In addition, we can pass a function to `.sort()` method to sort the elements of the array on preference. 
1. To sort the array with ascending order, we can pass a function that returns positive number of an expression. On the other hand, if the function returns a negative number, the order will be descending. 
    ```js 
    let arr = [1, -2, 15, 2, 0, 8]; 
    arr.sort(function(a, b) {
        return a - b;
    });

    console.log(arr); // [ -2, 0, 1, 2, 8, 15 ]

    arr.sort(function(a, b) {
        return b - a;
    });

    console.log(arr); // [ 15, 8, 2, 1, 0, -2 ]
    ```
1. On the other hand, if we'd like to compare and sort `Strings`, we'd use `str.localeCompare()` method to sort the letters. We can refer to the section of `Strings`. 

**Reverse**
1. `.reverse()` method reverses the order of element in an `Array`. 
    ```js 
    let arr = [1,2,3,4,5]; 
    arr.reverse(); 
    console.log(arr); // [ 5, 4, 3, 2, 1 ]
    ```

**Split and Join**
1. `.split()` method take a delimiter `delim` that separate the given `String` and return an `Array` of separated elements. Note that this method take a 2nd argument to limit the array length, though it's rarely used. Besides, if we pass an empty `String`, the method will separate every character in the in the `String`, including whitespace. 
    ```js 
    let names = 'Bilbo, Gandalf, Nazgul';
    let arr = names.split(', ');
    console.log(arr); // ['Bilbo', 'Gandalf', 'Nazgul']

    for (let name of arr) {
        console.log( `A message to ${name}.` ); // A message to Bilbo  (and other names)
    }
        
    // A message to Bilbo.
    // A message to Gandalf.
    // A message to Nazgul.

    let list = 'Bilbo, Gandalf, Nazgul, Saruman';
    let arr = names.split(', ', 2); 
    console.log(arr); // ['Bilbo', 'Gandalf']
    ```
1. `.join()` is contrast to `.split()` that it concatenate elements from an `Array` into a single `String`. Besides, we can pass a delimiter to in between the elements. Note that this method returns a `String` rather than modify the `Array`. 
    ```js 
    let arr = ['Bilbo', 'Gandalf', 'Nazgul'];
    let str = arr.join(';'); // glue the array into a string using ;
    console.log( str ); // Bilbo;Gandalf;Nazgul
    ```

**reduce/reduceRight**
1. Besides `.forEach()`, `for`, `for..of`, and `map` methods to loop iterate through `Array`, we can use `.reduce()` method to calculate a single value by manipulating through an `Array`. The syntax is as the followings `let value = arr.reduce(function(accumulator, item, index, array){...}, [initial])`. 
    1. `accumulator` is the result of manipulation from the last iteration. Its value will be `initial` in the first iteration if the argument is given. 
    1. `item` is the current array element. 
    1. `index` is its position. 
    1. `array` is the `Array` itself. 
1. `initial` value is an optional argument to pass into the function. If we don't give the argument, the method will use the first element of the `Array` as the `initial`. Note that this can break the program, as using `.reduce()` method of an empty `Array` will cause error. Besides, the method will have one fewer iterations because the 1st element is not manipulated.  
    ```js 
    let arr = [1,2,3,4,5]; 
    let counter = 0; 
    let result = arr.reduce(function(sum, current) {
        counter++;
        return sum + current; 
    }); 
    console.log(counter); // 4 
    console.log(result); // 15 

    counter = 0; 
    result = arr.reduce(function(sum, current) {
        counter++;
        return sum + current; 
    }, 0); 
    console.log(counter); 
    console.log(result); // 15 

    let giveSix = arr.reduce((sum, current) => sum + current, 6); 
    // console.log(giveSix); // 15 

    let empty = []; 
    let res = empty.reduce((sum, current) => sum + current, 0); 
    // console.log(res);
    ```
1. `.reduceRight()` method works exactly the same as `.reduce()`, while it work from right to left. 

**Array.isArray**
1. Since `Array` in JavaScript is built from `Object`, we can't use `typeof` to check the type directly. Therefore, we can use `Array.isArray(arr)` to check if `arr` is an `Array` in JavaScript. This method returns `true` if the variable is an `Array`.
    ```js 
    console.log(Array.isArray([])); // true 
    console.log(Array.isArray({})); // false 
    ```

**Most methods support "thisArg"**
1. Almost all array methods that call functions, such as `.find()`, `.filter()`, and `.map()`, accept an optional additional parameter `thisArg` (which is passed as the last argument). The value of `thisArg` parameter becomes `this` for the function. 
1. For example, in the example below, if we don't pass `army` object to the method, `army.canJoin` becomes a standalone function which has no `this` to refer to, as `this` is `undefined`. However, we can use `users.filter(user => army.canJoin(user))` which does the same as passing the object. 
    ```js 
    let army = {
        minAge: 18, 
        maxAge: 27, 
        canJoin(user) {
            return user.age >= this.minAge && user.age < this.maxAge; 
        }
    }; 

    let users = [
        {age: 16},
        {age: 20},
        {age: 23},
        {age: 30},
    ]

    let soldiers = users.filter(army.canJoin, army); 
    console.log(soldiers.length); // 2
    console.log(soldiers[0].age); // 20

    let soldiers2 = users.filter(user => army.canJoin(user)); 
    console.log(soldiers2.length); // 2
    console.log(soldiers2[0].age); // 20
    ```

#### Exercise 1 - Translate border-left-width to borderLeftwidth 
1. Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
1. Attemptive solution. This approach doesn't work, as it also takes the first text to change the first letter to uppercase. Besides, if the input `String` starts with a dash sign "-", the method `.toUpperCase()` returns an error because the method can't work on emtpy `String`. 
    ```js 
    function camelize(str) {
        let list = str.split('-'); 
        let arr = [];
        let arr = list.map(function(item){
            return item[0].toUpperCase() + item.slice(1); 
        });
        let string = arr.join('');
        return string; 
    }
    ```
1. Solution 
    ```js 
    function camelize(str) {
        let list = str.split('-'); 
        let arr = [];
        for (let i = 1; i < list.length; i++) {
            let text = list[i][0].toUpperCase() + list[i].slice(1);
            arr.push(text); 
        }
        arr.unshift(list[0]); 
        let string = arr.join('');
        return string; 
    }
    ```
1. Answer 
    ```js 
    function camelize(str) {
        return str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
    }
    ```

#### Exercise 2 - Filter range
1. Write a function filterRange(arr, a, b) that gets an array arr, looks for elements between a and b in it and returns an array of them. The function should not modify the array. It should return the new array.
1. Attemptive solution. `.filter()` takes a function and push the element to a new `Array` if the function returns `true` when iterates the element. 
    ```js 
    function filterRange(arr, a, b) {
        let list = []; 
        arr.forEach(function(e){
            if (e >= a && e <= b) {
                list.push(e); 
            }
        });
        return list; 
    }
    let arr = [5, 3, 8, 1];
    let filtered = filterRange(arr, 1, 4);
    ```
1. Solution
    ```js 
    // long version
    function filterRange(arr, a, b) {
        let list = arr.filter(function(e){
            if (e >= a && e <= b) return true; 
        }); 
        return list; 
    }

    // shorthad 
    function filterRange(arr, a, b) {
        return arr.filter(item => (a <= item && item <= b)); 
    }
    ```

#### Exercise 3 - Sort in decreasing order 
1. Sort elements of an `Array` to decreasing order. 
1. Attemptive solution. `.sort()` method takes a function and check adjacent elements one by one. If the function returns positive nubmer, the `Array` will be sorted in "**descending**" order. If the function returns negative, the `Array` will be sorted in "**ascending**" order. 
    ```js 
    let arr = [5, 2, 1, -10, 8];
    arr.sort((a, b) => ((a-b) < 0) ? 1 : -1 );
    console.log(arr) // [ 8, 5, 2, 1, -10 ]
    ``` 
1. Solution 
    ```js 
    let arr = [5, 2, 1, -10, 8];
    arr.sort((a, b) => b - a);
    console.log(arr) // [ 8, 5, 2, 1, -10 ]
    ```

#### Exercise 4 - Copy and sort array 
1. We'd like to get a copy of `Array` sorted without modifying the `Array`. 
1. Attemptive solution. `.slice()` return a copy of `Array` by giving starting and ending position. If there's no start/end point given, the method returns a copy of the whole `Array`. `.sort()` method is similar that it also returns a sorted `Array` by comparing `Strings`. However, from the notes, it'd be better to use `.localCompare` to ensure the letters are compared correctly if there's special characters, such as letters from the other language. 
    ```js 
    function copySorted(arr){
        let list = arr.slice(); 
        list.sort(function(a, b){
            return a.localeCompare(b);
        });
        return list; 
    }
    ```
1. Solution 
    ```js 
    function copySorted(arr) {
       return arr.slice().sort();
    }
    ```

#### Exercise 5 - Create an extendable calculator 
1. First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -. 
1. Attemptive solution. When solving this problem, we should be careful about the data structure. The Attemptive solution is an deadend for the following solution because it's not extendable. The Attemptive solution was going to use `.call()` method which is not the right direction. The solution uses very basic features of `Objects`. Besides, the value of a key/value pair in `Object` can be any thing, even an expression. 
    ```js 
    function Calculator(){
        this.calculate = function(exp){
            let arr = exp.split(' '); 
            // return arr;
            if (arr[1] == '+') return +arr[0] + +arr[2]; 
            if (arr[1] == '-') return +arr[0] - +arr[2]; 
        }
    }
    ```
1. Solution 
    ```js 
    function Calculator(){
        this.methods = {
            '-': (a,b) => a - b,
            '+': (a,b) => a + b,
        }; 

        this.calculate = function(exp){
            let arr = exp.split(' '); 
            a = +arr[0];
            op = arr[1];
            b = +arr[2];

            if (!this.methods[op] || isNaN(a) || isNaN(b)) {
                return NaN;
            }

            return this.methods[op](a, b);
        }; 

        this.addMethod = function(name, func) {
            this.methods[name] = func;
        };
    }
    ```

#### Exercise 6 - Map to names  
1. You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
    ```js 
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };
    let users = [ john, pete, mary ];

    let names // your code 
    console.log(names); // ['John', 'Pete', 'Mary']
    ```
1. Attemptive solution. 
    ```js 
    let names = users.map(function(e){
        return e.name;
    })
    ```
1. Solution 
    ```js 
    let names = users.map(item => item.name); 
    ```

#### Exercise 7 - Map to objects 
1. You have an array of `user` objects, each one has `name`, `surname` and `id`. Write the code to create another array from it, of objects with `id` and `fullName`, where `fullName` is generated from `name` and `surname`.
    ```js 
    let john = { name: "John", surname: "Smith", id: 1 };
    let pete = { name: "Pete", surname: "Hunt", id: 2 };
    let mary = { name: "Mary", surname: "Key", id: 3 };
    let users = [ john, pete, mary ];
    let usersMapped // your code 
    /*
    usersMapped = [
        { fullName: "John Smith", id: 1 },
        { fullName: "Pete Hunt", id: 2 },
        { fullName: "Mary Key", id: 3 }
    ]
    */
    console.log(usersMapped[0].id) // 1
    console.log(usersMapped[0].fullName) // John Smith
    ```
1. Attemptive solution 
    ```js 
    let usersMapped = users.map(function(e){
        let obj = {}; 
        obj.fullName = e.name + ' ' + e.surname;
        obj.id = e.id;
        return obj;
    });
    ``` 
1. Solution. Note that for arrow function notation, we need additional parenthesis to return the expression value. 
    ```js 
    let usersMapped = users.map(user => ({
        fullName: `${user.name} ${user.surname}`,
        id: user.id
    }));
    ```

#### Exercise 8 - Sort users by age 
1. Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.
    ```js 
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };

    let arr = [ pete, john, mary ];

    sortByAge(arr);

    // now: [john, mary, pete]
    alert(arr[0].name); // John
    alert(arr[1].name); // Mary
    alert(arr[2].name); // Pete
    ```
1. Attemptive solution. `.sort()` method returns a new sorted `Array`. Note that `.sort()` takes a function that check adjacent elements of a given `Array` and sort the elements in ascending/descending orders according to the relationship between 2 compared elements. 
    ```js 
    function sortByAge(users) {
        users.sort(function(a, b){
            if(a.age > b.age) return 1; 
            return -1;
        });
    }
    ```
1. Solution 
    ```js 
    function sortByAge(users){users.sort((a, b) => (a.age > b.age) ? 1 : -1)};
    ```

#### Exercise 9 - Shuffle an array
1. Write the function shuffle(array) that shuffles (randomly reorders) elements of the array. Multiple runs of shuffle may lead to different orders of elements. All element orders should have an equal probability.
    ```js 
    let arr = [1, 2, 3];

    shuffle(arr);
    // arr = [3, 2, 1]

    shuffle(arr);
    // arr = [2, 1, 3]

    shuffle(arr);
    // arr = [3, 1, 2]
    // ...
    ```
1. Attemptive solution. The main idea is to use `Math.random()` to randomly generate a positive/negative number for `.sort()` method to reorder the array. Note that we can skip the variable that keeps the returned `Array` because `.sort()` not only return a sorted `Array` but modified the given `Array`. 
    ```js 
    function shuffle(array){
        let list = array.sort(function(){
            let num = Math.floor(Math.random() * (2) -1);
            return num;
        }); 
        return list; 
    }

    // Reference for generate a random number between given min and max 
    function generateRandom(min, max){
        return Math.floor(Math.random() * (max - min) + min); 
    }
    ```
1. Solution. The regular method to use `.sort()` isn't good enough, as we don't know exactly how the algorithm works according to its runtime (JavaScript engine). Therefore, we can use `Fisher-Yates shuffle`. The idea is to walk the array in the reverse order and swap each element with a random one before it. 
    ```js 
    // Bias shuffle 
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }

    // Fisher-Yates shuffle
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

            // swap elements array[i] and array[j]
            // we use "destructuring assignment" syntax to achieve that
            // you'll find more details about that syntax in later chapters
            // same can be written as:
            // let t = array[i]; array[i] = array[j]; array[j] = t
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    ```

#### Exercise 10 - Get average age 
1. Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age. The formula for the average is `(age1 + age2 + ... + ageN) / N`.
    ```js 
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 29 };

    let arr = [ john, pete, mary ];

    console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
    ```
1. Attemptive solution. The main idea is to learn how to use `.reduce()` method. 
    ```js 
    // Long version
    function getAverageAge(users) {
        let total = users.reduce(function(acc, e){
            return (acc + e.age);
        }, 0)
        return (total/users.length); 
    }

    // Short version
    function getAverageAge(users) {
        return (users.reduce((acc, item) => acc + item.age, 0)/users.length);
    }
    ```
1. Solution 
    ```js 
    function getAverageAge(users) {
        return users.reduce((prev, user) => prev + user.age, 0) / users.length;
    }
    ```

#### Exercise 11 - Filter unique array members
1. Let `arr` be an array. Create a function `unique(arr)` that should return an array with unique items of `arr`. 
    ```js 
    let strings = ["Hare", "Krishna", "Hare", "Krishna",
        "Krishna", "Krishna", "Hare", "Hare", ":-O"
    ];

    console.log( unique(strings) ); // Hare, Krishna, :-O
    ```
1. Attemptive solution. The idea is to check if an element has appeared or not. 
    ```js 
    function unique(arr){
        let list = [] 
        for (let e of arr) {
            if (!list.includes(e)) {
                list.push(e); 
            }
        }
        return list;
    }
    ```
1. Solution. This is only a solution for small array set as its time complexity is O(n), as it has to go through all the elements in the `Array`. If we use another `for` loop in iteration, it will use O(n^2) time solve the problem. The optimal solution will be introduced in a later section "Map and Set". 
    ```js 
    function unique(arr) {
        let result = [];
        for (let str of arr) {
            if (!result.includes(str)) {
            result.push(str);
            }
        }
        return result;
    }

#### Exercise 12 - Create keyed object from array 
1. Let’s say we received an array of users in the form `{id:..., name:..., age... }`. Create a function `groupById(arr)` that creates an object from it, with `id` as the key, and array items as values and use `.reduce()` method to solve the problem. 
    ```js 
    let users = [
        {id: 'john', name: "John Smith", age: 20},
        {id: 'ann', name: "Ann Smith", age: 24},
        {id: 'pete', name: "Pete Peterson", age: 31},
    ];

    let usersById = groupById(users);

    /*
    // after the call we should have:

    usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
    }
    */
    ```
1. Attemptive solution. The main idea is to assign a property to the `Object` and assign the whole object as value ot the property. The other critical feature here is that we can use square brackets which takes expression to assign a property to an `Object`. Besides, since the square brackets take expression, we can skip getting the property from an `Object` and assign to a variable. 
    ```js 
    // without using reduce method 
    function groupById(users) {
        let obj = {};
        users.forEach(function(e){
            let id = e.id; // we can actual put e.id in the square brackets directly to shortern the code 
            obj[id] = e;
        });
        return obj;
    }

    // using reduce 
    function groupById(users) {
        return users.reduce(function(acc, item){
            let id = item.id
            acc[id] = item;
            return acc;
        }, {})
    }
    ```
1. Solution
    ```js 
    function groupById(array) {
        return array.reduce((obj, value) => {
            obj[value.id] = value;
            return obj;
        }, {})
    }
    ```

### Iterables 
1. "Iterable" object is the concept for `Objects` which can be iterated through `for of` loop. Not only `Arrays` but many other built-in objects are iterable, such as `String`. 

**Symbol.iterator**
1. We can add a method `Symbol.iterator` which is special built-in symbol to make an `Object` be iterable. This `symbol.iterator` method should return a "**iterator**" (which is an `Object` with method `next()`) to make `for of` loop works on the `Ojbect` that is returned by `next()` method. The result returned by `next()` method should be an `Object` which structure is `{done: Boolean, value: any}`. When `done=true`, it means iterations are over or the `value` will be the next value. 
1. For example, we can make the `range` and iterate through 1 to 5. 
    ```js 
    let range = {
        from: 1, 
        to: 5,
    }; 

    // 1. call to for..of initially calls this
    range[Symbol.iterator] = function() {
        // ...it returns the iterator object:
        // 2. Onward, for..of works only with this iterator, asking it for next values
        return {
            current: this.from,
            last: this.to,

            // 3. next() is called on each iteration by the for..of loop
            next() {
                // 4. it should return the value as an object {done:.., value :...}
                if (this.current <= this.last) {
                    return { done: false, value: this.current++ };
                } else {
                    return { done: true };
                }
            }
        };
    };

    // now it works!
    for (let num of range) {
        console.log(num); // 1, then 2, 3, 4, 5
    }
    ```
1. In the example above, we know that the object `range` doesn't have `next()` method itself and use `range[Symbol.iterator]()` to create another `Object` (which is the "iterator" and its `next()` method will return the value). Therefore, technically, the "**iterator**" and the `Object` which is iterated are different `Objects`. Nevertheless, we can merge them make `range` `Object` to work as "**iterator**". 
    ```js 
    let range = {
        from: 1,
        to: 5,

        [Symbol.iterator]() {
            this.current = this.from;
            return this;
        },

        next() {
            if (this.current <= this.to) {
            return { done: false, value: this.current++ };
            } else {
            return { done: true };
            }
        }
    };
    ```
1. If we set `range.to = Infinity`, `range` `Object` will generate infinite sequence of pseudorandom numbers. Though `for of` will iterate endlessly, we can use `break` to stop the iterations.

**String is iterable**
1. Arrays and strings are most widely used built-in iterables. `for of` loop will go through every character of a `String` value. This also works with surrogate pairs. 
    ```js 
    let str = '𝒳😂';
    for (let char of str) {
        console.log( char ); // 𝒳, and then 😂
    }
    ```

**Calling an iterator explicitly**
1. We’ll iterate over a string in exactly the same way as `for..of`, but with direct calls. This code creates a string iterator and gets values from it "**manually**". That is rarely needed, but gives us more control over the process than `for..of`. For instance, we can split the iteration process: iterate a bit, then stop, do something else, and then resume later.
    ```js 
    let str = "Hello";

    // does the same as
    // for (let char of str) alert(char);

    let iterator = str[Symbol.iterator]();

    while (true) {
        let result = iterator.next();
        if (result.done) break;
        console.log(result.value); // outputs characters one by one
    }
    ```

**Iterables and array-like**
1. `Iterables` are objects that implement the `SYmbol.iterator` method
1. `Array-like` are objects that have indexes and `length` property which makes the object look like arrays. 
1. For instance, `Strings` are both "**iterable**" (`for..of` works on them) and "**array-like**" (they have numeric indexes and length).
1. Both `iterables` and `array-likes` are usually not arrays, they don’t have `push`, `pop` method etc. That’s rather inconvenient if we have such an object and want to work with it as with an array.

**Array.from**
1. For **iterables** and **array-like** `Objects`, we can use `Array.from(obj)` method to create an `Array` which takes properties of the `obj`. `Array.from` at the line `(*)` takes the object, examines it for being an **iterable** or **array-like**, then makes a new array and copies all items to it.
    ```js 
    // works on array-like object 
    let arrayLike = {
        0: "Hello",
        1: "World",
        length: 2
    };

    let arr = Array.from(arrayLike); // (*)
    console.log(arr.pop()); // World (method works)
    console.log(arr); // ['Hello']

    // works on iterables
    let range = {
        from: 1,
        to: 5,

        [Symbol.iterator]() {
            this.current = this.from;
            return this;
        },

        next() {
            if (this.current <= this.to) {
            return { done: false, value: this.current++ };
            } else {
            return { done: true };
            }
        }
    };

    let arr = Array.from(range); 
    console.log(arr); // [1, 2, 3, 4, 5]
    ```
1. `Array.from()` method take another 2 arguments which is `mapFn` and `thisArg`. `mapFn` is a function that can be applied to all the elements before they are pushed to the new `Array`. We can also use the method to turn a `String` into an `Array`. 
    ```js 
    let range = {
        from: 1,
        to: 5,

        [Symbol.iterator]() {
            this.current = this.from;
            return this;
        },

        next() {
            if (this.current <= this.to) {
            return { done: false, value: this.current++ };
            } else {
            return { done: true };
            }
        }
    };
    let arr = Array.from(range, num => num * num); 
    console.log(arr) // [1, 4, 9, 16, 25]
    

    let str = 'abcde'; 
    let arr = Array.from(str); 

    console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

    let text = 'abcde'; 
    let array = []; 
    for (let char of text) {
        array.push(char); 
    }
    console.log(array); // [ 'a', 'b', 'c', 'd', 'e' ]

    // check if 2 arrays are identical
    let counter = 0; 
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === array[i]) {
            counter++;
        }
    }
    console.log(counter === 5); // true 
    ```

### Map and Set
1. Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type. A regular object will turn its key into strings. For example, if we give a boolean `true` as the key of an object, the key will be turn into `true` as a string value. (Note that we can still use boolean `true` to access the value of the property of the object. However, the property can also be access with dotnotation or square brackets with string values). We can use following methods to manipulate `Map` objects in JavaScript.
    1. `new Map()` - Create a new `Map` object
    1. `map.set(key, value) - Set a value to the `Map` object according to the key.
    1. `map.get(key)` - Retrieve the value of the given key on the `Map` object. This method returns `undefined` if the key doesn't exist.
    1. `map.has(key)` - Check if a key has been used in the `Map` object. This method returns a boolean `true` or `false`.
    1. `map.delete(key)` - Remove the value of the given key in the `Map` object.
    1. `map.clear()` - Remove all the values of the `Map` object. 
    1. `map.size` - This method is similar to `.length` property to check the number of elements of the `Map` object. 
1. Therefore, a Number `1` and String `'1'` can be 2 different keys in a `Map` object. Besides, though we can use square brackets to set and retreive values of a key, JavaScript considers this method as regular Object method and manipulate the `Map` object as a regular object. In addition, a `Map` object can use not only  primitive types as its key but also `Arrays` and `Objects`.
1. `Map` objects use `SameValueZero` algorithm to compare their keys for equivalence, which is similar to strict equality `===`. However, in this algorithm, `NaN` is considered equal to `NaN`. Besides, this algorithm can't be changed or customized. 
1. We can chain the methods of a `Map` object to manipulate its keys and values.
    ```js
    map.set('1', 'str1')
      .set(1, 'num1')
      .set(true, 'bool1');
    ```

**Iteration over `Map`**
1. There 3 methods to iterate through elements of a `Map` object. These methods are similar to those built-in methods of regular objects. However, all the iterables are array-like objects which can only be iterated through `for...of` loop. We can't use square brackets and position index to access elements. 
    1. `map.keys()` returns an iterable for keys. This is similar to `Object.keys([object])` to create an array of keys of an object.
    1. `map.values()` returns an iterable for values. This is similar to `map.keys()` while this method returns a list of values rather than keys.
    1. `map.entries()` returns an array of `[key, value]`.
    ```js
    let recipeMap = new Map([
        ['cucumber', 500],
        ['tomatoes', 350],
        ['onion',    50]
    ]);

    // iterate over keys (vegetables)
    for (let vegetable of recipeMap.keys()) {
        console.log(vegetable); // cucumber, tomatoes, onion
    }

    // iterate over values (amounts)
    for (let amount of recipeMap.values()) {
        console.log(amount); // 500, 350, 50
    }

    // iterate over [key, value] entries
    for (let entry of recipeMap) { // the same as of recipeMap.entries()
        console.log(entry); // cucumber,500 (and so on)
    }
    ```
1. Elements in `Map` objects follow the order that each element is inserted. Note that elements (key/value) pairs don't follow certain order to be listed in an object. 
1. Besides the 3 methods listed above `.keys()`, `.values()`, and `.entries()`, we can use `.forEach()` method to iterate through a `Map` object directly.
    ```js
    recipeMap.forEach((value, key, map) => {
        console.log(`${key}: ${value}`); 
    })
    ```

**Object.entries: Map from Object**
1. We can pass two-dimension array to create a `Map` Object. The inner array should have 2 elements, 1st is the key, and the 2nd is the value. 
    ```js
    let map = new Map([['1', 'str1'], [1, 'num1'], [true, 'bool1']]);
    console.log(map.get('1')); // str1
    ```
1. Since `Object.entries()` also return two-dimension arrays, we can turn a regular `Object` into a `Map` object by the method
    ```js
    let obj = {name: 'John', age: 30}
    let map = new Map(Object.entries(obj));
    console.log(map.get('name')); // John
    ```

**Object.fromEntries: Object from Map**
1. We can use `Object.fromEntries(map.entries())` to create an object from a two-dimension array. 

**Set**
1. A `Set` is a special type collection "set of values", where each value may occur only once.
    1. `new Set([iterable])` - Creates the set, and if an `iterable` object is provided (usually an array), copies values from it into the set. 
    1. `set.add(value)` - Adds a value, returns the set itself.
    1. `set.delete(value)` - Removes the value, returns `true` if `value` existed at the moment of the call, otherwise `false`. 
    1. `set.has(value)` - Returns `true` if the value exists in the set, otherwise `false`. 
    1. `set.clear()` - Removes everything from the set. 
    1. `set.size` - Returns the elements count, similar to `length` property of objects. 
1. As a `Set` can take certain value once in the collection, `set.add(value)` does nothing if we call the function multiple times with the same value. 
1. `Set` is usually used when we want to keep unique value once in the collection. Though we can use regular `Array` with `Array.find` method to perform the function, the performance won't be as good as using `Set`. 

**Iteration over Set**
1. We can use either `for...of` or `forEach` to iterat through a `Set`. 
    ```js
    let set = new Set(['oranges', 'apples', 'bananas']);

    for (let value of set) console.log(value);

    // the same with forEach
    set.forEach((value, valueAgain, set) => {
        console.log(value);
    });
    ```
1. We can notice that the arguments in the callback function in `forEach` of a `Set` object has the value twice. This feature is to make converting a `Set` to `Map` easily when using the method. 
1. We can also use those methods on `Map` objects to iterate through a `Set`.
    1. `set.keys()` - Returns an iterable object for values.
    1. `set.values()` - same as `set.keys()`, for compatibility with `Map`.
    1. `set.entries()` - returns an iterable object for entries `[value, value]`, exists for compatibility with `Map`.

#### Exercise 1 - Filter unique array members
1. Let `arr` be an array.
1. Create a function `unique(arr)` that should return an array with unique items of `arr`.
    ```js
    function unique(arr) {
        let set = new Set();
        arr.forEach(el=>{
            set.add(el);
        });
        let list = [];
        set.forEach(e=>{
            list.push(e);
        });
        return list;    
    }

    let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];

    console.log(unique(values));
    ```
1. Solution 
    ```js
    function unique(arr) {
        return Array.from(new Set(arr));
    }
    ```

#### Exercise 2 - Filter anagrams
1. "**Anagrams**" are words that have the same number of same letters, but in different order.
    1. nap - pan
    1. ear - are - era
    1. cheaters - hectares - teachers
    ```js
    let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

    console.log(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"
    ```
1. From every anagram group should remain only one word, no matter which one. From the concept of the solution, we can use object directly without using `Map` object.
    ```js
    function aclean(arr) {
        let obj = {};
        for (let word of arr) {
            let text = word.toLowerCase().trim().split('').sort().join('');
            obj[text] = word;
        }
        return Object.values(obj);
    }

    let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

    console.log(aclean(arr));
    ```
1. Solution 
    ```js
    function aclean(arr) {
        let map = new Map();
        for (let word of arr) {
            let text = word.toLowerCase().trim().split('').sort().join('');
            map.set(text, word);
        }
        return Array.from(map.values());
    }
    ```

#### Exercise 3 - Iterable keys
1. We’d like to get an array of `map.keys()` in a variable and then do apply array-specific methods to it, e.g. `Array.push`, but that doesn't work. 
    ```js
    let map = new Map();

    map.set("name", "John");

    let keys = map.keys();

    // Error: keys.push is not a function
    keys.push("more");
    ```
1. `map.keys()` returns a Map iterable which is a array-like object rather than an array. However, we can use `Array.from()` to create an array from Map iterable. Besides, we can use spread operator `...` as well. 
    ```js
    let map = new Map();

    map.set("name", "John");

    // either of the followings work
    let keys = Array.from(map.keys());
    let keysArr = [...map.keys()];
    keys.push('more');
    keysArr.push('more');
    ```

### WeakMap and WeakSet
**WeakMap**
1. In JavaScript, `Arrays` and `Objects` are reference (pointer) to the data in memory. If we assign the variable a `null` to overwrite its previous value, the object will be removed. However, if we keep the `Object` in another `Object`, though the variable thats keeps the object can be overwritten by other value, the `Object` will still be in the `Object`.
    ```js
    let john = {name: 'John'};
    let array = [john];

    john = null;
    console.log(array[0]); // {name: 'John'}    
    ```
1. We can also keep an `Object` in a `Map`, so the object will be stored though its reference variable is overwritten. 
    ```js 
    let john = { name: "John" };
    let map = new Map();
    map.set(john, "...");

    john = null;
    console.log(Array.from(map.keys())[0]); // { name: "John" }
    ```
1. On the other hand, a `WeakMap` works in the other way that the `Object` as the key will be garbage-collected if the variable is removed. In addition, a `WeakMap` doesn't take a `String` value as its key. 
    ```js
    let weakMap = new WeakMap();
    let obj = {};
    weakMap.set(obj, "ok"); 

    // can't use a string as the key
    weakMap.set("test", "Whoops"); // Error, because "test" is not an object

    let john = { name: "John" };
    weakMap.set(john, "...");
    john = null; // overwrite the reference
    // john is removed from memory!
    ```
1. A `WeakMap` object has only few methods and doesn't support iteration methods `.keys()`, `.values()`, and `.entries()` method as a regular `Map`. 
    1. `weakMap.get(key)`
    1. `weakMap.set(key, value)`
    1. `weakMap.delete(key)`
    1. `weakMap.has(key)`

**Use case: additional data**
1. If we are working with an `Object` that is belonged to other code and would like to store data associate with it, `WeakMap` is good for the purpose, as if the object from a 3rd party is expired or gone, the associated data will be removed. 
1. For instance, we have code that keeps a visit count for users. The information is stored in a `Map`: a user object is the key and the visit count is the value. When a user leaves (its object gets garbage collected), we don’t want to store their visit count anymore.
    ```js
    // 📁 visitsCount.js
    let visitsCountMap = new Map(); // map: user => visits count

    // increase the visits count
    function countUser(user) {
        let count = visitsCountMap.get(user) || 0;
        visitsCountMap.set(user, count + 1);
    }

    // 📁 main.js
    let john = { name: "John" };

    countUser(john); // count his visits

    // later john leaves us
    john = null;
    ```
1. We need to clean visitsCountMap when we remove users, otherwise it will grow in memory indefinitely. Such cleaning can become a tedious task in complex architectures. Now we don’t have to clean `visitsCountMap`. After `john` object becomes unreachable by all means except as a key of `WeakMap`, it gets removed from memory, along with the information by that key from `WeakMap`.
    ```js
    // 📁 visitsCount.js
    let visitsCountMap = new WeakMap(); // weakmap: user => visits count

    // increase the visits count
    function countUser(user) {
        let count = visitsCountMap.get(user) || 0;
        visitsCountMap.set(user, count + 1);
    }
    ```
**Use case: caching**
1. Another common example is caching: when a function result should be remembered (“cached”), so that future calls on the same object reuse it. 
    ```js
    // 📁 cache.js
    let cache = new Map();

    // calculate and remember the result
    function process(obj) {
    if (!cache.has(obj)) {
        let result = /* calculations of the result for */ obj;

        cache.set(obj, result);
    }

    return cache.get(obj);
    }

    // Now we use process() in another file:

    // 📁 main.js
    let obj = {/* let's say we have an object */};

    let result1 = process(obj); // calculated

    // ...later, from another place of the code...
    let result2 = process(obj); // remembered result taken from cache

    // ...later, when the object is not needed any more:
    obj = null;

    alert(cache.size); // 1 (Ouch! The object is still in cache, taking memory!)
    ```
1. For multiple calls of `process(obj)` with the same object, it only calculates the result the first time, and then just takes it from `cache`. The downside is that we need to clean `cache` when the object is not needed any more. If we replace `Map` with `WeakMap`, then this problem disappears: the cached result will be removed from memory automatically after the object gets garbage collected.
    ```js
    // 📁 cache.js
    let cache = new WeakMap();

    // calculate and remember the result
    function process(obj) {
    if (!cache.has(obj)) {
        let result = /* calculate the result for */ obj;

        cache.set(obj, result);
    }

    return cache.get(obj);
    }

    // 📁 main.js
    let obj = {/* some object */};

    let result1 = process(obj);
    let result2 = process(obj);

    // ...later, when the object is not needed any more:
    obj = null;

    // Can't get cache.size, as it's a WeakMap,
    // but it's 0 or soon be 0
    // When obj gets garbage collected, cached data will be removed as well
    ```

**WeakSet**
1. It is analogous to `Set`, but we may only add objects to `WeakSet` (not primitives).
1. An object exists in the set while it is reachable from somewhere else.
1. Like `Set`, it supports `add`, has and `delete`, but not `size`, `keys()` and no iterations.
    ```js
    let visitedSet = new WeakSet();

    let john = { name: "John" };
    let pete = { name: "Pete" };
    let mary = { name: "Mary" };

    visitedSet.add(john); // John visited us
    visitedSet.add(pete); // Then Pete
    visitedSet.add(john); // John again

    // visitedSet has 2 users now

    // check if John visited?
    alert(visitedSet.has(john)); // true

    // check if Mary visited?
    alert(visitedSet.has(mary)); // false

    john = null;

    // visitedSet will be cleaned automatically
    ```

#### Exercise 1 - Store "Unread" Flags
1. There’s an array of messages:
    1. Your code can access it, but the messages are managed by someone else’s code. New messages are added, old ones are removed regularly by that code, and you don’t know the exact moments when it happens.
    1. When a message is removed from messages, it should disappear from your structure as well.
    1. We shouldn’t modify message objects, add our properties to them. As they are managed by someone else’s code, that may lead to bad consequences.
    ```js
    let messages = [
        {text: "Hello", from: "John"},
        {text: "How goes?", from: "John"},
        {text: "See you soon", from: "Alice"}
    ];
    ```
1. The solution is to loop through the items of the messages array and check if each item (a message in the array) is read. In this case, I set the status of the message with `false` by default.
    ```js 
    let readMessages = new WeakMap();

    readMessage(messages);
    function readMessage(messages) {
        messages.forEach(function(message){
            if (readMessages.get(message)) {
                let status = readMessages.get(message);
                readMessages.set(message, status);
            } else {
                readMessages.set(message, false);
            }
        });
        return readMessages;
    }
    ```
1. Solution
    ```js
    let messages = [
        {text: "Hello", from: "John"},
        {text: "How goes?", from: "John"},
        {text: "See you soon", from: "Alice"}
    ];

    let readMessages = new WeakSet();

    // two messages have been read
    readMessages.add(messages[0]);
    readMessages.add(messages[1]);
    // readMessages has 2 elements

    // ...let's read the first message again!
    readMessages.add(messages[0]);
    // readMessages still has 2 unique elements

    // answer: was the message[0] read?
    alert("Read message 0: " + readMessages.has(messages[0])); // true

    messages.shift();
    // now readMessages has 1 element (technically memory may be cleaned later)
    ```
1. In addition, we can add `isRead` property to each instance, though it's not encouraged, as the data is managed by other code. Therefore, we can use `Symbol` which will only be recognized by current code. 
    ```js
    // the symbolic property is only known to our code
    let isRead = Symbol("isRead");
    messages[0][isRead] = true;
    ```

#### Exercise 2 - Store Read Dates
1. There’s an array of messages as in the previous task. The situation is similar.
    1. The question now is: which data structure you’d suggest to store the information: “when the message was read?”.
    1. In the previous task we only needed to store the “yes/no” fact. Now we need to store the date, and it should only remain in memory until the message is garbage collected.
    1. Dates can be stored as objects of built-in `Date` class, that we’ll cover later.
    ```js
    let messages = [
        {text: "Hello", from: "John"},
        {text: "How goes?", from: "John"},
        {text: "See you soon", from: "Alice"}
    ];

    let weakMap = new WeakMap();

    addMessageReadDate(messages[0], messages);
    function addMessageReadDate(message, messages){
        weakMap.set(message, new Date());
        messages.forEach(function(message){
            weakMap.set(message, new Date());
        });
        return weakMap;
    }
    ```
1. Solution
    ```js
    let messages = [
        {text: "Hello", from: "John"},
        {text: "How goes?", from: "John"},
        {text: "See you soon", from: "Alice"}
    ];

    let readMap = new WeakMap();

    readMap.set(messages[0], new Date(2017, 1, 1));
    ```