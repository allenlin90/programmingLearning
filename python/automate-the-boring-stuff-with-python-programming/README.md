# [Automate the Boring Stuff with Python](https://automatetheboringstuff.com/)  
[Visualize Python code](http://www.pythontutor.com/visualize.html) at http://www.pythontutor.com/visualize.html
***
### for loops
`range()` function can take up to 3 arguments, `start`, `end`, and `step`. `start` is included, while `end` is excluded, and `step` can be any whole number including negative numbers. `range(start, end)`

### Built-in functions 
`random`, `random.randint()`, `sys`, `sys.exit()`, `pyperclip`, `pyperclip.copy()`, `pyperclip.paste()`
1. There are several libraries and modules that can work on different purpose, such as `random`. We can use `import random` to import the module to the code. Besides, we can use comma `,` to separate different modules and import all of them in one line. `import random, sys, os, math`. For example, `.randint()` method from random module, `random.randint(1, 10)` returns any number from 1 to 10.
1. We can ues "**from _module_ import _methodName_**" to import certain method from the module. To call imported methods, we have to use `moduleName.method()` to use. By using `from` we can use the method directly without making it suffix to the module name. Besides, asterisk `*` is like a wild card that if we use it as method name it will import all methods from the module, such as `from random import *`. 
1. We can import `sys` module and use `sys.exit()`. 
1. We can use `pip` to install `pyperclip` module, which has **_copy_** and **_paste_** function as a clipboard to copy text and paste text. 

### Functions
`def`, `None`, `print(end=\n, sep=", ")`
1. We can use keyword `def` to define a function. We can also put parameters in it. 
    ```python
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

### Scope
1. Variables in different scopes can be called in different conditions. **Global** variables are created when the program starts. **Local** variables can only be called in the same code block. If variables are in different functions, they can't affect to each, while only the **Global** variable can be modified by the expression in the function. 
1. Unlike in JavaScript, if the global variable is not reassigned in the global scope, the variable will remain the same (in JavaScript, if a global variable is modified by a function call, the value will change after the function is called.). 
1. We can use keyword `global` before the variable in the function body. Therefore, after the function which manipulates the global variable is called, the value of global variable is changed. (Note that the `global` variable should be declared in the funciton body with `global variable` before it can be manipulated). However, if we refer mutable values such as `list` and `dictionary`, the variable will still be changed after the fucntion executes. We don't need to use `global` keyword to declare. 
    ```python
    name = "Allen" 
    def changeName(newName): 
        global name 
        name = newName
        return name 
    changeName("Tim")
    print(name) 
    ```
1. Since Python doesn't use curly braces to define clock but indentation, it doesn't like JavaScript that scope are limited to the code block of curly braces. In Python, the scope is only bettwen declared function and global. If we use `for` loop in global scope, the variables in the loop, though indented, can be called in its parent scope. 

### Try and Except statement 
`try`, `except` 
1. We can use `try` and `except` statement in a function declaration to skip the potential errors which is similar to IF/ELSE that if the statement or expression in the `try` block has caused an error, it will execute the code in the `except` block. We can specify the specific type of error in `except` statement. If there's no specific type of error given, it will catch **All** types of error and execute its code block. 
1. This is useful for **_input validation_** from users. For example, if a user gives an type of input which doesn't match to the desirable type to the function to execute, we can use TRY/EXCEPT statement to prevent the program from returning an error and crashing. 

### The List data type
`[ ]`, `[:]`, `range(len(list))`, `del list[index]`, `value in list`, `value not in list` 
1. `Lists` are similar to Array in JavaScript an other programmning language and represented in square brackets ` [ ] `. We can use "**indices**" in square brackets after the list variable to call the element in the list at certain position. 
1. We can have `Lists` in other `Lists` to create multi-dimensional lists. 
1. In Python, we can use negative indices to a `list`, so the position of the element will be counted reversely. Besides, the square brackets actually takes a value or an expression. We can perform similar feature as in JavaScript that using `len()` function to get the number of elements in the list and manipulate it. 
1. We can use column as a "**slicer**" to retrieve a list of values from the list. Note that using a slicer will return a new list of value(s) without modifying the original list value. (This is similar to `.slice()` Array method in JavaScript. They work in the similar way that the first number will be include until the end index (excluded)). However, if we have only the column in the square brackets, it will return the whole list. 
    ```python
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
    ```python
    arr = [1,2,3,4]
    del arr[0] #[2,3,4]
    ```
1. In Python, if we use plus operator to add 2 list values, the list will be concatenated and become a one-dimension list. (Note that if we add 2 arrays in JavaScript, the returned value will become a string value that only show the element of the arrays and separated by comma). Besides, a list can be multipled to append the list. We can turn each character of a string value into a list of characters. (Note that Python has no `char` type value, which is a single character as C langauge does.)
    ```python
    list = [1,2] + [3,4] #list == [1,2,3,4]
    arr = list * 2 #arr == [1,2,3,4,1,2,3,4]
    list("Hello") #["H", "e", "l", "l", "o"] 
    ```
1. We can use keyword `in` in check if a value is one of the element in a list value. (Note that keyword `in` is used to check if a "property" is in an object value. A JavaScript object value is a dictionary value in Python.) If the element is in the list, the function will return boolean `true`. On the other hand, we can have a `not` to check if a value IS NOT in the list value. (JavaScript doesn't have this keyword `not`). In addition, `in` and `not in` can be used to string value as well. 
    ```python
    "hi" in ["hi", "hello"] #True 
    "hi" not in ["hi", "hello"] #False
    "h" in "hello" #true 
    ```

### For loops with LIsts, Multiple Assignment, and Augmented Operators
`Multiple Assignment`, `Value Swapping`, `Augmented Operator`
1. To use for loop to loop through a list, we can set the counter of the loop as range(len(**_list_**)). Therefore, we can loop the exact time as the number of elements of the list, and the counter is dynamic. 
1. In `for` loop, the counter variable is set up to take each element `in` the following list, or list-like sequence as the returned value from `range()`. 
    ```python
    greet = "hello" 
    for i in greet: 
        print(i) 
    #We will print each character out from the the string "hello" 
    ```
1. We can set up multiple variable to elements of a list in a same line. This can used to assign regular variables as well. This is called `Multiple assignment` in Python. Besides, we can use this trick to swap the values of 2 variables. 
    ```python
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
    ```python
    a = 1 
    a = a + 1 
    a += 1 
    ```

### List Methods
`.index(value)`, `.append(value)`, `insert(index, value)`, `.remove(value)`, `.sort(key=str.lower, reverse=true)`
1. `.index()` method returns the index of a value which is the poisition of which in a list. 
    ```python
    spam = ["hello", "hi", "howdy"]
    spam.index("hi") #this returns 1
    ```
1. `.append()` and `.insert()` are methods to add elements into a list. `.append()` method add an element as the last element of the list (which is the same as `.push()` method in JavaScript). `.insert()` can insert the new element at any given position in the list, the element at the position where the new element is added will be "pushed" and follow right after the new added element. This method takes 2 arguments, the 1st is the index of the position to add the new element, the 2nd is the new element to be added. (This is similar to `.splice()` method in JavaScript, while `.splice()` has the "**number of elements to be removed**" as the 2nd argument, which will remove the number elements from the given position. Besides, it `.splice()` can also work like keyword `del` that if we don't pass the 3rd argument, it will just delete the element(s) at the given position). 
1. Note that we have to very careful if the method will return a value or just manipulate the object which the method operats on. Usually the methods that manipulats the object will not return a value (which mean it returns a `None`). Thus, if we reassign the manipualted value to the original variable, the value will be `None`. 
1. Methods of each data type can work on such data type only. If we put method on an invalid data type, Python will return a trackback (error). 
1. Besides using index, we can use `.remove()` method to delete an element from a list directly without knowing the index of the element. However, if we remove an value which is not in the list, Python will return an error. Besides, if there are multiple elements have the same value, `.remove()` method will only delete the first element that matches the value. 
    ```python
    arr = [1,2,3,4]
    arr.remove(3) #[1,2,4]
    ```
1. `.sort()` method is to rearrange the elements in a list to a ascending order. On the other hand, we can pass a keyword `reverse` as the argument (which takes a boolean value) that is similar to set `sep`, and `end` for `print()` function. `.sort(reverse=true)` will rearrange the sequnece of elements in an descending order. 
1. However, if the data type in the list are not the same, such as there are both `int` and `string` values in the list, Python will return an error when using the method. Note that `.sort()` method follows ASCII number of each alphabet that "UPPERCASE" letters are less than "lowercase" letters. In this case, we can passin another argument key as str.lower, so the alphabets will be ordered in its regular order. Note that we can pass 2 arguments (`reverse` and `key`)to the method at the same time, and it doesn't matter which argument is given first. 
    ```python
    spam = ["a", "b", "A", "B"]
    spam.sort() #["A", "B", "a", "b"]
    spam.sort(key=str.lower) #["A", "a", "B", "b"]
    ```

### Lists vs Strings
`copy`, `value1 = copy.deepcopy(value1)`, **_mutable vs immutable values_**
1. We can use square bracket notation to retrieve characters from a string value as a list value. However, `strings` are immutable values which means that we can only assign a new value to the variable to change the value. 
1. In Python, variable are just the reference to the value in computer's memory, which means that if the value type is mutable, all the variable refer to the same value will be modified if any of them are modified at the same time. However, this only happens when a variable is given value by assign another variable. If both variables have the same value but in separated assignment, these variables are "**_equivalent_**" but not "**_identical_**". 
    ```python
    spam = [1,2,3,4,5]
    cheese = spam
    ham = [1,2,3,4,5]
    cheese[1] = "Hello" 
    spam #[1,"Hello",3,4,5]
    cheese #[1,"Hello",3,4,5]
    ham #[1,2,3,4,5]
    ```
1. This feature has both pros and cons as that it creates a shortcut if the list is huge and computer can use less processing memories to handle the value. However, it also means when we manipulate the value, the other variables will also be changed. (Note that this feature is the same in JavaScript as if 2 bindings are pointing to the same value, by assinging value to one another. If the variable is mutable and one of them is modified, the other binding will also change.)
1. Therefore, we can use a module "**copy**" by `import copy` to duplicate the value to another variable which are only "**_equivalent_**" to each other. `variable2 = copy.deepcopy(variable1)`. 
1. We can use backslash "**\\**" to change line of an expression or statement. 
    ```python
    print("This is the first line." + \
    " This is the 2nd Line, but all text is actually in one line")
    #This is the first line. This is the 2nd Line, but all text is actually in one line
    ```

### The dictionary data type
`dict.keys()`, `dict.values()`, `dict.items()`, `dict.get(key, fallbackValue)`, `dict.setdefault()`, `pprint`, `pprint.pprint(dictionary)`, `pprint.pformat(dictionary)`
1. `Dictionaries` are structure in curly braces. Every value is a KEY/VALUE pair, which key is a `String` that should be declared in quotes. (However, Objects in JavaScript are PROPERTY/VALUE pair and the property doesn't need to declared in quotes). 
1. Unlike `list` values, elements in dictionary are not in order. We can use square brackets to call the value of a key from a dictionary value. 
1. We can use keyword `in` and `not in` to check if a key is in a dictionary value. 
`.keys()` method will return key(s) of the dictionary in a list-like value (though we can use for loop to check each elements, but we can't use index notation in square brackets to retrieve the value). We can use `list()` function to turn the keys into a list `list(dict.keys())` will return a `list` of keys of `dict`. (In JavaScript, we can pass the objecty to `Object.getPropertyNames(object)` to get a list of properties in the object)
1. Similar to `keys()`, `.value()` method will return a list-like value which contains all values of the key/value pair in the dictionary value. We can use `list()` function the turn the list-like value into a `list`. (In JavaScript, there's also `Object.value(obj)` that we will get an array of values from the pair of the object.)
1. `.items()` will return the KEY/VALUE pairs in tuples in a list-like. 
1. We can use for loop to loop through the list-like value. Note that for `.items()` method, as it returns each KEY/VALUE pair as tuples, we can give 2 variables in the for loop to get the values of each separately. 
    ```python
    dict1 = {"a":1, "b":2}
    for i, j in dict1.items(): 
        print(i, j) 
    ```
1. `.get()` is a method like a TRY/EXCEPT or IF statement that takes 2 agrguments, the first one is a key value, if which is a key in the dictionary, the method will return the value of the key. The 2nd argument is the fallback value that if the key is not found, the fallback value will be return, so we can prevent the program crashes if the we try to use a key to retrieve data from a dictionary. 
1. `.setdefault()` can set a new key to a dictionary value if it doesn't exist. On the other hand, if the key has been in the dictionary value, nothing will be changed. This method is similar to use an IF statement to check if the key is in the dictionary first. If not, the key with a value will be added to the dictionary rather than overwrite the key's value. (In JavaScript, there's no such function as that if we assign a value to a property, the value will override the value of the property or create a new property if it doesn't exist. This feature is the same in Python.)
1. In Python, we can use triple quotes to have a multi-line String vlaue. Note that the new line character is also counted in the string value, so if we print the string out, the text will follow the line as given to the variable. 
    ```python
    message = '''It was a bright cold day in Apirl, 
    and the clocks were striking thirteen''' 
    count = {}
    for character in message.upper(): 
        count.setdefault(character, 0)
        count[character] += 1
    print(count)
    ```
1. However, printing a dictionary value directly is hard to read. Therefore, we can use `pprint` module (with double p's) to print a dicionary value out in order by the keys. We use `pprint.pprint(dictionary)` to print the value out in an ascending order. Note that we can use `pprint.pformat(dictionary)` which returns the formated value as a "**String**" value as the output of `pprint.pprint()`. 

### Data Structur
1. Here is introducing about the combination of using both dictionary and list value to create a hybrid type of value. 
1. We can use `type(value)` to check the type of the value whether it is `string`, `integer`, `float`, etc. 

### Advanced string syntax 
1. We can use escape character which is backslash `\` that we can use both single and double quote signs in a string value. For example, `\'`, `\"`, `\t` (tab), `\n` (line break), `\\` (backslash)
1. We can use raw string value which is a string started with character `r` and in quotes such as `r"hello"`. In this case, a back slash won't be treated as a escape character. 
    ```python
    print(r'Hello I\`m Allen.') #Hello I\'m Allen
    #Note that in this case we can't take the back slash off either as it will cause an error. 
    ```
1. `""" string value that can be in multiple lines. """` anything bettwen the pair of triple quotes will be considered to be part of the string value, even though the strings are in different lines. This features is very useful when parsing large amount of text. 
1. `indices`, `slices` (square bracket notation), `in` and `not in` all work with string values. 

### String methods 
`string.lower()`, `string.upper()`, `string.islower()`, `string.isupper()`, `string.isalpha()`, `string.isalnum()`, `string.isdecimal()`, `string.isspace()`, `string.istitle()`, `string.title()`, `.startswith()`, `.endswith()`, `.join`, `.split()`, `.ljust()`, `.rjust()`, `.center()`, `.strip()`, `.rstrip()`, `.lstrip()`, `.replace()`, `pyperclip`, `pyperclip.copy()`, `pyperclip.paste()` 
1. `string.lower()` method will return a copied string value and turn all characters into lowercase. `sting.upper()` is in opposite that it turn all characters into uppercase. These methods are useful to clean 
1. `.islower()` is to check if a string value has "**all**" characters in lowercase and returns a boolean value. `.isupper()` method is on the opposite that it checks if all characters are uppercase and returns a boolean value. If the string value has any non-alphabet characters but using `.upper()` method to them all into uppercase, by using `.isupper()` it returns a boolean `True`. However, if we check a non-text character such as a question mark "?", both `"?".isupper()` and `"?".islower()` return `False`. But if the string value has at least one alphabet character, it returns a True if the character is lowercase, such as `"?a".islower()`. 
    ```python
    "Hello".upper().isupper() #True 
    ```
1. There are other methods to check if the string value is in a certain type and return a boolean value. 
    1. `.isalpha()` checks if the string has letters only. 
    1. `.isalnum()` checks if the string has letters and number only. 
    1. `.isdecimal()` checks if the string has numbers only. Note that the number should be whole numbers (integers) rather than floats. 
    1. `.isspace()` checks if the string has whitespace only. 
    1. `.istitle()` checks if the string has titlecase only. (It means that all the phrase and text in the string should start with a capital letter.) This is related to another method `.title()` that it will change all the word in the string to start with a capital letter. 
1. `.startswith()` method will check if a string value starts with a certain set of string value, while `.endswith()` method is on the opposite to check reversely. 
    ```python
    text = "Hello world" 
    text.startswith("Hello") #True 
    text.endswith("world") #True 
    ```
1. `string.join(String or List)` method takes an iteratable argument such as a `string` or a `list` and returns a `string` value that puts the given string between each of the elements (or characters in a string). (Note that `.join()` method works differently in JavaScript that it is a method to manipulate an array and pass in the given string as the argument to concatenate the elements of an array. Note that the method in JavaScript also returns a string type value.)
    ```python
    print(", ".join(["a", "b", "c"]))
    ```
1. `string.split()` method returns a list that contains all the text in a string. The defualt argument is a **whitespace** `" "`. If we pass other characters as an argument, we can separate the string into a list value differently. (In JavaScript, `.split()` is also available for string type values, while its default argument is an **empty string** `""` which means that if there's no argument passed in, it will turn the whole string into an element of an array, so that the return array has only one element which is the whole string value.)
    ```python
    "My name is Simon".split("m") 
    #["my na", "e is Si", "on"]
    ```
1. `string.ljust(number, char)` and `string.rjust(number, char)` methods will put a given character as argument (whitespaces in default) to either right or left of th string passed in, so the string value is "justified". Both methods takes a number as argument to inject the given number of whitespaces. 
    ```python
    "Hello".ljust(10) 
    #"Hello          "
    "Hello".rjust(10, "*") 
    #"**********Hello"
    ```
1. `.center()` is similar to justfy but put both given characters on the left and right of the string as a returned value. 
    ```python
    "Hello".center(5, "-")
    #"-----Hello-----"
    ```
1. `.strip()`, `.rstrip()`, `.lstrip()` chop off the given character (whitespace as default) accoring to the method. The given character (as the argument) doesn't need to be in order. The method will parse the text and check if it hits a character which is not given. This is similar to use regex to clean the text data. 
    1. `.strip()` remove the given character(s) on both sides of the string until it reaches a character which is not given. 
    1. `.rstrip()` remove the given character on the right. 
    1. `.lstrip()` remove the given character on the left. 
    ```python
    text = "SpamSpamSpamSpamEggsBoilerHeadSpamSpamSpamSpam" 
    text.strip("mpSa123") 
    #EggsBoilerHead
    ```
1. `.replace()` method take 2 arguments. The first one is the character(s) to search in the string, and the 2nd is the character(s) to replace with the searched characters. (In JavaScript, String values have exact the same method to replace characters in a string.) 
1. `pyperclip` is the module which have `pyperclip.copy()` and `pyperclip.paste()` functions that can copy a string value to computer's clipsboard, and paste the value back. (This module and methods have been introduced in the very first section.) 

### String Formatting 
1. We can use plus sign "+" to concatenate the strings values and variables. 
1. We can use "**conversion specifiers**" when there are many string variables to be concatenated in the same line. That we can put `%s` in a string value and have `%(string variable1, var2, var3...)` the each of the string values in the `%()` will be passed into the string value by sequence. 
```python
import pprint
name = "Alice" 
place = "Main Stree" 
time = "6 pm"
food = "turnips" 
print("Hello " + name + ", you are invited to a party at " + place + " at " + time + ". Please bring " + food + ".")
print("Hello %s, you are invited to a party at %s at %s. Please bring %s." %(name, place, time, food))
#"Hello Alice, you are invited to a party at Main Street at 6pm. Please bring turnips." 
```

# Regular Expressions
Module `re`, `re.compile()`, `.search()`, `.group()`, `findall()`
1. Regex is helps us to search and parse values and data that are in certain patterns. For example, phones in the USA and Canada starts with an area code in 3 numbers, a dash "-", another 3 number, another dash "-", and another 4 numbers. Without <ins>**regualr expressions**</ins>, we have to use several `IF` statements and `for` loop to check if a phone number is in a valid pattern. 
1. To use regular expression, we import `re` module to the code and use `re.compile()` method which takes regular expression patterns in raw string (starts with `r"String"`) because regex often uses <ins>**backslashes**</ins> "\". We then use `.search()` method to and pass the `String` value that we want to use regex to parse. `.search()` method returns a "**Match Object**" which shows if there's a match anywhere in the string (Note that this method only returns one of the matches if there's many). We then can use `.group()` method to return the matched result. On the other hand, we can use `.findall` method directly that it will retun a list of matched values. 
    ``` python
    import re 
    message = "123-456-7890 Text to be parsed by regex 123-456-7890"
    phoneNumberRegex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d') 
    mo = phoneNumberRegex.search(message)
    print(mo.group()) #123-456-7890
    print(phoneNumberRegex.findall(message)) #['123-456-7890']
    ```
1. We can use parenthesis "**()**" in the `regex` code to separate the characters in different groups. Without using backslash "\" to escape, parenthesis isn't counted as character to be searched. If we use `.group()` method to retrive the parsed value, we can pass number as an index to retrive certain group of result. Note that the index starts from 1 to call part of the value in the gropu rather than 0. If we pass 0 to `.group()` method, it will return the whole match value.  
    ``` python
    import re 
    message = "123-456-7890 Text to be parsed by regex 123-456-7890"
    phoneNumberRegex = re.compile(r'(\d\d\d)-(\d\d\d-\d\d\d\d)') 
    mo = phoneNumberRegex.search(message)
    print(mo.group(1)) #123
    ```
1. We can use pipe character "|" to represent `or` in a group. In the following example, we can find several suffix after "Bat". 
    ```python 
    import re 
    batRegex = re.compile(r"Bat(man|mobile|copter|bat)")
    mo = batRegex.search("Batmobile lost a wheel") 
    print(mo.group())
    ```
1. Besides, we should be careful that if regex can't find anything match from the `String` value, it will return a `None` to variable `mo`. If still use `.group()` to return the value, we will get an error, as value `None` can't be called by the method. 

### Repetition in Regex 
1. We can use question mark "?" to indicate a character or a group of character can be in the `String` value for <ins>**0 or 1 time**</ins> which means the character is optional. 
1. Asterisk "*" means <ins>**0 or more times**</ins> in regex, so if a group of characters repeats multiple times, the regex code can still catch the `String`. 
1. Plus character "+" means <ins>**1 or more times**</ins> in regex, so the `String` will only match if the group of characters appears at least once. 
1. Similar to parenthesis, we can use backslash "`\`" to escape and search plus "+", question mark "?", and asterisk "*" in the `String`. 
1. We can use curly braces "{}" to check if a group of characters shows certain number of times in the `String`, such as using `(ha){3}` to search `hahaha`. 
    1. Besides, we can put up to 2 numbers, such as `{m,n}` for the conditions to indicate that the `string` can repeat between `m` to `n` times, inclusive. 
    1. In addition, if we leave one of the parameters `n` and have `{m,}` with a number followed by a comma, it means the group of character should occur at least `m` times. If we have no `m` in the curly braces, showing as `{,n}`, it means the group of characters can occur from 0 to `n` times. 
    1. We can use question mark "?" behind the curly braces. However, question mark has a different meaning here that it means <ins>**non-greedy**</ins> search. If the range is from `m` to `n`, as `{m,n}?`, the regex code will return the least possible value which is only `m` times. Note that regex in Python has greedy search in default. 
    ```Python 
    import re 
    batRegex = re.compile(r'Bat(wo)?man') #"wo" is optional 
    mo = batRegex.search("The Adventure of Batman")
    print(mo.group()) #Batman 
    mo = batRegex.search("The Adventure of Batwoman")
    print(mo.group()) #Batwoman 
    mo = batRegex.search("The Adventure of Batwowowoman")
    mo == None #True 

    batRegex = re.compile(r'Bat(wo)*man') #"wo" is optional can have multiple times
    mo = batRegex.search("The Adventure of Batwowowoman")
    print(mo.group()) #Batwowowoman

    batRegex = re.compile(r'Bat(wo)+man') #"wo" must show at least once 
    mo = batRegex.search("The Adventure of Batman")
    mo == None #True 

    batRegex = re.compile(r'Bat(wo){3}man') #"wo" must show exactly 3 times
    mo = batRegex.search("The Adventure of Batwowowoman")
    print(mo.group()) #Batwowowoman
    ```
### .findall() method in regex
1. `.search()` method returns a `Match Object` which should use `.group()` or other method to retrive the data. 
1. `.finall()` method returns a `List` which contains all the matched value in the parsed `String`. 
1. If we have at least 2 groups (wrapped by parenthesis) in the regex, `.findall()` will return a List of tuples have each group matched. 
    1. However, if there's no or only 1 group, it will return a list of mathced values. Besides, if there's only 1 group, only the matched characters of the group will be returned in the list. Any other mathced characters will be ignored. 
    1. If we have another parenthesis that wraps the whole regex, it will consider it as the first and an additional group. As regex will return the very first group it executes, so the group wraps the whole regex, as the most outer, will be the first item in the list. 
    ```python
    import re 
    phoneRegex = re.compile(r'(\d\d\d)-\d\d\d-\d\d\d\d') #only 1 group
    print(phoneRegex.findall("123-456-7890 123-456-7890")) #["123", "123"]

    phoneRegex = re.compile(r'(\d\d\d)-(\d\d\d-\d\d\d\d)') #2 groups
    print(phoneRegex.findall("123-456-7890 123-456-7890")) #[("123", "456-7890"), ("123", "456-7890")]

    phoneRegex = re.compile(r'((\d\d\d)-(\d\d\d-\d\d\d\d))') #3 groups, as 1 of the groups wraps the whole regex
    print(phoneRegex.findall("123-456-7890 123-456-7890")) 
    #[('123-456-7890', '123', '456-7890'), ('123-456-7890', '123', '456-7890')]
    ```
### Character classes
1. "\d" is a shorthand for any numeric digit from 0 to 9, which works the same as (0|1|2|3|4|5|6|7|8|9), while "\D" stands for any character that <ins>**IS NOT**</ins> a numeric digit from 0 to 9. 
1. "\s" stands for any space characters such as "\n" (new line), "\t" (tab), and a singe "whitespace". "\S" stands for any **non-whitespace** characters. 
1. "\w" stands for any letter, number digit, or the underscore character. We can consider this as matching "word" characters. "\W" is for characters which <ins>**IS NOT**</ins> letter, numeric digit, or the underscore character. 
1. We can simply understand that lowercase is of a certain group, while its counterpart in uppercase is on the opposite which IS NOT the group of characters. 

### Self-made character classes 
1. We can use square brackets "[ ]" to wrap the characters we want such as all the vowels as `[aeiou]` which is the same as `(a|e|i|o|u)`. Therefore, we can have a shorter version of the regex. Besides, we can use dash for a range of letters such as `[a-z]` which means from a to z in **lowercase** and `[A-Z]` which means from A to Z in **uppercase**. This can also be used with curly braces for repetition such as `[aeiouAEIOU]{2}`, so regex will find the vowels which has 2 letters attached in a row. 
1. Caret character "`^`" used in square brackets "[ ]" means <ins>**IS NOT**</ins>. Therefore, with the previous vowel example, we can use the syntax to find characters that <ins>**IS NOT**</ins> in the given set, such as `[^aeiouAEIOU]`. Note that this will include "whitespace" as well because it includes <ins>**EVERY**</ins> character that IS NOT in the given set of the `String`. 

### Dot-star and caret/dollar characters
Dollar Sign`$`, Caret `^`, `re.DOTALL`, `re.IGNORECASE` and `re.I` 
1. If we put a caret '^' at front, the following characters must be in the beginning of the `String`. 
    ```py
    import re 
    beginsWithHelloRegex = re.compile(r'^Hello')
    print(beginsWithHelloRegex.findall('Hello there!')) #['Hello']
    beginsWithHelloRegex.search('He said "Hello there!"') == None #True
    ```
1. Dollar sign "$" is on the opposite to caret "^" that the `String` value should be at the very end of the parsed `String`. 
    ```py 
    import re 
    endsWithWorldRegex = re.compile(r'world!$')
    print(endsWithWorldRegex.findall('Hello world!')) #['world!']
    endsWithWorldRegex.search('He said "Hello there!"') == None #True
    ```
1. We can use both dollar sign "$" and caret sign "^" to check if the `String` values matcehs exactly as the given regex, as `^both$`. In the following example, the `String` must be only digits (plus sign '+' means one or more). If there's another character other than numbers, there's no value will match. 
    ```py 
    import re 
    allDigitsRegex = re.compile(r'^\d+$')
    print(allDigitsRegex.findall('12345678901234567890')) #['12345678901234567890']
    print(allDigitsRegex.search('123456789x01234567890') == None) #True because there's a letter in the digits
    ```
1. A dot " . " stands for <ins>**any character rather than the new line "\n"**</ins>. However, this "wildcard" also includes whitespace. In the example below, if we have range 1 or 2 characters before at, whitespace is included though it's not making a word. We can use both dot "." and asterisk "*" for 0 or more to retrive all the characters we wants. Besides, we can use question mark "?" to have non-greedy search as well. The query will stop at the first match as the idea of stopping at the minimum for a giving range. 
    ```py 
    atRegex = re.compile(r'.{1,2}at') #1 or 2 characters before "at"
    print(atRegex.findall('The cat in the hat sat on the flat mat.')) #this include white space 

    nameRegex = re.compile(r'First Name: (.*) Last Name: (.*)') #select all characters in the group 
    print(nameRegex.findall('First Name: Al Last Name: Sweigart')) #findall method returns list of tuples of the groups

    serve = '<To serve humans> for dinner.>' 
    nongreedy = re.compile(r'<(.*?)>') #non-greedy search, which stops at the first match 
    print(nongreedy.findall(serve)) #['To serve humans'] 
    greedy = re.compile(r'<(.*)>') #regular greedy search which goes further for if any matches 
    print(greedy.findall(serve)) #['To serve humans> for dinner.'] 
    ```
1. We can pass a 2nd argument `re.DOTALL` to `.compile()` method to change the "dot" cover any character including new line character. (This is a bit weird that the last sentence isn't included and so does the instruction video) 
    ```py
    import re 
    dotStar = re.compile(r'.*', re.DOTALL) 
    print(dotStar.search(prime))
    ```
1. We can pass `re.IGNORECASE` as the 2nd argument to `.compile()`, so the regex will <ins>**NOT**</ins> be case sensitive. We can also use its shorthand `re.I` (which also stands for ignoring case)
    ```py 
    vowelRegex = re.compile(r'[aeiou]') 
    print(vowelRegex.findall('Al, why does your programming book talk about RoboCop so much?'))
    #['o', 'e', 'o', 'u', 'o', 'a', 'i', 'o', 'o', 'a', 'a', 'o', 'u', 'o', 'o', 'o', 'o', 'u']
    vowelRegex = re.compile(r'[aeiou]', re.I)
    print(vowelRegex.findall('Al, why does your programming book talk about RoboCop so much?'))
    #['A', 'o', 'e', 'o', 'u', 'o', 'a', 'i', 'o', 'o', 'a', 'a', 'o', 'u', 'o', 'o', 'o', 'o', 'u']
    ```
### Regex sub() method and verbose mode 
`sub()` method for "**substitution**" 
1. We can use `.sub()` method to "substitute" characters or words. The matched value will be replaced as the 1st arugment in `.sub()` method. 
    ```py
    nameRegex = re.compile(r'Agent \w+') 
    print(nameRegex.findall('Agent Alice gave the secret documents to Agent Bob.')) 
    #['Agent Alice', 'Agent Bob']
    print(nameRegex.sub('REDACTED', 'Agent Alice gave the secret documents to Agent Bob.')) #replace mathced agents 
    #REDACTED gave the secret documents to REDACTED. 
    ```
1. We can use `\(number)` <ins>**backslash number syntax**</ins> which represent the group in the regex. Note that we must use "raw string", `r''`, to present the "**backslash number syntax**" (or use backslash to escape the backslash before number). If we have a 2nd group, we can use `\2` to represent it. 
    ```py
    namesRegex = re.compile(r'Agent (\w)\w*') #a group of the 1st character of the name of a found Agent 
    print(namesRegex.findall('Agent Alice gave the secret documents to Agent Bob.')) #['A', 'B']
    print(namesRegex.sub(r'Agent \1****', 'Agent Alice gave the secret documents to Agent Bob.'))
    print(namesRegex.sub('Agent \\1****', 'Agent Alice gave the secret documents to Agent Bob.')) #the same as using raw string by escaping backslash 
    Agent A**** gave the secret documents to Agent B****.
    ``` 
1. We can use pass `re.VERBOSE` as the 2nd argument to `re.compile()` function to start **Verbose Mode**. IN this mode, we can add whitespaces and comments in lines. The regex can be wrapped with triple quotes `'''` in multilple lines that we can give comments and separate the parts of the regex which makes the expression easier to read and understand. 
1. We've learnt `re.DOTALL` and `re.IGNORECASE`(`re.I`) as the 2nd argument to pass to `re.compile()`. However, the function can only take one of the feature as the 2nd argument. Therefore, we can use a pipe character "|" to separate the argumetns and pass all the features we make `re.compile()` to work on. 
    ```py
    re.compile(r'''
    (\d\d\d-) |     #area code (without parenthesis, with dash)
    (\(\d\d\d-\) )  #-or- area code with parenthesis and no dash
    \d\d\d          #first 3 digits
    -               #second dash
    \d\d\d\d        #last 4 digits
    \sx\d{2,4}      #extension, like x1234''', re.VERBOSE | re.I | re.DOTALL) 
    #regex for pattern of phone numbers in USA and Canada 

    #Easier than reading 
    re.compile(r'(\d\d\d-)|(\(\d\d\d-\) )\d\d\d-\d\d\d\d\sx\d{2,4}', re.I | re.DOTALL)
    ```

### Regex example program: email and phone scraper 
1. We firstly declare which version of Python we use to run the code on the top with "**#! python3**" (a comment). 
1. `import` module `re` and `pyperclip` for clipboard with copy and paste functions. 
1. Build a Todo list for each task 
    1. \# TODO: Create a regex for phone numbers. We can use `re.VERBOSE` to turn on verbose mode to make comments of regex for phone numbers. 
    1. \# TODO: Create a regex for emial addresses 
    1. \# TODO: Get the text off the clipboard 
    1. \# TODO: Extract the email/phone from this text 
    1. \# TODO: Copy the extracted email/phone to the clipboard 
1. Note that in this program we parse the data that is "**copied**" in the computer clipboard, which means that we must open a text or PDF file, select the area (texts), and use Ctrl C or mouse right click to copy it. (Just a regualr copy as word processing! The Python module `pyperclip` can read what's the current value in the computer's clipboard.) 
1. We use `.join()` method to concatenate all the found emails and phones (as entities) into a large `String` which values separated by new line character `\n`. Note that we can change the separator of `.join()` method and use comma or tab character to make CSV or TSV file. 
```py
#phoneAndEmail.py
#! python3 
import re, pyperclip

# Create a regex for phone numbers 
phoneRegex = re.compile(r'''
#415-555-0000, 555-0000, (415) 555-0000, 555-0000 ext 12345, ext. 12345, x12345
(                            #a large group to wrap all regex code (start)
((\d\d\d) | (\(\d\d\d\)))?   #area code (optional). This is an optional group with OR "|" for 3 digit w/n wrapped with parenthesis 
(\s|-)                       #first separator. This can be a single whitespace or a dash "-"
\d\d\d                       #first 3 digits 
-                            #serparator
\d\d\d\d                     #last 4 digits 
(((ext(\.)?\s)|x)            #extension word-part (optional). The word-part and number-part are actually in the same group but different line
 (\d{2,5}))?                 #extension number-part (optional). There's a whitespace between word-part and number-part, so this line has a whitespce in the beginnning
)                            #a large group to wrap all regex code (end)
''', re.VERBOSE)

# Create a regex for emial addresses 
emailRegex = re.compile(r'''
# some.+_thing@something.com

[a-zA-Z0-9_.+]+        #name part. We can't use \w directly as it only covers letters and underscore, so we create a customized one with square brackets []. Besides, we only cover dot, underscore, and plus sign in the name part rather than covering all the possible characters in email. 
@                      #@ symbol 
[a-zA-Z0-9_.+]+        #domain name part 
''', re.VERBOSE)

# Get the text off the clipboard. Note that we must open a text or pdf file, select the texts, and use Ctrl c or mouse right lick to copy the texts. pyperclip function will check the clipboard of computer when this python program runs
text = pyperclip.paste() 

# Extract the email/phone from this text 
extractPhone = phoneRegex.findall(text) #findall() method returns list of tuples if regex has groups. A way to solve the problem is to wrap all the regex in a single big group
extractEmail = emailRegex.findall(text)

allPhoneNumbers = [] #a list to keep parsed phone numbers 
for phoneNumber in extractPhone: #loop through the list of tuples 
    allPhoneNumbers.append(phoneNumber[0]) #only the first value of the tuple is the whole phone number 

print(allPhoneNumbers)
print(extractEmail)

# Copy the extracted email/phone to the clipboard 
results = '\n'.join(allPhoneNumbers) + '\n' + '\n'.join(extractEmail) #use join() method to concatenate all phones and emails in a single String value that separate each entity with a new line character '\n'
pyperclip.copy(results) # use Ctrl v or other methods to paste the results to word processing software or text editor
```

# Files 
### Filenames and absolute/relative file paths
Module `os`, `os.path.join()`, `os.getcwd()`, `os.path.abspath()`, `os.path.isabs()`, `os.path.relpath(startPath, endPath)`, `os.path.dirname()`, `os.path.basename()`, `os.path.exists()`, `os.path.isfile()`, `os.path.isdir()`, `os.path.getsize()`, `os.listdir()`, `os.makedirs()`
1. In Windoes OS, folders can contain folders of files. Each file has 2 attirbutes that is "**File name**" and "**File path**", which is usually on the top of the document manager program on PC. We can access the "root" folder, which is "C:\\" in Windows or "/" in Linux OS. Note that file separator on Windows is used a backslash "\", while Linux and MacOS uses a slash "/". Besides, backslashes can escape characters. To include backslash in a `String`, we have to use one backslash before another "\\\\" or use `raw String` as `r''`. 
1. Though we can use `'\\'.join(['folder1', 'folder2', 'folder3','file.png'])` method to make a path, Python has a module `os` which has a method `os.path.join()` to work on. Besides, in Python IDLE, we can use `os.sep` after importing `os` module to check the separator character of the current running OS.  
    ```py 
    import os 
    filePath = os.path.join('folder1', 'folder2', 'folder3','file.png') #this method takes multiple arguments rather than a list of file paths. 
    #folder1/folder2/folder3/file.png
    #this returns a path according to the OS runs the code. 
    ```
1. We can use `os.getcwd()` to get the location where the python program is running (current working directory, cwd). If we put in any filename, the program will assume the file is at the same directory where the program is working at (cwd). This is similar to `pwd` command in Bash terminal. 
1. We can use `os.chdir()` to change the working path. It's similar to use `cd` command in both Windows and Linux for "**change directory**". The argument we give to the method should be the absolute path. Besides, this won't affect the cwd if we leave the program. 
1. There are 2 types of file pathes, <ins>**absolute file path**</ins> and <ins>**relative file path**</ins>. Absolute path always starts with the root directory, while relative path starts from the current working direcotry (cwd). 
1. We can use a single dot "." to represent the current folder, and double dots ".." stands for the parent folder of the current folder. Therefore, we can use "./" for current working directory in Linux for relative file path and "./childFolder/file.txt" to access a text file in the child dirctory of CWD. If we are going to other directories in the which is the same level as CWD, we can use double dots "../folder1/folder2/otherfile.txt". 
1. There are several methods we can use on `os.path`. Note that we can test the methods without having the real files in the pointed directories. 
    1. `os.path.abspath()` this method returns a `String` of the absolut file path of a given file name in the CWD. For example, we have a `file.txt` in CWD and `file2.png` in the other direcotry. 
    1. `os.path.isabs()` can check if a given `String` of file path is an absolute file path and returnsa a boolean `True` or `False`. 
    1. `os.path.relpath(endPath, startPath)` takes 2 arguments, each of which should be an absolute file path. The method returns the relative file path between the absolute path. The 1st argument is the end point, while the 2nd argument is the starting point.  
    1. `os.path.dirname()` for the file path of the given absolute file path. The dir name is everything before the last slash of a path. 
    1. `os.path.basename()` for the file name of the last directory on the given absolute file path. The base name follows the last slash in a path and is the same as the file name. 
    `os.path.exists(absolute file path)` can check if a file is on the given abolsute path and returns a boolean `True` or `Flase`. 
    1. `os.path.getsize()` returns the size of a file in <ins>**bytes**</ins>. 
    1. `os.listdir()` returns a list of files and directories at a given path. Note that this method is on `os` directly without `.path`. Besides, we can use this with other methods that return a path, such as `os.path.getcwd()`. 
    ```py 
    #The pathes are mock up for samples 
    import os 
    print(os.getcwd()) #CWD is at C:\\Users\<Username>\Desktop

    #return the absolute file path of a file 
    print(os.path.abspath('file.txt')) #C:\\Users\<Username>\Desktop\file.txt 
    print(os.path.abspath('../../folder1/file2.png')) #C:\\Users\folder1\file2.png
    
    #check if a file path is a absolute path (which the main purpose is to check if the root directory is correct)
    print(os.path.isabs('c:\\Users\\<Username>\\Desktop')) #True in Windows OS
    print(os.path.isabs('/mnt/c/Users/')) #True in Windows Subsystem of Linux 

    #return the relative file path between 2 given absolute file pathes 
    print(os.path.relpath('c:\\Users\\<Username>\\Desktop\\file.txt', 'c:\\folder1')) #..\Users\<Username>\Desktop\file.txt 
    print(os.path.relpath('/mnt/Users/', '/mnt/abc')) #../Users 

    #return dirtory name 
    print(os.path.dirname('c:\\Users\\<Username>\\Desktop\\file.txt')) #C:\\Users\<Username>\Desktop\
    print(os.path.dirname('/mnt/Users/<Username>/Desktop/file.txt')) #/mnt/Users/<Username>/Desktop/

    #return file name or the last diretory of the given absolute file path
    print(os.path.basename('c:\\Users\\<Username>\\Desktop\\file.txt')) #file.txt 
    print(os.path.basename('c:\\Users\\<Username>\\Desktop')) #Desktop
    print(os.path.basename('/mnt/Users/<Username>/Desktop/file.txt')) #file.txt 
    print(os.path.basename('/mnt/Users/<Username>/Desktop')) #Desktop

    #check if a file exists or on the given path 
    print(os.path.exists('c:\\Users\\<Username>\\Desktop\\file.txt')) #False as this is a mock up 
    print(os.path.exists('/mnt/Users/<Username>/Desktop/file.txt')) #False as this is a mock up

    #check if a given path is a file or directory
    print(os.path.isfile('c:\\Users\\\\Desktop\\file.txt')) #True 
    print(os.path.isfile('c:\\Users\\<Username>\\Desktop')) #False
    print(os.path.isdir('/mnt/Users/<Username>/Desktop/file.txt')) #False
    print(os.path.isdir('/mnt/Users/<Username>/Desktop')) #True

    #get size of a file in bytes
    print(os.path.getsize('c:\\Users\\<Username>\\Desktop\\file.txt')) #True 
    print(os.path.getsize('/mnt/Users/<Username>/Desktop/file.txt')) #False

    #get a list of files and direcotries at a given path 
    print(os.listdir('c:\\Users\\<Username>\\Desktop')) #All the files and folders on the Desktop
    print(os.listdir('/mnt/Users/<Username>/Desktop')) #All the files and folders on the Desktop
    ```
1. We can make a small program to check the size of all files in a folder with `os.listdir()` and `os.path.getsize()`. Note that this doesn't include the folders and their child direcotries and files inside. This only sums the size the files at CWD. 
    ```py
    import os 
    totalSize = 0 #variable that takes the sum of size of all the files 
    for file in os.listdir(os.getcwd()): #for loop to iterate through all the files in current directory
        if not os.path.isfile(os.path.join(os.getcwd(), file)): #if the item is a folder or not a file, skip it 
            continue 
        totalSize += os.path.getsize(os.path.join(os.getcwd(), file)) # add up the size of files iterated and chcked 
    print(totalSize)
    ```
1. `os.makedirs()` method can take both absolute and relative path as its argument and create a folder (directory) at the given path, which is very similar to `mkdir` command in both Windows commmand prompt and Bash terminal. 
    ```py
    #create a folder "test" in CWD
    import os 
    os.getcwd() #/mnt/c/Users/<Username>/Desktop
    os.makedirs(os.path.join(os.getcwd(),test)) #use "os.path.join" to create the abosulte path of CWD
    os.path.isdir('mnt/c/Users/<Username>/Desktop/test') #True 
    ```

### Reading and writing plaintext files 
`open(file path)`, `.read()`, `.close()`, `.readlines()`, `open(file path, 'w')`, `open(file path, 'a')`, module `shelve`, `shelve.open()`, `.keys()`, `.values()`  
1. "Plaintext" files are usually with a suffix `.txt`. This kind of files includes only characters without color and other information. The scripsts of programming code are similar but with different suffix such as `.py` for Python and `.js` for JavaScript. 
1. `open()` function takes an argument of the absolute path of a given file and returns a `file object`. For exampel, if we have a text file "test.txt" in the same directory, we can use `open.(test.txt)` to read the file in Python. Note that without any other argument, `open.()` function runs the file in "read mode" which means it only copies the content of the text file, which can be manipulate by the Python program later. For example, we set a variable `fileObj` to take the returned object. 
    1. Use `.read()` to extract and return the information from a plain text file. The retrieved data also includes new line character `\n` if there's any. Besides, we can chain the methods to have the result in one line. Note that the new line character won't be printed with regular `print()` function, as it changes the line automatically when printing the `String` with new line character. 
    1. After retrieving the data from a file, we can use `.close()` method to close the file. Note that this `.close()` is a method to use on a file object created by `open()`. Besides, we have to use `open()` to call the file if we want to read the file again. 
    1. Besides `.read()` method, we can use `.readlines()` method which returns a list of `Strings` separated by new line character. 
    ```py
    fileObj = open('/mnt/c/Users/<Username>/Desktop/file.txt')
    text = fileObj.read() #data is stored in "text" variable in Python program on PC memory
    print(text) #text characters in file.txt

    textCalled = open('/mnt/c/Users/<Username>/Desktop/file.txt').read() 
    print(textCalled) #text characters in file.txt 

    fileObj.close() #close reading the file 

    textInLines = open('/mnt/c/Users/<Username>/Desktop/file.txt').readlines() 
    print(textInLines) #a list of Strings separated by new line character
    ```
1. There are different modes we can apply on `open()` function for different purposes. 
    1. We can run `open()` function in "**Write Mode**" to overwrite the whole contents of the file. Note that this can be risky that this "**Write Mode**" will wipe out the whole contents and replace with the new given data. We put a 2nd argument to trigger the "**Write Mode**", `open(file path, 'w')`. 
        1. If the file doesn't exist at the given path, the program will create a new file with the given name. To give new data, we can use `.write()` method to overwrite the contents with the given argument. Note that `.write()` method returns how many characters that are written into the file. 
        1. During a file open, if we have multiple statements with `.write()` method, all the contents will be written to the file before closing it. However, we have to add new line character by ourselves if we want to separate the data by line. 
    1. Note that we can switch modes directly with `open(filePath, mode)` function without using `.close()` method to close the file. 
    1. Besides "**Write Mode**", we can use "**Append mode**" which adds new contents to the end of the text file without overwrite or affect the original contents. We can pass the 2nd argument to run this mode, `open(file path, 'a')`. We can use `.write()` method to add contents to the text file. However, the new contents will follow and below the original contents. Thus, we can use this method to prevent overwriting the whle file. 
    ```py
    #open a file in different modes 
    fileObj = open('/mnt/c/Users/<Username>/Desktop/file.txt') #open a file in read mode 
    fileObj.close() #close the file 

    fileObj = open('/mnt/c/Users/<Username>/Desktop/file.txt', 'w') #open a file in write mode 
    print(fileObj.write('Nihao Ma?\n')) #this returns 10 as nine characters are given
    # ".write()" method overwrites the data with given argument and returns the number of characters
    print(fileObj.write('Nihao Ma?')) #inserted as the 2nd line in the file 
    # there will be 2 lines as result of file.txt 

    fileObj = open('/mnt/c/Users/<Username>/Desktop/file.txt', 'a') #open a file in append mode 
    ```
1. We can import module `shelve` and use `shelve.open()` method to store complex data types and structures in variables, such as `List` and `Dictionary` and other non-text type values in the file. 
    1. Similar to regular `open()` function, `shelve.open()` returns a file object, which is vary similar to dictionary type value that we can access its keys and values. 
    1. We can use `.close()` method to close a file opened with `shelve.open()` method. 
    1. In the following example, we create a variable `cats` in "shefFile" object that stores a `List` of cat names. Therefore, other python program can also use `shelve` module to access the variables in the file. 
    1. We can use `.keys()` method on the file object and convert the value into a `List`. 
    ```py 
    import shelve 
    shelfFile = shelve.open('mydata') #create a file "mydata", as there's no file yet (this file has no suffix)
    #"selfFile" is an file object which is like a dictionary type value 
    shelfFile['cats'] = ['Zophie', 'Pooka', 'Fat-tail', 'Cleo'] #assign a new "key" to the object to have a list value 
    shelfFile.close() 

    shelfFile = shelve.open('mydata') #read the file with shelve module 
    print(shelfFile['cats']) #['Zophie', 'Pooka', 'Fat-tail', 'Cleo']

    #use ".keys()" method to check variables in the file object as its "keys"
    print(list(shelfFile.keys())) #turn the value of keys of a shelve file object to a List 
    #['cats']

    #use ".values()" method to check all values that the shelve file object holds 
    print(list(shelfFile.values())) #turn the value of values of a shelve file object to a List. Note this is a 2-dimension list as there only one variable in the file 
    # [['Zophie', 'Pooka', 'Fat-tail', 'Cleo']]

    #add another variable to the file 
    shelfFile['boys'] = ['Mark', 'Roy', 'Dick', 'Bob']
    print(list(shelfFile.keys()))
    # ['boys', 'cats']
    print(list(shelfFile.values()))
    # [['Mark', 'Roy', 'Dick', 'Bob'], ['Zophie', 'Pooka', 'Fat-tail', 'Cleo']]
    ```

### Copying and moving files and folders 
module `shutil` and `os`, `shutil.copy(file, path)`, `shutil.copytree(folderToCopy, duplicateFolder)`, `shutil.move(file, path)`, `os.makedirs(folderPath)` 
1. We can use `shutil` (shell utilities) module to move files around. 
    1.  `shutil.copy(file, path)` method which takes 2 arguments, 1 as the file to be copied and the other is the destination path where to have the copied file. Note that `shutil.copy()` method returns the file path of the copied file which is just a side effect. Besides, we can also give the file name for the 2nd argument of the file path to copy and rename the duplicate at the same time. However, it returns an error, if the directory of the path isn't created yet. Thus, we can use `os.makedirs(folderPath)` to create a directory. 
    1. `shutil.copytree(folderToCopy, duplicateFolder)` is a method to copy a folder (directory). The first argument is the folder which to be copied, and the 2nd argument is the path where to paste the duplicate. This method is similar to `shutil.copy()` method that the folder name can be changed as well. 
    1. `shtil.move(file, path)` is a method to move a file to a given directory. The first argument is the file that we want to move around, and the 2nd argument is the path where we want to move the file to. This method is very similar to `mv` command in Linux bash. Besides, both the Python method and bash command can rename the file in the same way. 
    ```py
    import shutil, os 
    shutil.copy('file.txt', '../') #copy the file to the parent directory of CWD 

    shutil.copy('file.txt', '../copiedfile.txt') #copy and renew the copied file at the parent directory of CWD  

    os.makedirs('testFolder') #create a new directory 
    shutil.copytree('testFolder', 'testFolder_Duplicate') #duplicate the direcotry and give a new name 

    shutil.move('file.txt', 'testFolder') #move file.txt from CWD to ./testFolder
    shutil.move('./testFolder/file.txt', './testFolder/file_rename.txt') #rename file.txt to file_rename.txt
    ``` 

### Deleting files 
module `os` and `shutil`, `os.unlink(file)`, `os.rmdir()` 
1. We can import module `os` and use `os.unlink(file)` to delete the given file. 
1. `os.rmdir(folder)` is similar to `rmdir` command in Linux bash to remove an <ins>**empty**</ins> directory or directories. However, this method only takes one argument which is the folder path to be removed. To delete a not empty folder, we can use `shutil` module with its `shutil.rmtree(folder)` method to remove the directory. This delete method is similar to use `rm -rf` in Linux bash that the folder including its child folders and files will all be removed. 
    ```py
    import shutil, os 
    text = open('test.txt', 'w') #overwrite the file test.txt or create one if it doesn't exist 
    text.write('Hello World!\nNice to meet you\nHow are you today?') #update the given String to file.txt 
    shutil.copy('test.txt', './test_rename.txt') #copy a file.txt and rename it as test_rename.txt 
    os.makedirs('testFolder') #make a new empty directory testFolder/ 
    shutil.move('test_rename.txt', './testFolder') #move the duplicate test_rename.txt to folder testFolder/
    shutil.rmtree('testFolder') #remove the testFolder and folders and files in it 
    ```
1. To prevent the program really deletes all the files and contents, we can use "<ins>**DRY RUN**</ins>" which comment out the removing functions and methods and use `print()` to check the entities that will be removed by the program. 
    ```py 
    import os 
    os.chdir('/mnt/c/Users/<Username>/Desktop') #change CWD to Desktop of the PC 
    for filename in os.listdir(): #use for loop to iterate through the list of file names 
        if filename.endswith('.txt'): #check if the file name is with .txt suffix 
            #os.unlink(filename) #comment out the deleting function/method 
            print(filename) #use print() function to check the file names if they are correct 
    ``` 
1. Module `send2trash` has a function `send2trash.send2trash(file)`. This method is safer that it only sends the file to the recycle bin of the PC. (This works in Windows if the python program runs in command prompt. However, I can't find the bin of WSL at the moment.)

### Walking a directory tree 
Module `os`, `os.walk()`
1. We can use `os.walk()` and pass a root path to check all the child folders and files at the given directory. The method returns 3 values in each iteration, 
    1. "**folderName**" (which is the current folder that the method is looking at), 
    1. "**subfolders**" (which is a `List` value that includes all its child directories), and
    1. "**filenames**" (which is a `List` value that includes all the files in the current directory).
1. Note that we can't access the data of the returned objectg of `os.walk()` directly without using loop to iterate through it. 
1. We can use other functions or methods such as rename certain types of files with their suffix, delete files with `os.unlink()`, and moving a certain types of files to a specific directory with `shutil.move()`. 
    ```py 
    import os 
    for folderName, subfolders, filenames in os.walk('/mnt/c/Users/<Username>/Desktop') 
    # returns a String of the name of checked folder, a List of subfolders in the current directory, and a List of files in the folder 
        print('The folder is ' + folderName)
        print('The subfolders in ' + folderName + ' are: ' + str(subfolders))
        print('The filenames in ' + folderName + ' are: ' + str(filenames))
    ```

# Debugging 
### The raise and assert statements
`raise Exception('Error Message')`, Module `traceback`, `traceback.format_exc()`
#### raise Exception()
1. We can use `raise Exception('ErrorMessage')` to cause an error when the code runs. Besides, we can pass a custom error message as `String` value for the issue. For example, in the following code `boxPrint(symbol, width, height)` function can take a character to print an empty box at given width and height. However, the functions doesn't work good if we pass duplicate characters to it, such as double asterisks " **\*\*** ". However, this is bug but doesn't cause an error and stops the program.  
    ```py
    def boxPrint(symbol, width, height):
        print(symbol * width)
        for i in range(heigh - 2): 
            print(symbol + (' ' * (width - 2)) + symbol )
        print(symbol * width)
    #a function that prints an empty box with selected character such as asterisk '*' or hash '#'
    ```
1. We can add an `IF` statement to the code and use `raise Exception()` to stop the execution in certain circumstances. 
    ```py
    def boxPrint(symbol, width, height):
        if len(symbol) != 1: 
            raise Exception('"symbol" should be a string of length 1')
            #return an error if symbol argument is more than 1 or less than 1 character 
        if (width < 2) or (height < 2):
            raise Exception('"width" and "height" must be greater than or equal to 2')
            #return an error if width or height is less than 2
        print(symbol * width)
        for i in range(height - 2): 
            print(symbol + (' ' * (width - 2)) + symbol )
        print(symbol * width)
    ```
1. When hitting an error and having a traceback, we can import module `traceback` and use `traceback.format_exc()` to collect the error messsage. 
    ```py
    import traceback 
    try: 
        raise Exception('Error Message') #this trigers an error and code in exception runs
    except: 
        errorFile = open('error_log.txt', 'a') #use append mode to open the file
        errorFile.write(traceback.format_exc()) #write the error message to the opened file 
        errorFile.close() #close the file 
        print('The traceback info was written to error_log.txt') 
    ```
#### Assertion 
1. Besides `raise`, we can use `assert` which follows an expression that returns a boolean value, if the expression returns `False`, it returns the error message that follows the statement with a comma ",". 
1. For example, if we have a program to control traffic light that the lights follow a "red" => "green" => "yellow" order to switch the lights and control traffic. However, one of the lights at the intersection must be "red", or the cars on both side will go and crash. 
1. The error may not be obvious that it's a logic flaw rather than an error that crashes the program. Therefore by foreseeing the logical problems, we can have `assert conditionExpression, 'Error Message'` to stop the program. 
1. Keyword `assert` follows an expression that returns a boolean `True` or `False`. It sends the error message given after comma "," on the same line if the condition returns `False`. 
    ```py 
    market_2nd = {'ns': 'green', 'ew': 'red'} #2 traffic lights at the intersection
    def switchLights(intersection): 
    for key in intersection.keys(): 
        if intersection[key] == 'green': #turn light from green to yellow
            intersection[key] = 'yellow'
        elif intersection[key] == 'yellow': #turn light from yellow to red 
            intersection[key] = 'red'
        elif intersection[key] == 'red': #turn light from red to green 
            intersection[key] = 'green'
    assert 'red' in intersection.values(), 'Neither of the light is red ' + str(market_2nd)
    # check if there's any "red" light at market_2nd dictionary. If not, send an assert error 
    switchLights(market_2nd)
    ```
1. An error message when assert is trigerred. 
    ```py 
    #an error message if assert is trigerred
    Traceback (most recent call last):
    File "test.py", line 54, in <module>
        switchLights(market_2nd)
    File "test.py", line 52, in switchLights
        assert 'red' in intersection.values(), 'Neither of the light is red ' + str(market_2nd)
    AssertionError: Neither of the light is red {'ns': 'yello', 'ew': 'green'}
    ```
1. We can use both `raise Exception()` and `assert condition` accordingly. According to each of their features, `raise Exception()` is good at catch errors from user input, while `assert condition` is for expected logic flaw. However, there's no certain way of using them, and they are both useful as long as we can catch the error in advance. 

### Logging 
Module `logging`, `logging.basicConfig(level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')`
1. We put `logging.basicConfig(level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')` which is the setup code for logging in Python. 
1. For example, we can debug a buggy factorial program. 4! = 4 * 3 * 2 * 1 = 24. 
    ```py
    def factorial(n): 
        total = 1
        for i in range(n+1):
            total *= i 
        return total #it returns 0 as i starts from 0 
    ```
1. As the function returns `0` which is not correct, we can use `logging.debug()` after import `logging` module and as the initial setup. 
    ```py
    #use logging to debug 
    logging.debug('Start of the program')
    def factorial(n): 
        logging.debug('Start of factorial(%s)' % (n))
        total = 1
        for i in range(n+1):
            total *= i 
            logging.debug('i is %s, total is %s' % (i, total))
        logging.debug('Return value is %s' % (total))
        return total #it returns 0 as i starts from 0 
    logging.debug('End of the program')
    ```
1. `logging` message from `logging.debug()`. We found that `i` is `0` and `total` variable is also `0` as the variable multiply a zero. 
    ```
    2020-06-08 22:43:35,140 - DEBUG - Start of the program
    2020-06-08 22:43:35,141 - DEBUG - Start of factorial(4)
    2020-06-08 22:43:35,141 - DEBUG - i is 0, total is 0
    2020-06-08 22:43:35,141 - DEBUG - i is 1, total is 0
    2020-06-08 22:43:35,141 - DEBUG - i is 2, total is 0
    2020-06-08 22:43:35,142 - DEBUG - i is 3, total is 0
    2020-06-08 22:43:35,142 - DEBUG - i is 4, total is 0
    2020-06-08 22:43:35,142 - DEBUG - Return value is 0
    0
    2020-06-08 22:43:35,142 - DEBUG - End of the program
    ```
1. Therefore, we can change the `range()` in the `for` loop to `range(1, n+1)` to fix the bug. 
1. Though we can use the same trick with `print()` function to print out all the variables as logging, it's very easy to remove wrong `print()` if there's an one to print out the desirable result. Besides, we can use `logging.disable(logging.CRITICAL)` to turn off the debugger function. Note that the statement should be on the very top before all the `logging.debug()` functions. We can use hash tag "#" to comment out the statement to enable the debugger again as well. 
1. In the module, there are Log levels from low to high. Each of them can be a method and returns the log message in different level. For example, we use `logging.disable(logging.CRITICAL)` to disable the module at `critical` level or lower. Therefore, the whole module in the code is disabled. By the feature, we can set the debuggers at different level and change the level as `logging.disable(logging.DEBUG)` to close only those in `debug` level. Note that the given level is from the level to all levels that is lower than it. 
    1. `critical` is the highest. `logging.critical()`
    1. `error` as `logging.error()`
    1. `warning` as `logging.warning()`
    1. `info` as `logging.info()`
    1. `debug` is the lowest. `logging.debug()` 
1. We can pass another argument to `logging.basicConfig()` method as `filename='filePath'` to write the logs into the file. 
    ```py 
    import logging 
    logging.basicConfig(filename='debugLogs.txt', level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')
    ```

### Debugger in Python
1. In Python IDLE shell, we can use "Debug" function to run the code line by line. The program will execute the next line only if the user allows. 
1. Note that hotkey to restart the shell has changed from <kbd>F5</kbd> to <kbd>Ctrl + F6</kbd>. For example, we have a sum function that add the given numbers up. 
    ```py
    print('Enter the first number to add:')
    first = input() #give 2 
    print('Enter the second number to add:')
    second = input() #give 5
    print('Enter the third number to add:')
    third = input() #give 3
    print('The sum is ' + first + second + third)
    #the result is 253 because the given numbers are acutally String 
    ```
1. We can click '`Over`' button to execute the program line by line. The variables in both local and global scope in the runtime. From the example above, we can check value of variables we get from each `input()` function and find that each of the variables is `String` type value which concatenates when using plus sign "`+`". 
1. The '`Go`' button is like skipping the debuging function and execute the code. We can still check the variables in the global scope after execution. 
1. **`Step` and `Out` button**
    1. If we hav a function in the code, using `Over` in debugger doesn't go into the steps in of the function but just run the function and get the return value. 
    1. We can use `Step` to get into the steps in the body code of the function. If we have other functions in the steps, we can use `Step` to get into the function further. 
    1. If we want to leave from the steps in a function, we can click `Out` to execute the rest of the code and get the return value of the function. 
    1. Besides, pre-built functions such as `print()` can also be stepped in. If we click `Step`, the program will open the IDLE code of the pre-built functions. We then can use `Out` to leave the function, as the functions are well maintained and debugged. 
    ```py 
    def blahBlahBlah():
        print('blah')
        print('blah')
        print('blah')
        moreBlah()
        print('blah')
        print('blah')
        print('blah')
        moreBlah()
        print('blah')
        print('blah')
        print('blah')
        print('blah')
    
    def moreBlah():
        print('more blahs')
        print('more blahs')
        print('more blahs')

    blahBlahBlah()
    ```    
1. We can set a '`breakpoint`' in the code without running through all steps from the first one. By setting the breakpoint, we can click `Go` button, and the code execution will be paused at the step at the breakpoint. We can do this by mouse clicking <kbd>right click</kbd> to set the breakpoint. The breakpoint will be highlighted in the editor. Therefore, we can save much time by skipping clicking '`Over`' to go through steps gradually. This is very inefficient when the code is large. 

# Web Scraping 
### The webrowser module 
Module `webbrowser`, `sys.argv`, Module `requests`
1. We can import `webbrowser` and use `webbrowser.open('https://automatetheboringstuff.com')`. The function will open the webpage with the default browser of the computer. (Note that we can'
t use the program to open in <ins>**WSL**</ins> (Windows subsystem for Linux) directly without setting the default browser for Linux. This function works if we use python to run in <ins>**Windows command prompt**</ins>.)
    1. In WSL, we can run `cmd.exe` to invoke "Windows command prompt" and run the envrionment in bash. However, Python should also be installed on Windows to run the code with Python. 
    1. We can set environment variables in WSL for the default browser. Check ubuntu document for setting up [Environment Variables](https://help.ubuntu.com/community/EnvironmentVariables). For example, we can check this [post](https://stackoverflow.com/questions/52691835/wsl-ubuntu-how-to-open-localhost-in-browser-from-bash-terminal) on stackoverflow and change `wslview` with the following command. This will make Chrome as the default browser. 
    ```bash
    wslview -r $(wslpath -au 'C:\Program Files (x86)\Google\Chrome\Application\chrome.exe')
    # You may change the path according to where you install Chrome browser 
    ```
    1. This works when execute the Python code in WSL with `python3 file.py`. (Noted on 2020/06/10)
    ```py 
    import webbrowser 
    webbrowser.open('https://automatetheboringstuff.com')
    ``` 
1. In Windows OS, we can press <kbd>win + r</kbd> to have `run` function that we can pass the Python program with the `String` as the argument to pass into the program. For example, we can have a Python program that takes address as values and manipulate the passed data. In this case, we can pass `soi 26 Sukhumvit Bangkok` after the program. 
    1. The passed data will be separated by whitespace. 
    1. We can use `sys` module and `sys.argv` function to take the input. 
    ```py 
    import webbrowser, sys, pyperclip 
    sys.argv # ['program.py', 'soi', '26', 'Sukhumvit', 'Bangkok']
    # check if command line arguments were passed 
    if len(sys.argv) > 1: 
        # ignore the first item in the list, which is the program name and get the address 
        address = ' '.join(sys.argv[1:])
    else: 
        # get data input from computer clipboard 
        address = pyperclip.paste()
    # https://www.google.com/maps/place/<ADDRESS>
    webbrowser.open('https://www.google.com/maps/place/' + address) 
    ```
1. We can set up `.bat` batch file to store the environment variable and execute the program with short cut. Check [here](https://automatetheboringstuff.com/2e/appendixb/) for the instructions. Note that there's an at "`@`" sign before python. `%*` in the batch file means the program takes any thing behind the program when execute as arguments. Besides, we can set up environment variables of the OS for the shortcut. For example, we can put the file at `
    ```batch
    @python C:\Users\Username\Desktop\mapit.py %*
    ```

### Downloading from the Web using Requests module 
Module `request`, `request.get('URL')`,`.raise_for_status()`, `.iter_content()`
1. To download a file from URL, we can use `requests` module and `request.get('URL')` to download the file from the URL. This function returns a response object. For example, we can assign the response object a variable `res`. 
1. We can use `res.status_code` to check the status if the data is returned. For example, if the status code is "200", it means the process is successful. If we get a "404", it means the file is <ins>**not found**</ins>. 
1. In this example, the text file are all text and characters. We can use `.text` method to check the whole text retrieved from the file. 
    ```py 
    import requests 
    # the play of romeo and juliet
    res = requests.get('https://automatetheboringstuff.com/files/rj.txt')
    # status code of returned value from server 
    print(res.status_code) 
    res.text # the String value of the whole text file 
    print(len(res.text)) #178978 characters 
    ``` 
1. We can use `.raise_for_status()` method to have other instructions when we get an error from the server. Note that the method returns nothing if the request to the server is successful. This is useful to stop the programm immediately if there's an error. Besides, we can use this in `TRY/EXCEPT` statement to prevent the program from crashing. 
    ```py 
    import requests
    badRes = requests.get('http://automatetheboringstuff.com/files/abcdefghijkl12345789') # request to a non-existing URL 
    badRes.raise_for_status() # returns a traceback error and stop the program 
    ``` 
1. If we download a text file, we can use "**write-binary**" mode to create the file. Note that due to unicode issues, we can't write the text to a file directly as it may cause errors. We can also write the webpage to a file through `.iter_content()` method in a `for` loop. The method returns a chunk of `bytes` data type during each iteration. Note that the method returns how much bytes it writes to the file in each iteration as well. After the program runs, a new file `RomeoAndJuliet.txt` is created in the CWD. 
    ```py 
    import requests 
    res = requests.get('https://automatetheboringstuff.com/files/rj.txt')
    playFile = open('RomeoAndJuliet.txt', 'wb')
    for chunk in res.iter_content(100000):
        playFile.write(chunk) 
    playFile.close()
    ``` 
1. We can check more information at [Requests](https://requests.readthedocs.io/en/master/)

### Parse HTML with Beautiful Soup Module 
Module `bs4` 
1. We can use beautilful soup module `bs4` to parse HTML elements on a webpage. Note that we will use `requests` module to download the webpage as well. Besides, if we don't pass a 2nd argument to `bs4.BeautifulSoup()` method to indicate the parser, it will return a warning which doesn't crash the program. However, we can clarify that we will use `'html.parser'` which is the most famous function of beautiful soup module. 
1. `bs4.BeautifulSoup()` method returns a bs4 object that we can use `.select()` method (which works as CSS selector) to parse the HTML file. `.select()` method retruns a list of matched element. For example, we can have `'a'` to select all anchor tags on the page. The elements in the list is the whole anchor tag elements, such as `<a href="https://automatetheboringstuff.com/">Home</a>`. 
1. We can use `.text` method which parses and returns the value of the HTML element that works as `.text()` method in "**jQuery**". Besides, we can use `.strip()` String method to strip off the white space characters besides, the string. 
1. The downloaded text can be parsed and manipulated with other modules such as **regular expressions** that we can check and filter out all the "phone numbers" and "emails" on the page. 
    ```py 
    import bs4, requests 
    res = requests.get('https://www.amazon.com/Automate-Boring-Stuff-Python-Programming/dp/1593275994')
    res.raise_for_status()
    soup = bs4.BeautifulSoup(res.text, 'html.parser')
    anchorTags = soup.select('a') # CSS selector syntax. For example, select all anchor tags
    print(anchorTags[0]) #<a href="https://automatetheboringstuff.com/">Home</a>
    print(anchorTags[0].text) # Home
    ```
1. We can build a program to parse the price on the webpage. However, this program doesn't work as Amazon website now doesn't allow it to be parsed with undetected browser, as it returns 503 Server Error, noted 2020/06/11. This idea and concept can be applied to other website and 
    ```py 
    import bs4, requests 

    def getAmazonPrice(productURL): 
        res = requests.get(productURL)
        res.raise_for_status()

        soup = BeautifulSoup(res.text, 'html.parser')
        elems = soup.select('#newer-version > div > div > div.a-fixed-left-grid-col.a-col-right > span.a-size-base.a-color-price')
        return elems[0].text.strip()

    price = getAmazonPrice('https://www.amazon.com/Automate-Boring-Stuff-Python-Programming/dp/1593275994')
    print('The price is ' + price)
    ```
1. We can check all the anchor tags on a webpage instead. 
    ```py 
    res = requests.get('https://automatetheboringstuff.com/')
    res.raise_for_status()
    soup = bs4.BeautifulSoup(res.text, 'html.parser')
    links = soup.select('a') 
    for link in links: 
        print(link.text)
    ``` 

### Controlling browser with Selenium module 
Module `selenium`, `webdriver.Chrome()`, `.get()`, `.find_elements_by_css_selector()`, `.click()`, `.send_keys()`, `.back()`, `.forward()`, `.refresh()`, `.quit()`
1. This module works like DOM (Document Object Model) in JavaScript. 
1. We can download `selenium` module and use `from selenium import webdriver` to use the module. Note that we need "**Firefox**" browser, as the module works based on this. Note that we can use "Chrome" as the browser as well, but we need Chrome's WebDriver. We can download the driver from [here](http://chromedriver.chromium.org/downloads). [reference](https://medium.com/@bob800530/selenium-1-%E9%96%8B%E5%95%9Fchrome%E7%80%8F%E8%A6%BD%E5%99%A8-21448980dff9) (in Chinese). We can check the browser version in setting > About Chrome. Note that chromedriver_win32.zip works for both 32-bit and 64-bit version. (Though it works without configure or additional files in the video lecture, Firefox needs a gechodriver to be opened.). Besides, we can't run the code in WSL directly. 
1. After having the webdriver (which is an `.exe` file), we can pass `executable_path="/mnt/c/Users/<Username>/chromedriver.exe"` [reference](https://www.zhihu.com/question/289066826) (in Chinese). The program works on WSL. 
    ```py 
    from selenium import webdriver 
    browser = webdriver.Chrome(executable_path="/mnt/c/Users/<username>/chromedriver.exe") 
    ``` 
1. We then can use `browser.get('URL')` to control the website to access a website. Besides, we can use other methods to manipulate the object. However, we have to use a selector to choose the element(s) and do events such as "**click**" or "**scroll**". We can check the selectors from [here](https://selenium-python.readthedocs.io/api.html#module-selenium.webdriver.remote.webdriver). 
    1. Elements that use the CSS class **_name_**
        1. `browser.find_element_by_class_name(name)`
        1. `browser.finds_element_by_class_name(name)`
    1. Elements that use the CSS  **_selector_**
        1. `browser.find_element_by_class_selector(selector)`
        1. `browser.find_elements_by_class_selector(selector)`
    1. Elements with a matching  **_id_** attribute value 
        1. `browser.find_element_by_id(id)`
        1. `browser.find_elements_by_id(id)`
    1. **`<a>`** tags that completely match the given **_text_** 
        1. `browser.find_element_by_link_text(text)`
        1. `browser.find_elements_by_link_text(text)`
    1. **`<a>`** tags that contain the given **_text_** 
        1. `browser.find_element_by_partial_link_text(text)`
        1. `browser.find_elements_by_partial_link_text(text)`
    1. Elements with a matching **_name_** attribute value such as `<input name="test">`
        1. `browser.find_element_by_name_(name)`
        1. `browser.find_elements_by_name_(name)`
    1. Elements with a matching tag **_name_** which is case insensitive that both `<a>` and `<A>` is matched by 'a' and 'A'. 
        1. `browser.find_element_by_tag_name_(name)`
        1. `browser.find_elements_by_tag_name_(name)`
    ```py 
    from selenium import webdriver 
    browser = webdriver.Chrome(executable_path="/mnt/c/Users/<username>/chromedriver.exe") 
    
    # visit automate the boring stuff website
    browser.get('https://automatetheboringstuff.com/')

    # find only one element 
    element = browser.find_element_by_css_selector('body > div.main > div:nth-child(1) > ul:nth-child(20) > li:nth-child(1) > a')
    # click on the element 
    element.click() 

    # find multiple matched elements 
    elements = browser.find_elements_by_css_selector('p')
    # print out numbers <p> tags found on the page 
    print(len(elements))
    ```
1. We can use the methods to search a place on Google Maps. 
    ```py
    googleMaps = browser.get('https://www.google.com/maps/')
    search = browser.find_element_by_css_selector('#searchboxinput')
    search.send_keys('bangkok')
    submit = browser.find_element_by_css_selector('#searchbox-searchbutton')
    submit.click()
    ```
1. Other functions we can do on browser
    1. `browser.back()` go to last page  
    1. `browser.forward()` go to next page 
    1. `browser.refresh()` referesh the page 
    1. `browser.quit()` close the browser  

# Excel, Word, and PDF documents 
Module `openpyxl`, `openpyxl.load_workbook(filename)`, `get_sheet_names()`, `get_sheet_by_name()`
### Read Excel file 
1. We can use `openpyxl` module to open an `Excel` file. In the program, use `os.chdir(filepath)` to change the directory where the excel file is and create a workbook object (a Excel style sheet). 
    1. Workbook is as a whole Excel file with `.xlsx` file extension. 
    1. In a workbook, there's at least a "**sheet/worksheet**". 
    1. Every worksheet has a table of "**columns**" and "**rows**" with "**cells**". 
1. We can use `openpyxl.load_workbook()` to create a "**workbook object**" and use `.get_sheet_by_name()` method to acquire the data of a worksheet by giving the sheet's name. If we don't know the name, we can use `.get_sheet_names()` method to get a list of sheet names. 
1. We can use square bracket notation as to access element in a `List` to access a "**cell**" in the worksheet, such as sheet['A1']. Besides giving a cell name, we can use `.cell()` method which takes `row` and `column` to refer to the cell in the sheet. For example, `sheet['B1']` is equal to `sheet.cell(row=1, column=2)`. Both notations are useful in different scenarios. We can use `for` loop to iterate through a range and get the values in the cells. 
    ```py 
    import openpyxl 

    workbook = openpyxl.load_workbook('example.xlsx') # create a workbook object 
    sheet = workbook.get_sheet_by_name('Sheet1') # get a sheet from the workbook 
    workbook.get_sheet_names() # a method to return a list of sheet names 
    cell = sheet['A1'] # A1 cell in 'Sheet1'
    print(cell.value) # a datetime object as the value in the Excel sheet is date and time in 'A1' cell 
    print(str(cell.value)) # the value in the cell 
    print(str(sheet['B1'].value)) # 'Apples', the value in cell 'B1'
    print(str(sheet['C1'].value)) # '73', the value in cell 'C1' 
    print(sheet.cell(row=1, column=2) == sheet['B1']) # True
    for i in range(1, 8): 
        print(i, sheet.cell(row=i, column=2).value) # print values in column B from row 1 to 7
    ```
### Edit and create an Excel spreadsheet
1. We can use `openpyxl.Workbook()` method (captial W) to create an excel workbook object (which is stored in computer memory rather than a file in permanent storage yet). The workbook will have one sheet named as default "**Sheet**" (capital S). 
1. With the "**sheet**" object, we can access the value of a given cell. Since the workbook is just created, it's empty. We can retrive or assign value to a cell with `.value()` method. The arugment is a `String`, `Float`, `Boolean` or `Integer`. We can pass Excel formula and function, expression, or equation with `String` value. 
1. To keep the workbook permanently, we can use `wb.save()` method to save the file at CWD. We can use `os` module with `os.chdir` to change the current working directory. To keep file clean and safe, we can change the name to save evertime we've done modification with the same object. 
1. We can use `.create_sheet()` method to create a new sheet in the workbook. Note that the order of spreadsheet starts from 0 as the order in programming language. Besies, we can use `.title` property to check the name of the spreadsheet or assign it a new name. 
    ```py 
    import openpyxl, os 
    wb = openpyxl.Workbook() # create an excel workbook object 
    print(wb.get_sheet_names()) 
    sheet = wb.get_sheet_by_name('Sheet') # get the sheet object 
    sheet['A1'].value # get value of a cell 
    print(sheet['A1'].value == None) # the spreadsheet and cell are both empty
    sheet['A1'].value = 42
    sheet['A2'].value = 'Hello'
    sheet['A3'].value = '=1+1' # pass an expression to the cell

    os.chdir('/mnt/c/Users/<Username>/Desktop/') # change directory to Desktop 
    wb.save('test.xlsx') # save the file as 'test.xlsx'
    sheet2 = wb.create_sheet()
    print(wb.get_sheet_names())
    print(sheet2.title)
    sheet2.title = 'My New Sheet Name' # change spreadsheet name of sheet2 
    wb.save('test2.xlsx') # save file as test2.xlsx 
    ```

### Reading and editing PDFs 
Module `PyPDF2`, `PyPDF2.PdfFileReader()`, `.numPages`, `.getPage()`, `.extractText()`
1. We can use `PyPDF2` module (note that all characters besides 'y' are in captial letters) to manipulate PDF files. Since PDF files are binary files that can also include other media, such as images, the module can't open or parse some of the PDF files, of if the file is encrypted. 
1. `PyPDF2` or other module can hardly editing and modifying the text-level of the document due to complexity of the binary file. However, we can manipualte the files on page-level, which means that we can re-order pages, delete some of the pages, or merge several PDF files into a single one. 
1. We can use `PyPDF2.PdfFileReader()` to create a PDF file object and use `.numPages` which returns the number of pages of a PDF file. We can create a page object with `.getPage()` method which takes `Integer` as argument as the page of the file. Note that the page number starts from 0 as the 1st page. Besides, we can use `.extractText()`method to extract text values from a page object. By combining the methods, we can use a `for` loop to print out all text of the PDF file from the first to last page. 
1. To merge 2 PDF files, we can use `PyPDF2.PdfFileWriter()` method to create an empty PDF file which is stored in working memory (rather than permanent storage), use `for` loop and `.addPage()` method to add pages to the blank PDF file. We then create an output object that is opened in "**binary write mode**" and save the PDF file in the working memory to the given PDF file and use `.close()` method to close the file. 
1. 
    ```py 
    # Reading and editing PDFs
    pdfFile = open('meetingminutes.pdf', 'rb')
    reader = PyPDF2.PdfFileReader(pdfFile)
    print(reader.numPages) # return numbers of pages in the pdf file
    page = reader.getPage(0) # page object holds number of page which starts from 0 as the 1st page
    text = page.extractText() # return parsed text as Python String 
    for pageNum in range(reader.numPages):
        print(reader.getPage(pageNum).extractText()) 

    # create 2 pdf file objects with reading binary mode 
    pdfFile1 = open('meetingminutes.pdf', 'rb')
    pdfFile2 = open('meetingminutes2.pdf', 'rb') 

    reader1 = PyPDF2.PdfFileReader(pdfFile1)
    reader2 = PyPDF2.PdfFileReader(pdfFile2)
    writer = PyPDF2.PdfFileWriter() # create a writer object which is blank pdf 
    # iterates through all pages and assign to the blank PDF file
    for pageNum in range (reader1.numPages): 
        page = reader1.getPage(pageNum)
        writer.addPage(page)

    for pageNum in range (reader2.numPages):
        page = reader2.getPage(pageNum)
        writer.addPage(page)

    os.chdir('/mnt/c/Users/ht016/Desktop') # change CWD
    outputFile = open('combinedminutes.pdf', 'wb') # create a file in writing binary mode
    writer.write(outputFile) # assign the PDF file to the output file and save to the current working directory 
    outputFile.close()
    pdfFile1.close()
    pdfFile2.close()
    ```

### Reading and editing word documents 
Module `docx` (download with python-docx), `docx.Document()`, `.paragraphs`, `.text`, `runs`, `.bold`, `.italic`, `.underline`, `.save()`, `add_paragraph()`, `add_run()`
1. A `document` object created from `python-docx` module represents a whole word file. 
1. There more objects in deeper layer, as `document` > `paragraph` > `run`. 
1. `run` objects returns when the styel of the paragraph changes. It also has `.bold`, `.italic`, and `underline` which returns a boolean `True`, or `None` when the style is not found. 
    ```py
    import docx
    # Reading and editing Word Documents
    d = docx.Document('/mnt/c/Users/<Username>/Desktop/demo.docx')

    paragraph = d.paragraphs # list of paragraphs objects from the document 

    i = 1
    for p in paragraph: # use .text method to parse value of the object
        print(p.text) 
        for s in p.runs: # use .runs method returns a list of run objects and to check if any style changes in paragraph
            print(str(i)+ '. ' + s.text)
            print(s.bold)
            print(s.italic)
            print(s.underline)
            i += 1
    ```
1. We can use other `.text` method to change the content paragraph object and give different styles as well. After changing, we can use `d.save()` to save the change to the file or a new file. Besides, the paragraph object has a property `.style` that we can check or change its value. This `.style` method can be used on both `paragraph` and `run` object. 
    ```py
    import docx
    # Reading and editing Word Documents
    d = docx.Document('/mnt/c/Users/<Username>/Desktop/demo.docx')

    paragraph = d.paragraphs # list of paragraphs objects from the document

    print(paragraph[1].runs[4].text) # parse and return the text value of the run object
    print(paragraph[1].runs[4].italic) # check if the run object is in "italic" style 

    paragraph[1].runs[4].underline = True # change style of the run object
    paragraph[1].runs[4].text = 'italic and underlined' # change text content 
    print(paragraph[1].style) # change style of the paragraph object 
    paragraph[1].style = 'Title' # change style from 'normal' to 'Title'

    d.save('/mnt/c/Users/<Username>/Desktop/demo2.docx') # save a new file 
    ```
1. Similar to creating a new Excel file in computer memory, we can use `docx.Document()` and assign it to a variable, such as `d`. This represents an empty Word file. We then can use `.add_paragraph()` method. Besides, we can use `.add_run()` to add a new "run" in the same paragraph. 
    ```py
    d = docx.Document()
    d.add_paragraph('Hello this is a paragraph.') # add new paragraph
    d.add_paragraph('This is another paragraph.') # add a new paragraph

    d.save('./demo3.docx')

    d.paragraphs[0].add_run(' This is a new run.')
    d.paragraphs[0].runs[1].bold = True 
    d.save('./demo4.docx')
    ```
1. We can create a function to create all the paragraphs and text from a Word document. 
    ```py
    import docx 

    def getText(filename):
        doc = docx.Document(filename) 
        fullText = []
        for para in doc.paragraphs:
            fullText.append(para.text)
        return ('\n').join(fullText)

    print(getText('./demo.docx'))
    ```

# Email
### Sending Emails 
Module `smtplib` 
1. We can use "SMTP" (simple mail transfer protocol) to send email from other email services such as Google or other email service providers. We use `conn = smtplib.SMTP('smtp.gmail.com', port 587)` to create a connection object. Note that we can change the SMTP server to other address and the port may change according to the service provider. 
1. We then use `conn.ehlo()` method to connect to server. Note that the method returns a status and "**byte**" type data which looks like `String` but starts with 'b' when typed as code. If the status code is 2xx, it means the connection is good. 
1. If the connection is ready, we then use `conn.starttls()` to start "**TLS**" encrption, and use `conn.login(username, password)`. This method also returns a status code to show if the login process is successful. 
1. If login is good, we can use `conn.sendmail(fromEmail, toEmail, emailBodyText)`. The `emailBodyText` follows a certain format as it also includes the header (subject) of the email. It starts with "Subject:" (capital S) with subject text and ends with 2 new line characters "`\n`" to finish the email subejct. We then can start the message body and finish the `String` value. This method returns a `Dictionary` value which includes all the email(s) that is failed to send. 
1. After finishing sending email, we can use `conn.quit()` to stop the connection to SMTP server. 
1. Note that by the time using Gmail, Google may stop you due to less secure app. We can change the setting at [here](https://myaccount.google.com/lesssecureapps) after login to your Google Account to allow less secure app access. 
    ```py 
    import smtplib
    conn = smtplib.SMTP('smtp.gmail.com', 587) # create a connection object 
    conn.ehlo() # to start connection to the server 
    conn.starttls() # start TLS encryption (most modern email server requires this) 
    conn.login('username@gmail.com', 'password') # login with username and password
    conn.sendmail('username@gmail.com', 'username@gmail.com', "Subject: A test message from Python program \n\n Dear Allen, \nIf you've seen this email, it means the program runs well.\n\n\nRegards\n\nAllen")
    conn.quit()
    ```

### Checking Email Inbox
Module `imapclient`, Module `pyzmail36`
1. We can use IMAP, internet message access protocol, to access the emails from the service. 
1. We can check IMAP cheat sheet for the commands without remembering all the methods. The parameters are mostly the same when using most of the time. We can check it [here](https://automatetheboringstuff.com/2e/chapter18/) 
    ```py
    # check email through imap
    import imapclient 
    conn = imapclient.IMAPClient('imap.gmail.com', ssl=True) # connect to IMAP server with SSL
    conn.login('username@gmail.com', 'password') # login to IMAP server
    conn.select_folder('INBOX', readonly=True)
    #UIDs = conn.search(['SINCE 17-Jun-2020']) # search all mails after 2020/06/17 
    UIDs = conn.search(['UNSEEN']) # search all mails after 2020/06/17 
    print(UIDs) # print out all the IDs found by search method 
    ID = input("What's the ID you want to search?") # get a ID 
    ID = int(ID)
    rawMessage = conn.fetch([ID], ['BODY[]', 'FLAGS']) # store the returned raw message 

    import pyzmail # the module to parse the raw message
    message = pyzmail.PyzMessage.factory(rawMessage[ID][b'BODY[]']) # parse the email 
    print('Email Subject: ' + message.get_subject()) # subject of the email 
    print(message.get_addresses('from')) # sent from which email address  
    print(message.get_addresses('bcc')) # email address which bcc to
    print(message.text_part) # check if there's any text in the email body or it's made from HTML
    print(message.html_part) # check if there's any html in the email body (it could be None)

    print(message.text_part.get_payload().decode('UTF-8')) # retrieve the text body and use UTF-8 to decode 
    print('Charset: ' + message.text_part.charset)

    print(conn.list_folders()) # return a list of folders of the email account 
    conn.select_folder('INBOX', readonly=False) # direct to INBOX folder
    UIDs = conn.search(['ON 31-Aug-2019']) # search for emails that was sent on 2019/08/31
    print(UIDs) # print out the list of UIDs
    ID = input('Which email to delete?')
    conn.delete_messages([ID]) # delete an email in INBOX by given UID 
    ```

### Controlling the mouse from Python
Module `pyautogui`, `.size()`, `.moveTo()`, `.moveRel()`, `.click()`, `.doubleClick()`, `.positio()`, `.displayMousePosition()`
Note: Though the instruction works normal on Windows, it's not available to work in WSL. 
1. We can control the mouse cursor by `pyautogui` module. The coordinate starts from (0, 0) which is the top left corner of the screen. We can use `pyautogui.size()` to check screen resolution or set them to variables. 
    ```py 
    import pyautogui 
    print(pyautogui.size()) # print size of the computer monitor
    width, height = pyautogui.size() 
    print(width)
    print(height)
    print(pyautogui.position()) # print location of mouse cursor on the screen
    ``` 
1. We can use `pyautogui.moveTo(x, y)` to a given coordination on (x, y) on the screen. We can given duration as an argument, so the mouse cursor will be moved from the current location to the given location at the duration of time. `pyautogui.moveTo(x, y, duration=1.5)`. Note that the unit for duration is in second. 
1. Besides absolute position, we can move the mouse cursor move to location where related to its current location by using `pyautogui.moveRel(x, y)`. The method is similar to `.moveTo()` and takes an argument `duration` as well. Note that if we'd like to move the cursor up, we have to give negative value for y-offset. 
1. We can use `pyautogui.click(x, y)` and `pyautogui.doubleClick(x, y)` for mouse click at a given position. Note that we can use `pyautogui.position()` to check the location of the object that we want the mouse cursor to click or double click. In addition, if we don't pass any arguments, the mouse cursor will just click at where it is. 
1. We may lose control when using this automation module, as by the time we can't do anything else as the Python program controls the mouse. However, we can move the mouse cursor during the pause of execution to the top left corner. The module will detect the position during the pause and stop the program. 
1. We can use `pyautogui.displayMousePosition()` to open a small program in terminal or command prompt to display to position in x and y coordinate and the color on the screen. Note that this function is better to run in terminal or command prompt rather than Python IDLE. 

### Controlling the keyboard from Python 
Module `pyautogui`
1. We can use the same module as controlling mouse by Python. We can use `pyautogui.typewrite(keys)` method and give the words that we want the program to type. For example, we can let the program type in a text editor. This method also takes an arugment `interval` which unit is in seconds that will gradually type in the given contents. 
1. We can give key command in sequence by passing a `List` to the method. The program will pass the key one by one rather than typing a `String`. Besides, we can use `pyautogui.KEYBOARD_KEYS` to check all the keys on the keyboard which we can pass to the program. In addition, we can use `pyautogui.press(key)` to press a single key by the method. 
1. For keyboard shortcuts such as <kbd>Ctrl + o</kbd> or <kbd>Ctrl + Alt + Del</kbd>, we can use `pyautogui.hotkey('ctrl','o')`. 
    ```py
    # control the mouse to click text editor and type in some contents 
    pyautogui.moveTo(1081, 1265, duration=2)
    pyautogui.click()
    pyautogui.moveTo(582, 481, duration=2)
    pyautogui.typewrite('Hello World!', interval=1)

    # pass a sequence of key commands in a list 
    pyautogui.moveTo(0, 0, duration=2)
    pyautogui.typewrite(['a', 'b', 'left', 'left', 'X', 'Y'], interval=1)

    # check all the available keys 
    pyautogui.KEYBOARD_KEYS

    # press a single key on keyboard 
    pyautogui.press('win')

    # press key(s) by sequence without releasing 
    pyautogui.hotkey('ctrl', 'alt', 'deletetype')
    ```

### Screenshots and Image Recognition 
Module `pyautogui` 
1. We can use `pyautogui.screenshot()` which method takes a screen shot of the computer and store it as a "**pillow image object**". Note that this pillow image module is part of "pyautogui" module but not mentioned in the course. We can check for more information at [here](https://automatetheboringstuff.com/2e/chapter19/). 
1. We can give a filename with path to let the method save the screenshot at a given location. For example, we can store the screenshot image at desktop by `pyautogui.screenshot('C:\\Users\\\<username>\\Desktop\\screenshot.PNG')
1. To locate a location by searching image, we can corp part of the screen and keep it as image. We then use `pyautogui.locateOnScreen(filepath)` to search for the location on the screen. The method returns 4 values which is x and y coordinate from the top-left corner of the object with "width" and "height". For example, we can corp the key "7" of calculator and store it as 'calc7key.png' on desktop. We can use `pyautogui.locateCenterOnScreen(filepath)` to get the coordinate of the center of the image on screen. 
    ```py 
    import pyautogui 
    pyautogui.locateOnScreen('C:\\Users\\<username>\\Desktop\\screenshot.PNG')
    # return (x, y, width, height)
    pyautogui.locateCenterOnScreen('C:\\Users\\<username>\\Desktop\\screenshot.PNG')
    # return (x , y) which is the center of the image 
    ```
1. After we get the coordinate, we can use other commands such as `pyautogui.moveTo((x, y), duration=1)` and `pyautogui.click()`, or use `pyautogui.click(x, y)` directly. Note that the image crop must be perfect match for ever pixal. The calculator we use is slightly transparent, so we have to be very careful for it background color when corp the screenshot. 
1. This image recognition is very useful such as automation the process to play some games or other repetitive tasks. 