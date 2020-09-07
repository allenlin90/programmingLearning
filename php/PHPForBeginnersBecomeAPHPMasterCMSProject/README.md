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
1. [CMS Extra feature - POST Likes](#CMS-Extra-feature---POST-Likes)
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
1. We create a new table `users` in `loginapp` database with 3 columns `id`, `username`, and `password`. 
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
1. We can use `mysqli_connect` to connect to the database.

### Creating Records into the database table with PHP
1. We can put SQL commands as Strings in PHP script and allow the program to interact with the database. 
    ```php
    if(isset($_POST['submit'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];

        $connection = mysqli_connect('localhost', 'root', 'password', 'loginapp');
        if ($connection) {
            echo "DB is connected" . "<br>";
        } else {
            die("Database connection failed");
        }

        $query = "INSERT INTO users(username,password) ";
        $query .= "VALUES ('$username', '$password')";

        $result = mysqli_query($connection, $query);

        if (!$result) {
            die('Query failed' . mysqli_error());
        }
    }
    ```

### Reading Information in the Database with PHP
1. After connecting to the database, we can use `mysqli_fetch_row([variable])` to read the data as an array. 
1. Besides, we can use `mysqli_fetch_assoc([variable])` to read the data as associative array where title of the column is the key of the object. 
    ```php
    $connection = mysqli_connect('localhost', 'root', 'password', 'loginapp');
    if ($connection) {
        echo "DB is connected" . "<br>";
    } else {
        die("Database connection failed");
    }

    $query = "INSERT INTO users(username,password) ";
    $query .= "VALUES ('$username', '$password')";

    $result = mysqli_query($connection, $query);

    if (!$result) {
        die('Query failed' . mysqli_error());
    }

    // read user data as regular array
    while($row = mysqli_fetch_row($result)) {
        print_r($row);
    }

    // read user data as associative array
    while($row = mysqli_fetch_assoc($result)) {
        print_r($row);
    }
    ```
1. We can put each row from the result into `<pre>` tags
    ```php
    <?php
        while($row = mysqli_fetch_assoc($result)) {
    ?>
    <pre>
    <?php         
            print_r($row);
            ?>
    </pre>
    <?php        
    }
    ?>
    ```

### Creating the Update Records Form
1. We can take the connectoin code out to model the code. For example, we can create a `db.php` in the same directory. 
    ```php
    // db.php
    $connection = mysqli_connect('localhost', 'root', 'password', 'loginapp');
    if ($connection) {
        echo "DB is connected" . "<br>";
    } else {
        die("Database connection failed");
    }
    ```
1. We then use `include "[php file]"` right after `<?php include "db.php"` to import the code. Thus, we can reuse the code without duplicating it in every file. Besides, it will be easier to manage if we change the database.
1. In this case, we can select the `id` of an user from the databsae and give new input to edit the values, such as username and password. We use `<select>` and `<option>` HTML elements to create a list for user to select the desirable user `id`.
    ```php
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
            <select name="" id="">
                <option value="">1</option>
            </select>
            <input class="btn btn-primary" type="submit" value="submit" name="submit">
        </form>        
        </div>
    </div>
    ```

### Fixing Name Attribute Value
1. This part is only to add `name` attribute in `<select>` element from the last section.

### Query to Read Id's
1. We can put a `while` loop in the `<select>` tag.
    ```php
    <select name="id" id="">
        <?php
            while($row = mysqli_fetch_assoc($result)) {
                $id = $row['id'];
                echo "<option value='$id'>$id</option>";
            }
        ?>
    </select>
    ```
1. We then model the code into a separate file, `functios.php`. Note that we should also include `db.php` into this file. Besides, we need `$connection` from the global scope. We can use `global` keyword in this case. 
    ```php
    include "db.php";
    function showAllData(){
        global $connection;
        $query = "SELECT * FROM users";
        
        $result = mysqli_query($connection, $query);
        
        if (!$result) {
            die('Query failed' . mysqli_error());
        }
        
        while($row = mysqli_fetch_assoc($result)) {
            $id = $row['id'];
            echo "<option value='$id'>$id</option>";
        }
    }
    ```

### Query to Update Username and Password
1. This section is the final step to update the username and password in to the data according to user's `id`.
1. We can use `mysqli_error()` to check if there's any problem from the `$connection`. 
1. Note that we should be careful about the SQL syntax by using `.=` to concatenate the command in one single line. The space and comma matters, because, after all, it is one single line command.
    ```php
    if(isset($_POST['submit'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];
        $id = $_POST['id'];

        // be aware with space and comma
        $query = "UPDATE users SET ";
        $query .= "username = '$username', ";
        $query .= "password = '$password' ";
        $query .= "WHERE id = $id";

        $result = mysqli_query($connection, $query);
        if(!$result) {
            die("Query FAILED!" . mysqli_error($connection));
        }
    }
    ```

### Refactoring The Update Query into a Function
1. We can model the code into `functions.php` as well. 
    ```php
    // functions.php
    function updateTable() {
        global $connection;
        $username = $_POST['username'];
        $password = $_POST['password'];
        $id = $_POST['id'];

        $query = "UPDATE users SET ";
        $query .= "username = '$username', ";
        $query .= "password = '$password' ";
        $query .= "WHERE id = $id";

        $result = mysqli_query($connection, $query);
        if(!$result) {
            die("Query FAILED!" . mysqli_error($connection));
        }
    }

    // login_update.php
    if(isset($_POST['submit'])) {
        updateTable();
    }
    ```

### Delete Records From Database with PHP
1. We create another PHP file `login_delete.php` and add a new function in `functions.php`.
1. The overall structure of the page and PHP code is similar to `login_update.php`. The main differences between 2 are the SQL command changing from `SET` to `DELETE`. Besides, we don't actually need username and password in this case.
1. We can change the `value` attribute of the last `<input>` tag from `update` to `delete` for a better UX.
    ```php
    // functions.php
    function deleteRows() {
        global $connection;
        $username = $_POST['username'];
        $password = $_POST['password'];
        $id = $_POST['id'];

        $query = "DELETE from users ";
        $query .= "WHERE id = $id";

        $result = mysqli_query($connection, $query);
        if(!$result) {
            die("Query FAILED!" . mysqli_error($connection));
        }
    }

    // call the function above in login_delete.php
    ```

### Refactoring all Databases Query Code into Functions
### Making All Files Modular and Refactoring
1. These sections are just refactoring and optimizing the code. 
1. We separate `headers` and `footers` into separated file and use `include` to import to the page.

### Practice Section 7
1. Create a database in PHPMyAdmin
1. Create a table like the one from the lecture
1. Insert some data
1. Connect to database and read data

**Solution**
1. We can create a databse with a table in PHPMyAdmin directly by setting schema.
1. Use `mysqli_connect('localhost', 'root', 'password', '[newCreatedList]')` to use PHP to connect to the database.
1. Create a variable to hold the SQL query string after connecting to database.
    ```php
    // create a connection to the database
    $connection = mysqli_connect('localhost', 'root', 'password', '[newCreatedList]');
    if(!$connection) {
        die("Database connection failed...") . mysqli_error($connection);
    } else {
        echo "The database is connected";
    }

    // create variable to hold SQL query string
    $query = "SELECT * FROM [tableName]";

    $result = mysqli_query($connect, $query);
    if (!$result) {
        die("Query Failed...");
    }

    // use while loop to check each row retrieved from the table
    // use print_r or echo to render the result on the page
    while($records = mysqli_fetch_assoc($result)) {
        print_r($records);
    }
    ```

# PHP Security
### SQL Injection - How to Prevent it
1. SQL injection is that users intentionally give SQL commands as the input to send to Database. For example, a user can give `DROP TABLE` as the input for `username` and this SQL string may delete the table which we store user data in the database or cause other damages.
1. We can use `mysqli_real_escape_string()` function to prevent SQL injection. Therefore, all the input will consider regular string input (characters and text) without affecting or abusing the database.
    ```php
    if (isset($_POST['submit'])) {
        global $connection;

        $username = $_POST['username'];
        $password = $_POST['password'];

        $username = mysqli_real_escape_string($connection, $username);
        $password = mysqli_real_escape_string($connection, $password);

        $query = "INSERT INTO users(username, password) ";
        $query .= "VALUES ('$username', '$password')";

        $result = mysqli_query($connection, $query);
        if (!$result) {
            die('Query Failed' . mysqli_error());
        }
    }
    ```

### Password Encryption
1. It's very risky to store password directly in the database, so we can "encrypt" the code into something else, such as a string in more than 20 characters with letters, numbers, and special symbols.
1. In PHPMyAdmin, we can change schema of a table by accessing `Struture` tab on the top. For example, we can change the type of data in `VARCHAR` with length `32` to `200` which means the input can be up to 200 characters.
1. We can use PHP built-in function [`crypt()`](https://www.php.net/manual/en/function.crypt.php) to create hashed string. 
1. Note that the hashed string by default is relatively weak. We can add `salt` to the hashing algorithm to make it stronger. According to PHP documentation, we can use `CRYPT_BLOWFISH` to encrypt the password. For example, the **salt** can be `$2y$10$` which means to run `$2y$` hashing 10 times.
1. Note that the number of characters used for `salt` should be at least **22** characters.
    ```php
    if (isset($_POST['submit'])) {
        global $connection;

        $username = $_POST['username'];
        $password = $_POST['password'];

        // prevent SQL injection
        $username = mysqli_real_escape_string($connection, $username);
        $password = mysqli_real_escape_string($connection, $password);

        // create the salt for hashing
        $hashFormat = "$2y$10$";
        // salt should have at least 22 characters for blowfish
        $salt = "somethingWeMadeUpButShouldBeMuchLonger";
        $hashF_and_salt = $hashFormat . $salt;

        // use crypt() to hash password
        $encrypt_password = crypt($password, $hashF_and_salt);
        
        $query = "INSERT INTO users(username, password) ";
        $query .= "VALUES ('$username', '$password')";

        $result = mysqli_query($connection, $query);
        if (!$result) {
            die('Query Failed' . mysqli_error());
        }
    }
    ```

### Practice Section 8
1. Make a variable with some text as value
1. Use `crypt()` function to encrypt it
1. Assign the encrypted result to a variable
1. Echo the variable
    ```php
    $password = "mysecretpassword";
    $hashFormat = "$2y$10$";
    $salt = "ThisIsASaltThatLengthShouldBeMoreThan22Characters";
    $hashF_and_salt = $hashFormat . $salt;
    $password_encrypted = crypt($password, $hashF_and_salt);

    echo $password_encrypted . "<br>";
    ```


# PHP and the Web
### Introduction to HTTP Requests and more

### Using the GET Super lobal

### About Cookies in PHP

### Setting Cookies with PHP

### Reading Cookies in PHP

### How use Sessions in PHP

### Practice Section 9



# Object Oriented PHP Introduction
### What are Classes and Objects Introduction

### What are Classes and How to Define Them in PHP

### What are Class Methods and How to Create Them

### How to Instantiate a Class

### Adding Properties to Our Class

### Class Inheritance

### Constructors 

### Data Access

### Static Data in Classes

### Practice Section 10



# Working with files
### Opening and Creating Files

### Writing to Files

### Reading Files

### Deleting Files



# CMS Project / Blogging System - Front End and First Steps
### Intro Tour of the CMS

### Turning on Some Important Features

### Adding our Assets / Working Structure

### Creating database and Category Table for the CMS

### Connecting to the Database with PHP

### Making our Files Reuseable

### Inserting Data into Category Table and Displaying it

### Creating the Posts Table

### Post Comment Count Update 

### Inserting Data into the Posts Table and Displaying it

### Inserting the Post Image and Displaying it

### Creating a Custom Search Engine Part 1

### Creating a Custom Search Engine Part 2

### Creating a Custom Search Engine Part 3

### Adding Categories to the Sidebar



# CMS - Categories & More...
### Creating Reuseable Code in the Admin

### Creating the Navigation Links in Admin

### Creating the Admin Category Page Part 1

### Creating the Admin Category Page Part 2

### Displaying data in Category Page

### Adding Categories

### Adding a Special Function to our Header File

### Deleting Categories

### Updating or Editing Categories Part 1

### Updating or Editing Categories Part 2

### Refactoring Category Code Part 1 

### Refactoring Category Code Part 2



# CMS - POSTS
### Creating a HTML Table in Admin to Display a List of Posts

### Displaying Posts List in Admin

### Including Pages Based on Condition Technique

### Creating Post HTML Form in Admin

### Inserting Post Data From Admin

### Deleting Posts in Admin

### Creating the HTML Edit From Post Page

### Displaying the Edit Data in Post Edit Page

### Dynamic Category Editing / Image Display

### Finally Updateing Posts

### Relating Categories to Posts and Displaying it

### Adding Category Dropdown to the Add Post Page

### Adding Individual Post Page and Link

### Creating the Category Page

### Setting up Some Links and Making and Making an Excerpt



# CMS - COMMENTS
### Creating the Comments Table and Inserting Data

### Creating the Comments Page and HTML Form in Admin

### Creating the Query for Displaying Comments in Admin Part 1

### Creating the Query for Displaying Comments in Admin Part 2

### Inserting New Fields in Front End Comment Form and Testing it

### Creating the Front End Comment Insert Query

### Finishing the Query to Send Comment Data (Front End)

### Relating Comments to Posts

### Deleting Comments

### Approving and Unapproving Comments

### Displaying Comments Based on Approval

### Increasing Comments Count

### Adjustments to Visual for Comments

### Adjustments for comments and Displaying Post Based on Status



# CMS - USERS
### Creating the Users Table and Data Insert

### Creating Users Pages and Links

### Modifying User Table Heading

### Creating the Display Query for Users

### Displaying Users in Admin

### Adding Users in Admin Part 1

### Adding Users in Admin Part 2

### Adding Users in Admin Part 3

### Adding Users in Admin Part 4 and Final

### Deleting Users

### Changing Users Roles

### Setting Up the Edit User Page

### Displaying User Values in Edit Page

### Adding Select Options to User Role

### Updating User



# CMS - Login
### Creating the Login Form 

### Making the Login Page

### Select User Query

### Validating User Query Front End

### Setting Values with Sesssions

### Validating User Admin

### Logout Page Improved Validation 

### Login improved



# CMS - Profile
### Creating the Profile Page

### Displaying User Data 

### Updating User Data



# CMS - Dashboard
### Adding Widgets 

### Posts Dynamic Data in Widget

### Adjust Widget Links 

### Adding an AWESOME Chart to Admin

### Cleaning up the Chart a Little

### Displaying Dynamic Data in Chart Part 1

### Displaying Dynamic Data in Chart Part 2



# Improving Our CMS
### Adjusting Post Echo

### Removing Read More Button

### Adding Notification to Add User Page



# CMS - Extra Features
### Adding Dynamic Category Selection for Edit Post Page

### Adding Extra Element to Dashboard 

### Adding the WYSIWYG Editor

### Adding Links to Post Images and Read More Button

### Adding Post Update Notification

### Adding Post Edit Link in Front End

### Adding Bulk Options Posts, Part 1

### Adding Bulk Options Posts, Part 2

### Adding Bulk Options Posts, Part 3

### Adding Bulk Options Posts, Part 4

### Adding Bulk Options Posts, Part 5

### Adding Bulk Options Posts, Part 6

### Adding Dropdown Option for Add Post Page

### Adding Post Creation Notice to Add Post Page

### Adding Link to Add New Button in Post Page

### Adding Link to View Posts from Admin

### Adding Dynamic Personalization to Admin

### Adding Validation to Comments in Post Page



# CMS - Extra Features - Users Registration
### Downloading & Placing Form Markup

### Testing Registration Form

### Extracting Form Values and Escaping

### Starting Query and Default Tables Values

### Fetching our Database for Default Values

### Registering Users

### Validating Fields

### Encrypting User Passwords

### Updating Our CMS due to Password Field

### User Page Dropdown Default Value Change

### PHP and JavaScript Confirm Before Action

### Get Your Certificate

### Wrapping this up! (IMPORTANT)

### Make Your Feature Requests Here



# CMS - Extra Features - Author related Posts
### Relating Posts to Their Authors Part 1

### Relating Posts to Their Authors Part 2

### Cloning Posts NEW Feature

### Adding a LOADER to CMS Admin

### Adding Views Functionality to Posts

### Reseting Views Feature



# Pagination
### Pagination Intro and Part 1

### Pagination Intro and Part 2 - Links and Get Request

### Pagination Intro and Part 3 - Get Request Processing

### Pagination Intro and Part 4 - Assigning a Variable to the per Page Value

### Pagination Intro and Part 5 - Adding Some Style to Current Page



# CMS - Extra Feature - Users ONLINE
### Creating the User Online Table and Setup

### Creating the PHP Code and Queries

### Displaying Users Online

### Displaying Users Online in Navigation

### Instant Users Online Count Without Refreshing Part 1

### Instant Users Online Count Without Refreshing Part 2



# CMS - Extra Feature - NEW Simple Password Encrypting and Login System
### Explanation of New Functionand Implementation

### Login in Users with New System

### Adding New System to Add Users in Admin

### Adding New Password System to Edit User Page Part 1

### Adding New Password System to Edit User Page Part 2

### Cleaning Up Edit User Page



# CMS - Extra Feature - Improved Comment system count and display
### Comment Count and Amount Display

### Creating a Link in Comment Count and Sending a GET Request

### Comments Page to Specific Posts

### Deleting in the Same Page



# CMS - Extra FEature - Post for Specific User in admin
### Part 1 - Add Page

### Part 2 - Insertion

### Part 3 - Fixing User Display Issue

### Part 4 - Edit Post Page Update

### Part 5 - Upgrading Front End



# CMS - More Security
### URL and MySQL Injection Protection



# Taking the Project to the Internet
### WARNING BEFORE GOING ONLINE

### Hosting Setup

### Displaying Errors Online

### Uploading Files

### Creating the Online Database

### Importing Database

### Fixing Access to Application!

### Getting the Right PHP Online Version



# Sending Emails
### Creating a Contact Page 

### Uploading Contact Page

### Sending Emails

### Modifying Email Headers



# Bootstrap Modal Delete Confirm Feature
### Intro

### Creating the Markup

### Writing the Code



# No posts or category message feature
### Intro

### No Posts Feature Home Page

### No Categories Feature

### Don't Show Draft to Visitors But Everything to Admin

### Applying Funcitonality to Mayor Pages



# Some miscellaneous features
### Active Navigation Links

### Login Form Visibility When Logged in or Logged Out



# Having fun with bugs
### Duplicate Category Improvement

### Fixing Bug in Our Edit Post JavaScript Editor

### Cloning Empty Fields and Table Shifting Fix



# Refactoring part 1
### Refactoring Index in Admin Part 1

### Refactoring Index in Admin Part 2

### Refactoring Our View All Posts by JOINING TABLES part 1

### Refactoring Our View All Posts by JOINING TABLES part 2



# New registration system
### Create a Better Admin Detection Feature

### Duplicate Username Function

### Duplicate Email Function

### Validation for Registration

### Setting up our Login User Function

### Adding Some User Friendly Code

### Displaying Inline Errors in Form

### Registration Users with the New Function

### Login Users with the New Function

### Deleting via POST



# Adding prepare statements to our application for security
### Fetching posts in the category page using prepared statements part 1

### Fetching posts in the category page using prepared statements part 2

### Fetching posts in the category page using prepared statements part 3

### Inserting Categories with Prepare Statement

### Updating Categories with Prepare Statement

### Closing Statements



# CMS Extra feature - Pretty URL's
### Intro 

### Turning on the Rewrite Engine

### Rewriting Index, Contact and Registration

### Rewriting Post Page and Query String

### Rewriting Category Page and Fixing Links



# CMS Extra feature - Forget Password System
### Intro to What we are Building

### Creating Some Helper Functions the New System

### Restructuring Login Page

### Creating the Forgot Password Page

### Forgot Password - Checking Form Values

### Updating Database with Token Values



# CMS Extra feature - Forget Password System - Sending Email
### Intro

### Download all the Files Needed

### Installing 3rd Part Library with Composer

### New - How to Send Emails

### Updated - Sending Email

### Autoloading Classes and Setting up UTF-8 for Emails

### Sending Code Over Email

### Creating the Reset Page

### Pulling Data and Testing It

### Unique Database Values

### Updating Password and Token Columns

### Making it Everything Work

### Update search feature to work with the forgot password system code

### Data Based on Current User

### Image Fallback and Comment Display Fix!



# CMS Extra feature - Realtime Notification with Pusher
### New - Real Time Notification Feature

### Adding Styles to Notifications



# CMS Extra feature - POST Likes
### What we are Creating?

### Creaing the Like Button

### Attaching the Click Event to the Button

### Setting up the Like AJAX Request

### Fetching the Posts

### Updating Post with Likes

### Creating Our First Like

### Unliking Posts

### Creating a helper function to the get the Logged-in User id - part 1

### Creating a helper function to the get the Logged-in User id - part 2

### Creating a helper function to detect if the user Likes a specific post

### Updating our Like button to be more dynamic

### Fetching all Like in the Post

### Finishing Likes

### Let's Add a Tooltip Feature



# CMS Extra feature - Creating A Separate Admin for Logged In Users
### Intro

### Refactoring Dashboard a Little with Some Helper Functions

### Getting All the User's Posts

### Getting All the User's Comments

### Getting All the User's Categories

### Getting All the User's Published and Draft Posts

### Getting all the User's post approved and unapproved comments



# CMS Extra feature - Multi-Language Feature
### Intro

### Creating Language Files

### Creating the Form Part 1

### Creating the Form Part 2

### Creating the Form Part 3
