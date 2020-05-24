# [Automate the Boring Stuff with Python](https://automatetheboringstuff.com/)  
[Visualize Python code](http://www.pythontutor.com/visualize.html) at http://www.pythontutor.com/visualize.html
***
**for loops**
`range()` function can take up to 3 arguments, `start`, `end`, and `step`. `start` is included, while `end` is excluded, and `step` can be any whole number including negative numbers. `range(start, end)`

**Built-in functions** 
`random`, `random.randint()`, `sys`, `sys.exit()`, `pyperclip`, `pyperclip.copy()`, `pyperclip.paste()`
1. There are several libraries and modules that can work on different purpose, such as `random`. We can use `import random` to import the module to the code. Besides, we can use comma `,` to separate different modules and import all of them in one line. `import random, sys, os, math`. For example, `.randint()` method from random module, `random.randint(1, 10)` returns any number from 1 to 10.
1. We can ues "**from _module_ import _methodName_**" to import certain method from the module. To call imported methods, we have to use `moduleName.method()` to use. By using `from` we can use the method directly without making it suffix to the module name. Besides, asterisk `*` is like a wild card that if we use it as method name it will import all methods from the module, such as `from random import *`. 
1. We can import `sys` module and use `sys.exit()`. 
1. We can use `pip` to install `pyperclip` module, which has **_copy_** and **_paste_** function as a clipboard to copy text and paste text. 

**Functions** 
`def`, `None`, `print(end=\n, sep=", ")`
1. We can use keyword `def` to define a function. We can also put parameters in it. 
    ```
    def hello(name): 
        print("Howdy!" + name) 
        print("Howdy!") 
        print("Howdy!") 

    hello("Allen")
    """
    Howdy! Allen 
    Howdy! 
    Howdy!
    """
    ```
1. `None` is the only value of _None type_ value. For example, `print()` function returns a `None` value. Every function returns a value. If there's no given `return` with a value, the returned value will be `None` in default. 
1. `print()` function will add a new line character `\n` automatically after print the text out which is in `print()` function's keyword argument `end`. Thus, we can change the default new line character to other characters. For example, after `print('Hello', end='')`, the next returned value will show on the same line as the printed value. 
1. Besides `end`, `print()` function has another keyword argument `sep`, which is the separating character using `, ` (comma and a space) in default, so when we give `print("a", "b", "c")`, it returns `a b c`. If we change it, `print()` function will print the text according to it. 

**Scope**
1. Variables in different scopes can be called in different conditions. **Global** variables are created when the program starts. **Local** variables can only be called in the same code block. If variables are in different functions, they can't affect to each, while only the **Global** variable can be modified by the expression in the function. 
1. Unlike in JavaScript, if the global variable is not reassigned in the global scope, the variable will remain the same (in JavaScript, if a global variable is modified by a function call, the value will change after the function is called.). 
1. We can use keyword `global` before the variable in the function body. Therefore, after the function which manipulates the global variable is called, the value of global variable is changed. (Note that the `global` variable should be declared in the funciton body with `global variable` before it can be manipulated) 
    ```
    name = "Allen" 
    def changeName(newName): 
        global name 
        name = newName
        return name 
    changeName("Tim")
    print(name) 
    ```
1. Since Python doesn't use curly braces to define clock but indentation, it doesn't like JavaScript that scope are limited to the code block of curly braces. In Python, the scope is only bettwen declared function and global. If we use `for` loop in global scope, the variables in the loop, though indented, can be called in its parent scope. 

**Try and Except statement** 
`try`, `except` 
1. We can use `try` and `except` statement in a function declaration to skip the potential errors which is similar to IF/ELSE that if the statement or expression in the `try` block has caused an error, it will execute the code in the `except` block. We can specify the specific type of error in `except` statement. If there's no specific type of error given, it will catch **All** types of error and execute its code block. 
1. This is useful for **_input validation_** from users. For example, if a user gives an type of input which doesn't match to the desirable type to the function to execute, we can use TRY/EXCEPT statement to prevent the program from returning an error and crashing. 

**The List data type** 
`[ ]`, `[:]`, `range(len(list))`, `del list[index]`, `value in list`, `value not in list` 
1. `Lists` are similar to Array in JavaScript an other programmning language and represented in square brackets ` [ ] `. We can use "**indices**" in square brackets after the list variable to call the element in the list at certain position. 
1. We can have `Lists` in other `Lists` to create multi-dimensional lists. 
1. In Python, we can use negative indices to a `list`, so the position of the element will be counted reversely. Besides, the square brackets actually takes a value or an expression. We can perform similar feature as in JavaScript that using `len()` function to get the number of elements in the list and manipulate it. 
1. We can use column as a "**slicer**" to retrieve a list of values from the list. Note that using a slicer will return a new list of value(s) without modifying the original list value. (This is similar to `.slice()` Array method in JavaScript. They work in the similar way that the first number will be include until the end index (excluded)). However, if we have only the column in the square brackets, it will return the whole list. 
    ```
    #code in Python 
    list = [1,2,3,4,5,6]; 

    arr = list[1:5]

    print(arr) 
    ```
    ```
    //code in JavaScript
    let arr = [1,2,3,4,5,6]; 

    arr.slice(1,5); 

    console.log(arr); 
    ```
1. We can use the index pointer to assign new value or reassign value to a certain position in the list. We can also combine this with "**slicer**" to append new elements to the list as well. If the number that slicer holds is over the length of the list, we still can append the value(s) into the list as the last element(s). Note that the number slicer holds should be over the number of elements append to the list. 
1. Note that slice notation ":" is very different from the `.slice()` method from JavaScript. In Python, it takes another list to append each element to the original list, while the feature isn't available for the array method in JavaScript. 
1. We can use `del` keyword to remove an element from the list at a given position. (Note that as Python has no undefined or null value but a `None`). When we remove an element from a list, the position can't be remaied empty as JavaScript may have `undefined`, `null`, or `""`. (We can leave the value as `None`). Therefore, the length of the list will reduce by the number of element removed, and the elements after the removed element will be "pushed" and concatenate the element right before the removed element. 
    ```
    arr = [1,2,3,4]
    del arr[0] #[2,3,4]
    ```
1. In Python, if we use plus operator to add 2 list values, the list will be concatenated and become a one-dimension list. (Note that if we add 2 arrays in JavaScript, the returned value will become a string value that only show the element of the arrays and separated by comma). Besides, a list can be multipled to append the list. We can turn each character of a string value into a list of characters. (Note that Python has no `char` type value, which is a single character as C langauge does.)
    ```
    list = [1,2] + [3,4] #list == [1,2,3,4]
    arr = list * 2 #arr == [1,2,3,4,1,2,3,4]
    list("Hello") #["H", "e", "l", "l", "o"] 
    ```
1. We can use keyword `in` in check if a value is one of the element in a list value. (Note that keyword `in` is used to check if a "property" is in an object value. A JavaScript object value is a dictionary value in Python.) If the element is in the list, the function will return boolean `true`. On the other hand, we can have a `not` to check if a value IS NOT in the list value. (JavaScript doesn't have this keyword `not`). In addition, `in` and `not in` can be used to string value as well. 
    ```
    "hi" in ["hi", "hello"] #True 
    "hi" not in ["hi", "hello"] #False
    "h" in "hello" #true 
    ```

**For loops with LIsts, Multiple Assignment, and Augmented Operators** 
`Multiple Assignment`, `Value Swapping`, `Augmented Operator`
1. To use for loop to loop through a list, we can set the counter of the loop as range(len(**_list_**)). Therefore, we can loop the exact time as the number of elements of the list, and the counter is dynamic. 
1. In `for` loop, the counter variable is set up to take each element `in` the following list, or list-like sequence as the returned value from `range()`. 
    ```
    greet = "hello" 
    for i in greet: 
        print(i) 
    #We will print each character out from the the string "hello" 
    ```
1. We can set up multiple variable to elements of a list in a same line. This can used to assign regular variables as well. This is called `Multiple assignment` in Python. Besides, we can use this trick to swap the values of 2 variables. 
    ```
    assign multiple variables to elements in a list 
    cat = ["fat", "orange", "loud"]
    size, color, disposition = cat 
    
    #assign multiple variables 
    size, color, disposition = "skinny", "black", "quiet"

    #swap values of variables 
    a, b = "AAA", "BBB" 
    a, b = b, a 
    ```
1. `Augmented operator` is the shorthand to express an operations that is to assign a value that operates on the variable itself. (JavaScript has exactly the same feature)
    ```
    a = 1 
    a = a + 1 
    a += 1 
    ```

**List Methods** 
`.index(value)`, `.append(value)`, `insert(index, value)`, `.remove(value)`, `.sort(key=str.lower, reverse=true)`
1. `.index()` method returns the index of a value which is the poisition of which in a list. 
    ```
    spam = ["hello", "hi", "howdy"]
    spam.index("hi") #this returns 1
    ```
1. `.append()` and `.insert()` are methods to add elements into a list. `.append()` method add an element as the last element of the list (which is the same as `.push()` method in JavaScript). `.insert()` can insert the new element at any given position in the list, the element at the position where the new element is added will be "pushed" and follow right after the new added element. This method takes 2 arguments, the 1st is the index of the position to add the new element, the 2nd is the new element to be added. (This is similar to `.splice()` method in JavaScript, while `.splice()` has the "**number of elements to be removed**" as the 2nd argument, which will remove the number elements from the given position. Besides, it `.splice()` can also work like keyword `del` that if we don't pass the 3rd argument, it will just delete the element(s) at the given position). 
1. Note that we have to very careful if the method will return a value or just manipulate the object which the method operats on. Usually the methods that manipulats the object will not return a value (which mean it returns a `None`). Thus, if we reassign the manipualted value to the original variable, the value will be `None`. 
1. Methods of each data type can work on such data type only. If we put method on an invalid data type, Python will return a trackback (error). 
1. Besides using index, we can use `.remove()` method to delete an element from a list directly without knowing the index of the element. However, if we remove an value which is not in the list, Python will return an error. Besides, if there are multiple elements have the same value, `.remove()` method will only delete the first element that matches the value. 
    ```
    arr = [1,2,3,4]
    arr.remove(3) #[1,2,4]
    ```
1. `.sort()` method is to rearrange the elements in a list to a ascending order. On the other hand, we can pass a keyword `reverse` as the argument (which takes a boolean value) that is similar to set `sep`, and `end` for `print()` function. `.sort(reverse=true)` will rearrange the sequnece of elements in an descending order. 
1. However, if the data type in the list are not the same, such as there are both `int` and `string` values in the list, Python will return an error when using the method. Note that `.sort()` method follows ASCII number of each alphabet that "UPPERCASE" letters are less than "lowercase" letters. In this case, we can passin another argument key as str.lower, so the alphabets will be ordered in its regular order. Note that we can pass 2 arguments (`reverse` and `key`)to the method at the same time, and it doesn't matter which argument is given first. 
    ```
    spam = ["a", "b", "A", "B"]
    spam.sort() #["A", "B", "a", "b"]
    spam.sort(key=str.lower) #["A", "a", "B", "b"]
    ```