PHP Programming Language Tutorial - Full Course
Length: 4:36:38 
[Link](https://youtu.be/OK_JCtrrv-c) - https://youtu.be/OK_JCtrrv-c
1. [Setting up PHP](#Setting-up-PHP)
1. [Hello World and Setup](#Hello-World-and-Setup)
1. [Variables](#Variables)
1. [Data Types](#Data-Types)
1. [Working with Strings](#Working-with-Strings)
1. [Working with Numbers](#Working-with-Numbers)
1. [Getting User Input](#Getting-User-Input)
1. [URL Parameters](#URL-Parameters)
1. [POST vs GET](#post-vs-get)
1. [Arrays](#arrays)
1. [Using Checkboxes](#using-checkboxes)
1. [Associative Arrays](#associative-arrays)
1. [Functions](#functions)
1. [Return Statements](#return-statements)
1. [If Statements](#if-statements)
1. [If Statements (con't)](#If-Statements-(con't))
1. [Building a Better Calculator](#Building-a-Better-Calculator)
1. [Switch Statements](#switch-statements)
1. [While Loops](#while-loops)
1. [For Loops](#for-loops)
1. [Comments](#comments)
1. [Including HTML](#including-html)
1. [Include: PHP](#includ:-php)
1. [Classes & Objects](#classes-&-objects)
1. [Constructors](#constructors)
1. [Object Functions - PHP - Tutorial 31](#object-functions---php---tutorial-31)
1. [Getters & Setters](#getters-&-setters)
1. [Inheritance](#inheritance)


# Setting up PHP
1. In WSL we can download the language with `sudo apt install php7.2-cli`. 
1. We can following command to start a server. PHP will find the site code to run in the default directory, which is the path we type the code `php -S localhost:4000`. In this case, we create a `site.php` file in `www` folder in the root directory. 
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        
        <?php
        echo("Hellow World");
        ?>

    </body>
    </html>
    ```
1. The root directly will be the root folder of the website. For example, if we have `site.php` file in `www` folder, we can access it thourgh `http://localhost:4000/www/site.php`. In this case, we have a simple command `echo("Hello World")`, which prints `Hello World` in the HTML file and render the the page in the browser. 
1. At the end of every line of code, we should have a semi-column `;` to end the statement. 

# Hello World and Setup
1. `echo` is similar to `print()` function in Python and `console.log()` in JavaScript.
1. We can use `echo()` to render text and HTML elemetns from the PHP file. 
    ```php
    echo "<h1>Allen's Site</h1>";
    ```
1. Every time the user refresh the webpage, it makes a new request to the server, and the script runs. As other programming languages, PHP runs the script in an order from top to bottom. 

# Variables 
1. Variables are like containers that we can store values in the varible and use it in somewhere else. 
1. PHP variables are declared by dollar sign `$variable` and followed with variable name. Similar to JavaScript, we can declare the variable without specifying the type of the value and change it directly. Besides, we can change the value to other primitive types of value direclty. 
    ```php
    $characterName = "John";
    $characterAge = 35;
    echo "There once was a man named $characterName <br>";
    echo "He was $characterAge years old <br>";
    $characterName = "Mike";
    echo "He really liked the name $characterName <br>";
    echo "But didn't like being $characterAge <br>";
    ```

# Data Types 
1. `String` is a plain text. If the value is wrapped with quotation marks `"` (it can be single or double quotes). 
1. `Integer` is a whole number without decimal points. In PHP, integers and floats are different type. 
1. `Float` is numbers with decimals such as `30.0`. 
1. `Boolean` is `true` and `false`. 
1. `null` stands for `null` value (no value) in PHP. 

# Working With Strings 
1. Use `strtolower()` function to convert a string to all lowercase. 
1. Use `strtoupper()` function to convert a string to all uppercase. 
1. Use `strlen()` to check the length of a string (number of characters). 
1. Use square brackets `[]` and index to access a certain character in the string. 
    ```php
    $phrase = "Giraffe Academy";
    echo strtolower($phrase);
    echo strtoupper($phrase);
    echo strlen($phrase);
    echo $phrase[0];
    ```
1. Unlike JavaScript, `String` type values are mutable in PHP. We can use square brackets with index to access a position in a string and repalce the character. 
    ```php
    $phrase = "Giraffe Academy";
    $phrase[0] = "B";
    echo $phrase; 
    ```
1. We can replace a bunch of characters by using `str_replace()`. The 1st argument is the string to be replaced, the 2nd is the new string to replace, and the 3rd (last) one is the variable. In JavaScript, we can only duplicate the variable and replace part of the value. 
    ```php
    $phrase = "Giraffe Academy";
    echo str_replace("Giraffe", "Panda", $phrase); 
    ```
1. We can use `substr()` function to retrieve part of the string. The 1st argument is the variable, and the 2nd argument is the starting index of the character in string, so PHP will retrieve the phrase from the given starting position to the end of the string. We can give a 3rd argument which is the length of the string to be retrieved. For example, if we give 3, only 3 characters from the given starting position will be retrieved. 
    ```php
    $phrase = "Giraffe Academy";
    substr($phrase, 8); // Academy
    substr($phrase, 8, 3); // Aca
    ```

# Working with Numbers 
1. We can give numbers directly without other characters. 
1. PHP can handle negative numbers that is with a dash or minus sign `-`. 
1. `Integers` and `Floats` are different types of value in PHP. 
1. If we put expression in `echo` directly such as `echo 3 + 5`, PHP returns the result of the operation. 
1. Percentage sign `%` in PHP works the same as it works in JavaScript that the operator means `mod` that it return the remainder after division. For example, `5 % 3` results in 2. 
1. PHP math operations works as regular math that expression in parenthesis and mutiplication and division have higher priority than plus and minus operations. 
1. We can assign number value to variables as well. The math operations in PHP is similar to those in JavaScript. 
    ```php
    $num = 10;
    $num++ // adds 1 to num variable 
    $num-- // substract 1 to num variable 
    $num = $num + 25; // adds 25 to num 
    $num += 25; // shorthand to add 25 to num 
    $num *= 25; // shorthand to mutiply num by 25 
    ```
1. There are other math function such as `Math` module in JavaScript
    1. Return the absolute number with `abs()`. Similar to `Math.abs()` method in JavaScript. 
    1. Return the power of a base with `pow()`. Similar to `Math.pow()` method in JavaScript. 
    1. Return the sqaure root of a number `sqrt()`. Similar to `Math.sqrt()` in JavaScript. 
    1. Return the largest value from the given value `max()`. Similar to `Math.max()` in JavaScript. 
    1. Return the lowest value from the given value `min()`. Similar to `Math.min()` in JavaScript. 
    1. Return the rounded number `round()`. Similar to `Math.round()` in JavaScript. 
    1. Return the rounded up number `ceil()`. Similar to `Math.ceil()` in JavaScript.
    1. Return the rounded down number `floor()`. Similar to `Math.floor()` in JavaScript.
    ```php
    echo abs(-100); // 100 
    echo pow(2, 4); // 16
    echo sqrt(144); // 12
    echo max(2, 10); // 10
    echo min(2, 10); // 2
    echo round(3.2); // 3
    echo ceil(3.1); // 4
    echo floor(3.9); // 3
    ```

# Getting User Input
1. We can create a HTML `form` with `input` tag to collect input from users. `form` element has 2 attributes to be used here is the action that this `<form>` elemenet will be handled with `site.php` script with a HTTP method `GET`, as we are going to retrieve the data. In the `<input>` tag, we can specify the input value to be stored in the variable with attribute `name`. 
1. In PHP script, we can use `$_GET[]` to get the variable from the HTML elements. 
    ```php 
    <form action="site.php" method="GET">
        Name: <input type="text" name="userName">
        <br>
        Age: <input type="text" name="age">
        <br>
        <input type="submit">
    </form>
    <br>
    Your name is <?php echo $_GET["userName"];?>
    <br>
    Your age is <?php echo $_GET["age"];?>
    ```

# Building a Basic Calculator
1. Similar to get user input, we can have a calculating function to manipulate user input. 
1. Note that user input will be sent to the server as parameters in the URL which is after question mark `?` in the URL. If we change it directly, we can modify the result printed on by the PHP function directly. 
1. Every time a input given in the submit form, the key/value pair will be sent to the sever in the URL. 
    ```php
    <form action="site.php" method="GET">
        <input type="number" name="num1">
        <br>
        <input type="number" name="num2">
        <br>
        <input type="submit">
    </form>

    Answer: <?php
        echo $_GET["num1"] + $_GET["num2"];
    ?>
    ```
    <img src="./images/parametersInURL.PNG">

# Building a Mad Libs Game
1. The purpose is to collect user input from the `form` tag and render the collected input into the pre-built template. 
1. Similar to the function for numbering operations, the input will be stored and passed to the PHP file through URL parameters. 
    ```php
    <form action="site.php" method="GET">
        Color: <input type="text" name="color"> <br>
        Plural Noun: <input type="text" name="pluralNoun"> <br>
        Celebrity: <input type="text" name="celebrity"> <br>
        <input type="submit">
    </form>

    <?php
        $color = $_GET["color"];
        $pluralNoun = $_GET["pluralNoun"];
        $celebrity = $_GET["celebrity"];
        echo "Roses are $color <br>";
        echo "$pluralNoun are blue <br>";
        echo "I love $celebrity <br>";
    ?>
    ```

# URL Parameters
1. When we submit a form with input, the value will be sent from client to server through URL as parameters. 
1. The parameters in the URL is key/value pair that passed after the route of the website and starts with a question mark `?`. Besides, we can pass multiple parameters that are concatenate with ampersand `&`.
1. Therefore, though we can store value in the URL, the method is not secure, as they are visible. Besides, it's very easy to be modified. 

# POST vs GET
1. When we use a `GET` method, data will be sent through URL parameter from client to server, so the data transfer isn't secure, as the data will be visible, especially for sending sesitive data such as password. Besides, it can also be changed directly on the search bar. Note that the value sending from client to server through parameters in URL. 
1. In this case for transferring sensitive data, we can use `POST` method to send the data. By using `POST` method, the data will not be shown in the URL when sending request from client to server, which is a safer method. 
    ```php
    <form action="site.php" method="POST">
        Password: <input type="password" name="password"> <br>
        <input type="submit">
    </form>
    <br><br>
    <?php
        echo $_POST["password"];
    ?>
    ```
    <img src="./images/postMethodPassword.PNG">
1. In most of the cases, in order to secure the data transmission, developers tend to use `POST` request rather than `GET`. 

# Arrays
1. We can use a larger container as a variable to store multiple information in it. 
1. We can declare a variable and assign it with `array()` function to decalre an `Array`. Each element of the array is separated by comma. For example, `$friends = array("Kevin", "Karen", "Oscar", "Jim");`
1. We can use square brackets with index to access certain element at the given position. As other progarmming language, the index position starts from `0`.
1. We can use index to access a position of an array and modify its value. 
1. We can add additional element with the given position. 
1. We can use `count` which is similar to `Array.length` in JavaScript to check the number of elements of an array. 
    ```php
    $friends = array("Kevin", "Karen", "Oscar", "Jim");
    echo $friends[1]; // Karen
    
    // modify information
    $friends[2] = "Tim"; 
    echo $friends[2]; // Tim

    // add additional element 
    $friends[4] = "Jane";
    echo $friends[4]; // Jane

    echo count($friends); // 5 
    ```

# Using Checkboxes
1. When receiving mutiple, pre-built options for users to choose, we can use checkboxes for users to select and submit the selections at once. 
1. In the input tag, we can specify the `name` attribute with square brackets that, we'd like the data to be stored in the array. We then can use PHP script to retrieve the data input from the user. 
    ```php
    <form action="site.php" method="POST">
        Apples: <input type="checkbox" name="fruits[]" value="apples"><br>
        Oranges: <input type="checkbox" name="fruits[]" value="oranges"><br>
        Pears: <input type="checkbox" name="fruits[]" value="pears"><br>
        <input type="submit">
    </form>
    
    <?php 
        $fruits = $_POST["fruits"];
        echo $fruits[1];
    ?>
    ```

# Associative Arrays
1. Associative Arrays can not only stored multiple elements but also key/value pairs. This is similar to objects in JavaScript and dictionaries in Python. A key and value pair is declared with an equal sign and greater than sign `=>`, as an arrow in JavaScript. 
1. For example, we have a class of students and would like to store the grades of each student. Besides, we can modify the value of a key in the associate array. 
    ```php
    $grades = array("Jim"=>"A+", "Pam"=>"B-", "Oscar"=>"C+");
    echo $grades["Jim"];
    echo $grades["Pam"];
    echo $grades["Oscar"];
    echo count($grades);

    // modify value of a key 
    $grades["JIM"] = "F"; 
    echo $grades["JIM"]; // F
    ```
1. If the features introduced above, we can use user input to access to the value of a certain key. For example, we allow the user give the student's name that we want to check the grade. 
    ```php
    <form action="site.php" method="POST">
        <input type="text" name="student">
        <input type="submit">
    </form>
    
    <?php 
        $grades = array("Jim"=>"A+", "Pam"=>"B-", "Oscar"=>"C+");
        echo $grades[$_POST["student"]];
    ?>
    ```

# Functions
1. We can use functions to group code to work on tasks. A function is like a container that we can reuse the code at different places. 
1. A function statement in PHP is very similar to that in JavaScript. After declaring the function, we should call the function to execute it. 
1. We can pass parameters (arguments) to functions. The syntax is very similar to `String` template in JavaScript that uses backticks "**\`**" and `${}`.
    ```php
    function sayHi($name, $age) {
        echo "Hello $name, you are $age <br>";
    }

    sayHi("Allen", 40); // Hello Allen, you are 40
    sayHi("Dave", 13); // Hello Dave, you are 13 
    sayHi("Oscar", 80); // Hello Oscar, you are 80
    ```

# Return Statements
1. Besides using `echo` to print out the value, we can use `return` keyword to simply return the value back, so we can use the value further for other purpose. 
1. In PHP (and same in JavaScript), a `return` keyword in the function will stop executing the code after the keyword a function. 
    ```php
    function cube($num) {
        return $num * $num * $num;
        echo "this will not be printed"; 
    }

    $cubeResult = cube(4); 

    echo $cubeResult; // 64
    ```

# If Statements
1. In PHP, we can use `IF` statement which is similar to the syntax of JavaScript. 
1. `AND` in PHP is `&&`. 
1. `OR` in PHP is `||`.
1. We can either separate `else if` or concatenate `elseif`.
    ```php
    $isMale = true;
    $isTall = true;
    if ($isMale && $isTall){
        echo "You are a tall male";
    } elseif ($isMale && !$isTall) { // elseif can be concatenated 
        echo "You are a short male";
    } else if (!$isMale && $isTall){ // else if can be separated 
        echo "You are not male but are tall";
    } else {
        echo "You are not male and not tall";
    }
    ```

# If Statements (con't)
1. In PHP, we have comparison operators `>`, `<`, and `==`. We can also check if variables are greater than and equal to and less than an equal to. 
    ```php
    function getMax($num1, $num2, $num3) {
        if ($num1 >= $num2 && $num1 >= $num3) {
            return $num1;
        } else if ($num2 >= $num1 && $num2 >= $num3) {
            return $num2;
        } else {
            return $num3;
        }
    }

    echo getMax(3000, 3000, 400);
    ```

# Building a Better Calculator
1. We can use `IF` statements to verify the user input and operate the calculation accordingly. 
1. Note that the following operations can only operate decimal numbers if we specify the `step` attribute in the HTML element. (We still can operator decimal number with PHP, while this issue is from HTML).
    ```php
    <form action="site.php" method="post">
        First Num: <input type="number" step="0.001" name="num1"> <br>
        OP: <input type="text" name="op"> <br>
        Second Num: <input type="number" name="num2"> <br>
        <input type="submit">
    </form>  
    <?php 
        $num1 = $_POST["num1"];
        $num2 = $_POST["num2"];
        $op = $_POST["op"];

        if ($op == "+") {
            echo $num1 + $num2; 
        } else if ($op == "-") {
            echo $num1 - $num2; 
        } else if ($op == "/") {
            echo $num1 / $num2; 
        } else if ($op == "*") {
            echo $num1 * $num2; 
        } else {
            echo "Invalid Operator";
        }
    ?>
    ```

# Switch Statements
1. `Switch` statements are similar to `IF` statement, while a value can be compared with multiple values. Though `IF` statement can work exactly as `switch`, `switch` provides a succinct syntax for the conditions. 
1. We can set a `default` case if the input is not in the pre-built condition, which works as `else` in `IF` statement. 
    ```php
    <form action="site.php" method="post">
        What is your grade? <br>
        <input type="text" name="grade"> <br>
        <input type="submit">
    </form>  
    <?php 
        $grade = $_POST["grade"];
        switch($grade) {
            case "A": 
                echo "You did amazing!";
                break;
            case "B":
                echo "You did pretty good";
                break;
            case "C":
                echo "You did poorly";
                break;
            case "D": 
                echo "You did very bad";
                break;
            case "F":
                echo "YOU FAIL!";
                break;
            default:
                echo "Invalid Grade";
        }
    ?>
    ```
# While Loops
1. `while` loops iterate through the tasks until the condition is `false`. 
1. We should be aware and prevent infinite loop to keep running the function. For example, if we take `$index++` out from the code block, the while loop becomes infinite as the condition `$index <= 5` will always be true. 
    ```php
    $index = 1;
    while($index <= 5){
        echo "$index <br>";
        $index++;
    }
    ```
1. `do...while` loop will ensure the code at least run once. This has very similar syntax in JavaScript for a `do...while` loop. 
    ```php
    $index = 6;
    do{
        echo "$index <br>";
        $index++;
    }while($index <= 5);
    ```

# For Loops
1. `for` loop in PHP works exactly the same as that in JavaScript. 
    ```php
    for($i = 1; $i <= 5; $i++) {
        echo "$i <br>";
    }

    $luckyNumbers = array(4, 8, 15, 16, 23, 42);
    for ($i = 0; $i < count($luckyNumbers); $i++) {
        echo "$luckyNumbers[$i] <br>";
    }
    ```

# Comments


# Including HTML


# Include: PHP


# Classes & Objects


# Constructors


# Object Functions - PHP - Tutorial 31


# Getters & Setters


# Inheritance