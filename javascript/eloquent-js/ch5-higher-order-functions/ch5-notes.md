**Abstraction and abstracting repetition**
1. Abstraction hide details and give the ability to talk about problems at a higher (or more abstract) level. We can leave some low-level details or in analogy along. Therefore we can keep the code more succinct and easier to read. 

1. If we want to repeat an action, we can define and declare a function for the action and have another function which has a loop and can take function as arugment to repeat the action. Note that the passed in function value can be declared in the expression directly. Besides, if the inner function body is a single small expression, we can write it in one line without having parenthesis. 

```
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

let labels = [];
repeat(5, i => {
  labels.push(`Unit ${i + 1}`);
});
console.log(labels);
// → ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]
```

**Higher-order functions**
1. Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions. This allow us to abstract over actions, not just values. For example, we can have functions that create new functions. (This is similar to closure)
1. By definition, higher-order function takes a function as an argument and/or returns a function as a return value, while closure is to limit the scope of variables and parameters used. Every function in JavaScript is in closure, but not return a value necessarily. Therefore, to determine if a function is a higher-order function or just closure, we can check if the return value is a function. 
1. We can have functions that change other functions. In function `noisy()`, `...args` is a rest paramenters which means it takes multiple, unlimited number of arguments. It will be passed as an array when called. In the following case, 3 arguments (1,2,3) is given, so args become a variable that holds [1, 2, 3]. We then assign a binding result to take the original output from a given function (which we use Math.min() in this case). Therefore, when we call noisy(), it will return Math.min() by calling itself in the function.
1. There's a built-in array method `array.forEach(function(){})` that provides like a for/of loop as a higher-order function. 

```
function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
  };
}
noisy(Math.min)(3, 2, 1);
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1

function unless(test, then) {
  if (!test) then();
}

//refer to repeat() function in the previous section. 
repeat(3, n => {
  unless(n % 2 == 1, () => {
    console.log(n, "is even");
  });
});
// → 0 is even
// → 2 is even
```

**Script Data Set**
```
{
  name: "Coptic",
  ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
  direction: "ltr",
  year: -200,
  living: false,
  link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
}
```
1. Higher-order function is useful in data processing. In this chapter, we will use script data sets which contains some pieces of information about the 140 scripts defined in Unicode. The binding contains an array of objects, each of which describes a script.
1. In the script data set, it gives the name and property of the language script. "**direction**" means the direction in which the script is written such as "**ltr**" is left to right. The "**ranges**" property contains an array of Unicode character ranges, each of which is a two-element array containing a lower bound and an upper bound. Any character codes within these ranges are assigned to the script. The lower bound is inclusive (code 994 is a Coptic character), and the upper bound is non-inclusive (code 1008 isn’t).

Note that the script data set is named SCRIPT in the coding sandbox of this chapter. 

**Filtering arrays**
1. The function uses the argument named **_test_**, a function value, to fill a “gap” in the computation—the process of deciding which elements to collect. Note how the filter function, rather than deleting elements from the existing array, builds up a new array with only the elements that pass the test. This function is pure. It does not modify the array it is given.
1. Like forEach, "**_.filter()_**" is a standard array method. The example defined the function only to show what it does internally. The "**_.filter()_**" method creates an array filled with all array elements that pass a test (provided as a function). If no element pass the test function, it returns an empty array. On the other hand, "**_.forEach()_**" method can manipulate as well but require to build an empty array and use 

Note that if in arrow function notation, "**(x) => { return x * x; };**" is equal to "**x => x * x;**"Therefore, if we have curly braces, we must put keyword "**return**" to get the value. 

```
function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}

console.log(filter(SCRIPTS, script => script.living));
// → [{name: "Adlam", …}, …]

console.log(SCRIPTS.filter(s => s.direction == "ttb"));
// → [{name: "Mongolian", …}, …]
```

**Transforming with Map**
1. The "**.map()**" method creates a new array with the results of calling a function for every array element. The "**.map()**" method calls the provided function once for each element in an array, in order.
1. In the example, the array of objects are filtered with "**.filter()**" and stored in binding **_rtlScripts_**. We then use map() function to create an new array which matches the given condition. Therefore, the new array will have the same length as the old one but "mapped" to a new form. 

```
function map(array, transform) {
  let mapped = [];
  for (let element of array) {
    mapped.push(transform(element));
  }
  return mapped;
}

let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
console.log(map(rtlScripts, s => s.name));
// → ["Adlam", "Arabic", "Imperial Aramaic", …]
```

**Summarizing with Reduce**
1. The higher-order operation build a value by repeatly taking a single element from the array and combining it with the current value. This pattern is called **_reduce_** or (**_fold_**). The parameters to reduce are, apart from the **array**, a combining **function** and a **start value**.  
1. The "**.reduce()**" method executes a reducer function (that you provide) on each element of the array, resulting in single output value. The standard array method reduce, which of course corresponds to this function, has an added convenience. If your array contains at least one element, you are allowed to leave off the start argument. The method will take the first element of the array as its start value and start reducing at the second element.
1. The reducer function (the first parameter) takes 2 arguments which is (current, element). The current one can be given as the start argument if it's given. The element is each element in the array. Thus, we can manipluate the current value with the element. 

```
function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
// → 10

console.log([1, 2, 3, 4].reduce((a, b) => a + b));
// → 10


function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}

console.log(SCRIPTS.reduce((a, b) => {
  return characterCount(a) < characterCount(b) ? b : a;
}));
// → {name: "Han", …}
```

**Composability**
1. Higher-order functions are useful to compose operations. When building the operatoins, there are flows in a pipeline. We start the largest data set, filter out the required entities, and manuipulate the entities accroding to their properties.
2. Though, we can still use regular for/while loops to do the work, it's harder to see what was being computed and how. However, higher-order functions are similar to recursive functions (both types are easier to read) that take much computing resource. Therefore, when processing large data sets, it would be better to use less abstract style to ge the extra speed. 

```
/**Using Higher-order functions**/
function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

console.log(Math.round(average(
  SCRIPTS.filter(s => s.living).map(s => s.year))));
// → 1165
console.log(Math.round(average(
  SCRIPTS.filter(s => !s.living).map(s => s.year))));
// → 204

/**Using regular for loop**/
let total = 0, count = 0;
for (let script of SCRIPTS) {
  if (script.living) {
    total += script.year;
    count += 1;
  }
}
console.log();
console.log(Math.round(total / count));
// → 1165
```

**Strings and character codes**
```
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

console.log(characterScript(121));
// → {name: "Latin", …}
console.log(SCRIPTS[41]);
```
1. `.some()` method is a higher-order function that takes a test function and tells whether that function returns true of any of the elements in the array. The `.some()` method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
1. In JavaScript, each string is encoded as a sequence of 16-bit number (which system can take up to 2^16 characters). However, a 16-bit code unit system can take only around 65,536 characters. Since Unicode base has much more than that, JavaSCript (which use 16-bit as character code unit) takes 1 pair of code units (2 code units) for speical characters. This has a problem that the system is not unified in every languages. If most of the character has only a code unit and others have 2, the system will easily have bugs for the issue when they are used at the same place. 
1. For Strings type value in JavaScript, if we use `.length` to check a string property, it shows the no. of code units which the string takes. For example, each emoji character, `let horseShoe = 🐴👟`, takes 2 code units. Therefore, `horseShoe.length` is 4. 
1. However, the regualr string methods are only available on characters with a whole code unit. Therefore, if we use `horseShoe[0]`, it returns an error shows `Invalid half-character`, as the other half of the character is not invoked. 
1. JavaScript’s `charCodeAt()` method gives you a code unit, not a full character code. The `codePointAt()` method, added later, <ins>**does give a full Unicode character**</ins>. So we could use that to get characters from a string. But the argument passed to `codePointAt()` is still an index into the sequence of code units. So to run over all characters in a string, we’d still need to deal with the question of <ins>**whether a character takes up one or two code units**</ins>. 
1. Besides, "**for/of**" loop works similar to `codePointAt()` method for Strings that it returns real characters rather than just code units. 
1. After all, we can use `codePointAt(index)` to get the code of a character regardless that the character has 1 or 2 code units. 

```
// Two emoji characters, horse and shoe
let horseShoe = "🐴👟";
console.log(horseShoe.length);
// → 4
console.log(horseShoe[0]);
// → (Invalid half-character)
console.log(horseShoe.charCodeAt(0));
// → 55357 (Code of the half-character)
console.log(horseShoe.codePointAt(0));
// → 128052 (Actual code for horse emoji)

/*Using for/of loop to loop through emojis*/
let roseDragon = "🌹🐉";
for (let char of roseDragon) {
  console.log(char);
}
// → 🌹
// → 🐉
```

**Recognizing Text**
```
function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

console.log(countBy([1, 2, 3, 4, 5], n => n > 2));
// → [{name: false, count: 2}, {name: true, count: 3}]
```
1. `countBy()` function expects a collection (array or anything that can use for/of to loop over) and a function that categorize elements to a given groupname. The function returns an array of objects, each of which names a group and give the number of elements of that group. 
1. `.findIndex()` is a method similar to `.indexOf()` (which takes a value as argument), while it take a callback function as the argument which checks through the elements. If the callback function returns a boolean **_true_**, it will return the index of the element in the array. In addition, `.find()` method is similar to `.findIndex()`, but rather than the index of the element, it returns the element value. 

**A function to parse a sentence and group the source scripts**
```
function textScripts(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({name}) => name != "none");

  let total = scripts.reduce((n, {count}) => n + count, 0);
  if (total == 0) return "No scripts found";

  return scripts.map(({name, count}) => {
    return `${Math.round(count * 100 / total)}% ${name}`;
  }).join(", ");
}
let message = '英国的狗说"woof", 俄罗斯的狗说"тяв"'
console.log(textScripts(message));
// → 61% Han, 22% Latin, 17% Cyrillic
```

1. The function fristly use `countBy()` function to separate parsed characters into different source scripts in an array of objects which has name of source script and the amount of the tyep. If the character is not in any of the source script, such as numbers and punctuations, will be categorized as "none". Then we use `.filter()` to take remove the "none" group from the array. 
1. We set a variable `total` which sum up all the counts property in each object in the script array by using `.reduce()` method. If total equals 0, it means none of the character in the message can be identified from the script data set. 
1. We then use `.map()` to manipulate the count property in each object of the array adn use variable `total` to calculate the percentage. Besides, since `.map()` method returns an array, we can use `.join()` method to concatenate the elements and give a comma in between. 

List of higher-order functions of arrays
Each of these takes a callback function to manipulate the elements of a given array.  
1. `.forEach()`
1. `.fliter()`
1. `.map()`
1. `.reduce()`
1. `.some()`
1. `findIndex()` 

**Exercise - Flattening** 
1. As `.reduce()` method has a loop, if we don't use a return to get the result, the loop will keep going until it is out of the length of the given array and cause an error that the function tries to catch an undefined value. 

**Exercise - Your own loop** 
1. According to for loop definition, the condition takes 3 statements 
  1. Statement 1 is executed (one time) before the execution of the code block.
  1. Statement 2 defines the condition for executing the code block.
  1. Statement 3 is executed (every time) after the code block has been executed.
1. Therefore, we can pass the functions in each of them and execute the body funciton. 

**Exercise - Everything**
1. To build every on top of some, we can apply De Morgan’s laws, which state that a && b equals !(!a || !b). This can be generalized to arrays, where all elements in the array match if there is no element in the array that does not match. 
1. Similar to Python, keyword `continue` in JavaScript as well. We can use it to pass the execute in the loop and go to the next element. In addition, IF/OF statement in JS is similar to the for loop in Python which is an element **_in_** a list. 

**Dominant writing direction** 
1. In an inner or callback function, if there's something be produced or return, it must be **returned** or the high-order function can't catch the value. 