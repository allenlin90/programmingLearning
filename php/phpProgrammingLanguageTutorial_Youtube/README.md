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