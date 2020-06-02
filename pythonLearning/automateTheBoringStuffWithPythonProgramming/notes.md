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

**Scope**
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

**For loops with LIsts, Multiple Assignment, and Augmented Operators** 
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

**List Methods** 
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

**Lists vs Strings** 
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

**The dictionary data type**
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

**Data Structure**
1. Here is introducing about the combination of using both dictionary and list value to create a hybrid type of value. 
1. We can use `type(value)` to check the type of the value whether it is `string`, `integer`, `float`, etc. 

**Advanced string syntax** 
1. We can use escape character which is backslash `\` that we can use both single and double quote signs in a string value. For example, `\'`, `\"`, `\t` (tab), `\n` (line break), `\\` (backslash)
1. We can use raw string value which is a string started with character `r` and in quotes such as `r"hello"`. In this case, a back slash won't be treated as a escape character. 
    ```python
    print(r'Hello I\`m Allen.') #Hello I\'m Allen
    #Note that in this case we can't take the back slash off either as it will cause an error. 
    ```
1. `""" string value that can be in multiple lines. """` anything bettwen the pair of triple quotes will be considered to be part of the string value, even though the strings are in different lines. This features is very useful when parsing large amount of text. 
1. `indices`, `slices` (square bracket notation), `in` and `not in` all work with string values. 

**String methods** 
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

**String Formatting** 
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

## **Regular Expressions** 
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