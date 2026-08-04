# Python Data Structure 
1. There are 3 main types of data structures in Python
    1. Lists 
    1. Dictionaries 
    1. Tuples 

# Week 1 - Strings 
`.find()`, `.upper()`, `.lower()`, `.replace()`, `.strip()`
1. Square brackets "[ ]" are the "index operator" to call the characters out from a `String` value. "index value" is the code or value in the square brackets. In the following example, "fruit[1]" is called as "fruit sub one". "sub" means the square brackets, while the index value in the brackets are after the "sub". 
    ```py 
    fruit = 'banana'
    letter = fruit[1] 
    print(letter) #a
    x = 3
    w = fruit[x-1]
    print(w) #n
    ```
1. The index value must be an integer and starts from "**0**". 
1. The index value can be an expression that is computed. For example, a variable assigned with a constant and put into the square brackets to do mathematical computation, such as w = fruit[x-1] in the code above. 
1. `len` is a built-in function in Python that it shows the length, number of characters, of a `String`. 
1. We can use a `for` or `while` loop to check through each of the characters of a `String`. Besides using conditions with `while` loop or range with `for` loop, we can use keyword `in` to go through the characters of a `String`. 
    ```py
    fruit = 'banana'
    index = 0
    while index < len(fruit): 
        letter = fruit[index]
        print(index, letter)
        index = index + 1
    
    for index in range(len(fruit)):
        print(fruit[index])
    
    for index in fruit: 
        print(index)
    ```
1. We can set up a "counter" and `if` statement to check the number of a certain letter in the `String`. For example, we can check how many 'a' characters in the `String`. Note that iteration variable "iterates" through the sequence (ordered set). THe block (body) of code is executed once for each value in the sequence. The iteration variable moves through all the values in the squence. 
    ```py
    fruit = 'banana'
    count = 0 
    for letter in fruit: 
        if letter == 'a' 
            count = count + 1
    print(count)
    ```
1. We can use a colon operator ":" to slice `String` values. The number before colon is the starting of the slice, while the nubmer after colon is the end slice "up to but not including". If the 2nd number (latter one) is beyond the end of the `String`, it stops at the end. Python doesn't return an error here though the range exceed the available location. If we leave off the 1st number or the last number of the slice, it is assumed to be the very beginning or end of the `String` respectively. 
    ```py 
    s = 'Monty Python' 
    print(s[0:4]) # Mont
    print(s[6:7]) # P
    print(s[6:20]) # Python
    print(s[:2]) # Mo
    print(s[8:]) # thon
    print(s[:]) # Monty Python 
    ```
1. Python has a number of `String` functions in the string library. The functions are called "methods. Rather than modifying the original `String`, the function returns a new `String` that has been altered. 
1. Similar to `len()` or `print()` functions, `dir()` gives the guideline that what methods can be applied according to the type of the value. 
1. `.find()` to search for a substring within another string. `String` position starts at 0. If the substring isn't found, `.find()` method returns "-1". The method will return the location, or the index, of the character in the `String` value. In addition, a variable with assignment in integer value or the position in integer value can be given to anchor the starting point. It means that `.find()` takes a 2nd argument which is the starting location to search for the given character. 
1. In the following example, the code is to print the domain of the email from the total value. "atpos" can be changed to "21" or any other location after "4", as the 1st white space is at "4". On the other hand, a variable "host" is assigned with slicing from the "@" sign up to the position of the white space after the domain name, but not including the white space itself. 
    ```py 
    data = 'From stephen.marquard@uct.ac.za Sat Jan 5 09:13:16 2008'
    atpos = data.find("@")
    print(atpos) # 21
    sppos = data.find(" ", atpos) # atpos can be 21, so then the location of the whitespace " " will start to be located from the position assigned 
    print(sppos) # 31
    host = data[atpos+1:sppos]
    print(host) # uct.ac.za 
    ```
1. Other `String` methods such as `.lower()` to turn all string characters to lowercase, `.upper()` to turn all string characters to uppercase, and `.replace()` which takes 2 arguments. The 1st one is the character to be found in the `String`, and the 2nd one is the one to be replaced. Note that these methods return a new value which we can assign the returned value to a variable to keep it. 
1. `.strip()` will take out both the white spaces at the beginning and the end. `.lstrip()` will take the whitespaces out at the beginning, as the "l" stands for "left". `.rstrip()` on the other hand, is with "r" for the right and takes out the whitespace at the end. 
1. `startswith()` will check if the value starts with a certain character. The method returns only boolean values `True` or `False`. The value ot be checked must be in `String` type. 