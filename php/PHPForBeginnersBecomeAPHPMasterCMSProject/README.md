PHP for Beginners - Become a PHP Master - CMS Project
Start: 2020/08/29
End: 

1. [Data Types and More](#Data-Types-and-More)
1. [Control Structures](#Control-Structures)
1. [Custom Functions](#Custom-Functions)
1. [PHP Built-in Functions](#PHP-Built-in-Functions)
1. [How to Use Form Data in PHP](#How-to-Use-Form-Data-in-PHP)
1. [How to Use Databases in PHP](#How-to-Use-Databases-in-PHP)
1. [PHP Security](#PHP-Security)
1. [PHP and the Web](#PHP-and-the-Web)
1. [Object Oriented PHP Introduction](#Object-Oriented-PHP-Introduction)
1. [Working with files](#Working-with-files)
1. [CMS Project / Blogging System - Front End and First Steps](#CMS-Project-/-Blogging-System---Front-End-and-First-Steps)
1. [CMS - Categories & More...](#CMS---Categories-&-More...)
1. [CMS - POSTS](#CMS---POSTS)
1. [CMS - COMMENTS](#CMS---COMMENTS)
1. [CMS - USERS](#CMS-USERS)
1. [CMS - Login](#CMS-Login)
1. [CMS - Profile](#CMS-Profile)
1. [CMS - Dashboard](#CMS-Dashboard)
1. [Improving Our CMS](#Improving-Our-CMS)
1. [CMS - Extra Features](#CMS---Extra-Features)
1. [CMS - Extra Features - Users Registration](#CMS---Extra Features---Users Registration)
1. [CMS - Extra Features - Author related Posts](#CMS-Extra-Features-Author-related-Posts)
1. [Pagination](#Pagination)
1. [CMS - Extra Feature - Users ONLINE](#CMS---Extra-Feature---Users-ONLINE)
1. [CMS - Extra Feature - NEW Simple Password Encrypting and Login System](#CMS---Extra-Feature---NEW-Simple-Password-Encrypting-and-Login-System)
1. [CMS - Extra Feature - Improved Comment system count and display](#CMS---Extra-Feature---Improved-Comment-system-count-and-display)
1. [CMS - Extra FEature - Post for Specific User in admin](#CMS---Extra-FEature---Post-for-Specific-User-in-admin)
1. [CMS - More Security](#CMS---More-Security)
1. [Taking the Project to the Internet](#Taking-the-Project-to-the-Internet)
1. [Sending Emails](#Sending-Emails)
1. [Bootstrap Modal Delete Confirm Feature](#Bootstrap-Modal-Delete-Confirm-Feature)
1. [No posts or category message feature](#No-posts-or-category-message-feature)
1. [Some miscellaneous features](#Some-miscellaneous-features)
1. [Having fun with bugs](#Having-fun-with-bugs)
1. [Refactoring part 1](#Refactoring-part-1)
1. [New registration system](#New-registration-system)
1. [Adding prepare statements to our application for security](#Adding-prepare-statements-to-our-application-for-security)
1. [CMS Extra feature - Pretty URL's](#CMS-Extra-feature---Pretty-URL's)
1. [CMS Extra feature - Forget Password System](#CMS-Extra-feature---Forget-Password-System)
1. [CMS Extra feature - Forget Password System - Sending Email](#CMS-Extra-feature---Forget-Password-System---Sending-Email)
1. [CMS Extra feature - Realtime Notification with Pusher](#CMS-Extra-feature---Realtime-Notification-with-Pusher)
1. [CMS Extra feature - POST LIKES](#CMS-Extra-feature---POST-LIKES)
1. [CMS Extra feature - Creating A Separate Admin for Logged In Users](#CMS-Extra-feature---Creating-A-Separate-Admin-for-Logged-In-Users)
1. [CMS Extra feature - Multi-Language Feature](#CMS-Extra-feature---Multi-Language-Feature)

# Data Types and More
### Variables in PHP
1. Variables in PHP start with a dollar sign `$`. 
1. In convention, variables are named in camelCase. 
1. A dot `.` in PHP is for value concatenation.
    ```php
    $name = 'Allen';
    $NUMBER = 100;

    echo $name . " " . $NUMBER;
    ```

### Math
1. We can use `+`, `-`, `*`, and `/` to do basic math operations.
1. Rather than using integers and floats directly, we can use variable to keep the values and work on math operations. 

### Arrays
1. We can store multiple data in a single container. 
1. PHP arrays can be declared with `array()` or square brackets `[]` (newer version).
1. Position of elements in an array starts from index `0`.
    ```php
    $numberList = array(267,8765,345,'5345',345,'<h1>Hello</h1>');
    print_r($numberList);
    echo $numberList[0]; // 267
    ```

### Associative Arrays
1. We can "label" by using a key to index a value rather than using numbers. 
    ```php
    // regular array
    $number = array(10, 20, 49);
    echo $number[2] . "<br>";

    // associative array
    $names = array('first_name' => 'Allen', 'last_name' => 'Lin');
    print_r($names);
    echo "<br>";
    echo $names['first_name'] . ' ' . $names['last_name']; // Allen Lin
    ```

### Practice Section 2
1. Make 2 variables called number1 and number2 and set 1 to value 10 and the other 20.
1. Add the 2 variables and display the sum with `echo`.
1. Make 2 arrays with the same values, one regular and the other associative.
    ```php
    $number1 = 10;
    $number2 = 20;

    echo $number1 + $number2 . "<br>"; // 30

    $lists = array(1,2,3,4,5,6);
    $assocLists = array("number"=>10);

    echo $lists[0] . "<br>"; // 1
    echo $assocLists['number'] . "<br>"; // 10
    ```

# Control Structures
### if Statement
1. If statement can be used to control the state and the flow to decide what statement or expression will be executed in the given condition. 
    ```php
    if (3 > 10) {
        echo 'three is less than ten';
    } else if (4 < 5) {
        echo 'of course four is less than five';
    } else {
        echo 'it is not';
    }
    ```

### Comparison and Logical Operators
1. Comparison Operators
    1. equal `==`
    1. identical `===`
    1. compare `>`, `<`, `>=`, `<=`, `<>`
    1. not equal `!=`
    1. not identical `!==`
1. Logical Operators
    1. and `&&`
    1. or `||`
    1. not `!`
    ```php
    if (4 == '4' && 5 < 10) {
        echo 'it is true';
    }
    ```

### Switch Statements in PHP
1. By using `switch` statements, we can use one condition to check mulitple values. 
    ```php
    $number = 24; 
    switch($number) {
        case 34: 
            echo 'is it 34';
            break;
        case 37:
            echo 'is it 37';
            break;
        case 35:
            echo 'is it 35';
            break;
        case 24:
            echo 'is it 24';
            break;
        default: 
            echo 'we could not find anything';
            break;
    }
    ```

### While Loop in PHP
1. We can create a loop and keep iterating through a function or code if the given condition is `true`. 
    ```php
    $counter = 0;
    while ($counter <= 10) {
        echo $counter . '<br>';
        $counter++;
    }
    ```

### For Loop in PHP
1. In a for loop, we can create a variable as the counter, a condition to scope the iterations, and the logic to execute the loop. 
    ```php
    for ($counter = 0; $counter < 10; $counter++) {
        echo $counter . "<br>";
    }
    ```

### ForEach Loop in PHP
1. This is very similar to `Array.forEach()` method in JavaScript that we can use this function in PHP to iterate through the elements of an array.
    ```php
    $numbers = [1,2,3,4,5];
    foreach($numbers as $number) {
        echo $number . "<br>";
    }
    ```

### Practice Section 3
1. Make an `IF` statement with `elseif` and `else` to finally display string, I love PHP.
1. Make a `for` loop that displays 10 numbers.
1. Make a `switch` statement that test against one condition with 5 cases. 
    ```php
    $text = 'I love PHP';
    if (true) {
        echo $text;
    } else if (true) {
        echo $text;
    } else {
        echo $text;
    }

    echo "<br>";
    
    $numbers = [0,1,2,3,4,5,6,7,8,9];
    foreach($numbers as $number) {
        echo $number . "<br>";
    }

    echo "<br>";

    $number = 10;
    switch($number) {
        case 10:
            echo 'This is $number';
        break;
        case 20:
            echo 'This is correct';
        break;
        case 30:
            echo 'This is correct';
        break;
        case 1:
            echo 'This is correct';
        break;
        case 0:
            echo 'This is correct';
        break;
        default:
            echo 'This is default';
    }
    ```

# Custom Functions
### Defining Functions
1. We can group a block of code into a function and use it repeatly.
1. Naming a function is critical that the name should reveal that what does the function do.
1. We can model functions as smaller pieces in a bigger function.
1. PHP also has hoisting as JavaScript that functions can be declared after they are called in the script.
    ```php
    init();
    function init () {
        sayHi();
        echo "<br>";
        calculate(1,2);
    }

    function sayHi() {
        echo 'Hello World!';
    }

    function calculate($num1, $num2) {
        echo $num1 + $num2;
    }
    ```

### Function Parameters
1. We can pass parameters to functions to make the function more flexible to be used.
    ```php
    function greeting($message){
        echo $message;
    }
    greeting('Hello Everyone!');

    echo "<br>";

    function addNumbers($num1, $num2) {
        $sum = $num1 + $num2;
        echo $sum;
    }
    addNumbers(12, 24);
    ```

### Return Values From Functions
1. By using `return` keyword, we can assign the returend value from a function to a variable for other use.
    ```php
    function addNumbers($num1, $num2) {
        $sum = $num1 + $num2;
        return $sum;
    }

    $result = addNumbers(12, 24);

    echo $result . "<br>"; // 36

    $result = addNumbers(13, $result);
    echo $result; // 49
    ```

### Global Variable and Scope
1. We can use `global` keyword in a function to indicate that a variable is from the global scope which is out of the function block. This feature is very different from JavaScript that JavaScript functions can use global variables and change their directly. Besides, global variables are usually avoid to prevent unexpected bugs and problems. 
    ```php
    $x = 'outside';
    function convert(){
        global $x;
        $x = 'inside';
    }

    echo $x;
    echo "<br>";
    convert();
    echo $x;
    ```

### Constants
1. We can use `define()` function to declare a constant which is a variable which value is immutable. In JavaScript ES6, we can use `const` keyword to declare a variable as a constant.
1. Before PHP 5.6, only scalar data (boolean, integer, float, and string) can be contained in constants. From PHP 5.6 onwards, we can define not only scalar data but an array as a constant. 
1. Besides, we now can also use `const` in PHP to declare a constant, though it's not exactly the same as using `define()`.
    ```php
    $number = 10;
    $number = 1000;
    $number = 'Allen';
    echo $number . "<br>";
    define("NAME", 1000);
    echo NAME;
    // Works as of PHP 5.3.0 
    const CONSTANT = 'Hello World';        
    echo CONSTANT . "<br>";;
    
    // Works as of PHP 5.6.0    
    const ANOTHER_CONST = CONSTANT.'; Goodbye World';    
    echo ANOTHER_CONST . "<br>";  
    const ANIMALS = array('dog', 'cat', 'bird');    
    echo ANIMALS[1] . "<br>"; // outputs "cat"
        
    // Works as of PHP 7    
    define('ANIMALS', array(    
    'dog',    
    'cat',    
    'bird'    
    ));
    
    echo ANIMALS[1]. "<br>"; // outputs "cat"
    ```

### Practice Section 4
1. Define a function and make it return a calculation of 2 numbers
1. Make a function that passes parameters and call it using parameters values
    ```php
    function calculation(){
        $num1 = 20;
        $num2 = 50;
        $sum = $num1 + $num2;
        return $sum;
    }
    echo calculation() . "<br>"; // 70

    function addNumbers($num1, $num2){
        return $num1 + $num2;
    }
    echo addNumbers(1,2) . "<br>"; // 3
    ```

# PHP Built-in Functions
### Math Functions
1. `pow(base, power)` power of a base.
1. `rand(min, max)` to create a random number. We can give first argument as the minimum of the number, and the 2nd argument as the maximum number.
1. `sqrt([number])` to get the sqaure root of the number passed into the function.
1. `ceil([number])` to round up the number given to the function. 
1. `floor([number])` to round down the number given to the function.
1. `round([number])` to round the number given to the function. If the decimal is less than or equal to 0.4, it will be round down. On the other hand, if the decimal is greater than or equal to 0.5, it will be rounded up. 
    ```php
    echo pow(2,7); // 128 

    echo "<br>";

    echo rand(1, 1000); // a random number from 1 to 1000

    echo "<br>";
    
    echo sqrt(100); // 10
    
    echo "<br>";

    echo ceil(4.6);
    
    echo "<br>";
    
    echo floor(4.6);
    
    echo "<br>";
    
    echo round(4.5); // 5
    echo "<br>";
    echo round(3.3); // 3
    ```
### String Functions
1. Similar to MDN, we can check most of the PHP functions at [https://www.php.net/](https://www.php.net/). Besides, we can check string methods at [https://www.php.net/manual/en/ref.strings.php](https://www.php.net/manual/en/ref.strings.php). 
1. Similar to JavaScript, we can check `.length` property of a string to get the number of characters of the string value. 
    1. `String.toUpperCase()` is a JavaScript string method to turn all characters into capital.
    1. `String.toLowerCase()` is a JavaScript string method to turn all characters into lowercase.
    ```php
    $string = 'Hello World! How are you today?';
    echo strlen($string) . '<br>'; // 31

    echo strtoupper($string) . '<br>'; // HELLO WORLD! HOW ARE YOU TODAY?

    echo strtolower($string) . '<br>'; // hello world! how are you today?
    ```

### Array Functions
1. We can use `max()` and `min()` function to get the maximum or minimum value in an array.
1. `sort()` function can be used to sort the elemenets of an array to be in ascending order. Note that the function works on the array directly without returning any value. 
1. `in_array()` can be used to check if a value is an element in the given array. This function returns a boolean value, either `true` or `false`. In JavaScript, we can use `Array.includes()` to check if a value is an element of an array.
1. We can check and use other array methods at [https://www.php.net/manual/en/ref.array.php](https://www.php.net/manual/en/ref.array.php).
    ```php
    $arr1 = [1,2,3,4,5,6,7,8,9];
    $arr2 = array(99,88,77,66,55,44,33,22,11);
    $arr3 = [5213,56,266,82,44533,221,110,3334];

    echo max($arr1) . "<br>"; // 9

    echo min($arr2) . "<br>"; // 11
        
    print_r($arr3);
    ```

### Practice Section 5
1. Use a pre-built math function here and echo it
1. Use a pre-built string function here and echo it
1. Use a pre-built array function here and echo it
    ```php
    echo rand(1, 999) . "<br>"; // a random number from 1 to 999

    $text = "some gibberish words that has no meaning. Maybe I can try lorem ipsum next time.";
    echo strlen($text) . "<br>"; // 80

    $arr = [1235,6,23,488,32354,'01',2312,32,48,36,564,56789,$text];
    if (in_array($text, $arr)) {
        echo '$text is in the array';
    }
    ```

# How to Use Form Data in PHP
### Checking for Form Submission
1. `$_POST` is a global variable that collects the data send through HTML `<form>` element with HTTP POST method.
1. `$_POST` will return an associative array (object in JavaScript or dictionary in Python) which key is from the `name` attribute from the `input` element to keep the value from the input given by the user.
1. In the following case, we put PHP script on the top before the HTML elements. If we submit the form with value, we can see the last input are kept in the associative array `$_POST` and be printed on the top of the page.
    ```php
    <?php
        if (isset($_POST['submit'])) {
            echo 'yes it works' . '<br>';
            print_r($_POST); // Array ( [username] => 123 [password] => 321 [submit] => Submit )
        }
    ?>

    <body>
        <form action="form.php" method="POST">
            <input type="text" name="username" placeholder="Enter Name">
            <input type="password" name="password">
            <br>
            <input type="submit" name="submit">
        </form>
        
    </body>
    ```

### Extracting Information from Form
1. As using associative array, we can use square bracket notations to extract value from associative array. The global `$_POST` is the associative array that keeps all the input in the form from the last submit.
    ```php
    <?php
        if (isset($_POST['submit'])) {
            $username = $_POST['username'];
            $password = $_POST['password'];
            echo 'The username is ' . $username . "<br>";
            echo 'The password is ' . $password . "<br>";
        }
    ?>

    <body>
        <form action="form.php" method="POST">
            <input type="text" name="username" placeholder="Enter Name">
            <input type="password" name="password">
            <br>
            <input type="submit" name="submit">
        </form>
    </body>
    ```

### Validating the Form Values
1. We can use `isset()` to check if a key is in an associative array. `isset()` function check if a variable is assigned with value which is not `null`. If the variable does have value, `isset()` returns `true`. 
1. In this case, we can use `IF` statement with some logical conditions to check the conditions and return feedback to the user. For example, username should be longer than 5 and shorter than 10. If the username is in the array stored (which can be data from database in real practice), we can notice the user that the access is authenticated. 
    ```php
    <?php
        if (isset($_POST['submit'])) {
            $name = array('Allen', 'Peter', 'Tom', 'John', 'Tom');
            
            $minimum = 5;
            $maxmimum = 10;

            $username = $_POST['username'];
            $password = $_POST['password'];

            if (strlen($username) < 5) {
                echo 'Username has to be longer than five' . '<br>';
            }
            if (strlen($username) > $maxmimum) {
                echo 'Username cannot be longer than 10' . '<br>';
            }
            if (!in_array($username, $name)) {
                echo 'Sorry you are not allowed' . '<br>';
            } else {
                echo 'Welcome back!' . '<br>';
            }
        }
    ?>

    <body>
        <form action="form.php" method="POST">
            <input type="text" name="username" placeholder="Enter Name">
            <input type="password" name="password">
            <br>
            <input type="submit" name="submit">
        </form>
    </body>
    ```
### External Page Submission
1. In the `action` attribute of the `<form>` tag, if we change the file of action, the page will be redirected to the page given in the `action` after the user submits the form. 
1. Therefore, we can separate the page and model the functions into different files.
    ```html
    <!-- this is code is in form.php -->
    <body>
        <form action="form_process.php" method="POST">
            <input type="text" name="username" placeholder="Enter Name">
            <input type="password" name="password">
            <br>
            <input type="submit" name="submit">
        </form>        
    </body>
    ```
1. We can keep the code in `form_process.php`
    ```php
    // keep the logical operations in a separeted file
    if (isset($_POST['submit'])) {
        $name = array('Allen', 'Peter', 'Tom', 'John', 'Tom');
        
        $minimum = 5;
        $maxmimum = 10;

        $username = $_POST['username'];
        $password = $_POST['password'];

        if (strlen($username) < 5) {
            echo 'Username has to be longer than five' . '<br>';
        }
        if (strlen($username) > $maxmimum) {
            echo 'Username cannot be longer than 10' . '<br>';
        }
        if (!in_array($username, $name)) {
            echo 'Sorry you are not allowed' . '<br>';
        } else {
            echo 'Welcome back!' . '<br>';
        }
    }
    ```

### Practice Section 6
1. Make a form that submits one value to POST super global.
    ```php
    <form action="ps6.php" method="POST">
        <input type="text" name="input">
        <input type="submit" value="submit" name="submit">
    </form>
    <?php
        if (isset($_POST['submit'])) {
            $userInput = $_POST['input'];
            echo "The user gives " . $userInput;
        }
    ?>
    ```

# How to Use Databases in PHP
### Introduction to Databases
1. A database is simply a collection of related data in a organized format.
1. In this case, we use MYSQL database. A table in the database is created with columns and rows with a field (as a cell) in the table.

### Introduction to PHPmyadmin
1. By opening xampp with Apache server and MySQL service to access phpMyAdmin at `http://localhost/phpmyadmin`.

### Creating a Database in PHPmyadmin
1. We can either click the button on the top to create a table in the panel of the left or use SQL commands such as `CREATE DATABASE [databaseName]` to create a database. 

### Creating Tables and Inserting Data in PHPmyadmin
1. We create a new table in `loginapp` database with 3 columns `id`, `username`, and `password`. 
    1. `id` has type as `INT` which is integer and set to be auto incremented with maximum length at 11.
    1. `username` has type as `VARCHAR` which can take all the characters as input and with length at 32. 
    1. `password` has the same configuration as `username`.
    <img src="./images/createFirstTable.png">
1. We can use GUI with `insert` tab to create new input in the table, while we may also use SQL commands to insert new input to the table. 
    ```sql
    INSERT INTO `users` (`id`, `username`, `password`) VALUES (NULL, 'allen', 'password');
    ```
1. We can select a row of input and `drop` to remove it from the table. 
1. Besides, we can also edit the input of each row in the table directly. 

### Markup for Login Page
1. We make a simple markup page with login and password input with a submit button.
    ```html
    <div class="container">
        <div class="col-xs-6">
            <form action="login.php" method="post">
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" name="username" class="form-control">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="" class="form-control">
                </div>
                <input class="btn btn-primary" type="submit" value="submit" name="submit">
            </form>
        </div>
    </div>
    ```

### Receiving Post Data From Check
1. We can use global `POST` variable to manipulate the input sent through HTML `<form>` tag with `method` attribute which is `POST`. 
    ```php
    if(isset($_POST['submit'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];

        echo $username . "<br>";
        echo $password . "<br>";
    }
    ```

### Connecting to the Database using PHP

### Creating Records into the database table with PHP

### Reading Information in the Database with PHP

### Creating the Update Records Form

### Fixing Name Attribute Value

### Query to Read Id's

### Query to Update Username and Password

### Refactoring The Update Query into a Function

### Delete Records From Database with PHP

### Refactoring all Databases Query Code into Functions

### Making All Files Modular and Refactoring

### Practice Section 7



# PHP Security
# PHP and the Web
# Object Oriented PHP Introduction
# Working with files
# CMS Project / Blogging System - Front End and First Steps
# CMS - Categories & More...
# CMS - POSTS
# CMS - COMMENTS
# CMS - USERS
# CMS - Login
# CMS - Profile
# CMS - Dashboard
# Improving Our CMS
# CMS - Extra Features
# CMS - Extra Features - Users Registration
# CMS - Extra Features - Author related Posts
# Pagination
# CMS - Extra Feature - Users ONLINE
# CMS - Extra Feature - NEW Simple Password Encrypting and Login System
# CMS - Extra Feature - Improved Comment system count and display
# CMS - Extra FEature - Post for Specific User in admin
# CMS - More Security
# Taking the Project to the Internet
# Sending Emails
# Bootstrap Modal Delete Confirm Feature
# No posts or category message feature
# Some miscellaneous features
# Having fun with bugs
# Refactoring part 1
# New registration system
# Adding prepare statements to our application for security
# CMS Extra feature - Pretty URL's
# CMS Extra feature - Forget Password System
# CMS Extra feature - Forget Password System - Sending Email
# CMS Extra feature - Realtime Notification with Pusher
# CMS Extra feature - POST LIKES
# CMS Extra feature - Creating A Separate Admin for Logged In Users
# CMS Extra feature - Multi-Language Feature