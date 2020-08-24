Start: 2020/08/20
End: 

Note: I started this course is mainly for learning PHP with related stacks of technology during the time. I will learn the other sections if required. 


1. [How the Internet Works](#How-the-Internet-Works)
1. [The Web Development Process](#The-Web-Development-Process)
1. [Planning a Website](#Planning-a-Website)
1. [Web Hosting and System Requirements](#Web-Hosting-and-System-Requirements)
1. [Domain Names](#Domain-Names)
1. [Testing Environment](#Testing-Environment)
1. [Production Environment](#Production-Environment)
1. [FTP Setup](#FTP-Setup)
1. [HTML Development](#HTML-Development)
1. [CSS Development](#css-development)
1. [Document Object Model (DOM)](#Document-Object-Model-(DOM))
1. [JavaScript Development](#JavaScript-Development)
1. [jQuery Library](#jQuery-Library)
1. [Bootstrap Framework](#Bootstrap-Framework)
1. [PHP Development](#PHP-Development)
1. [MySQL Database Integration](#MySQL-Database-Integration)
1. [XML | AJAX](#XML-|-AJAX)
1. [Development Project](#Development-Project)
1. [Google Apps for Works](#Google-Apps-for-Works)
1. [Bonues: SSL Certificates - How to Secure your Server](#Bonues:-SSL-Certificates---How-to-Secure-your-Server)

# How the Internet Works
# The Web Development Process
# Planning a Website
# Web Hosting and System Requirements
# Domain Names

# Testing Environment
### Introduction to Testing Servers
1. A testing server allows us to test web application locally rather than uploading to live production server.
1. The testing server is important because any issue can be resolved without causing disruptions on the live server. 
1. PHP and MySQL require a testing server to function
1. Client side languages do not require a testing server (HTML, CSS, jQuery, JavaScript)
1. Pre-Packaged Solutions: WAMP (Windows) MAMP (MAC). 

### Installing WampServer - WAMP

# Production Environment
# FTP Setup
# HTML Development
# CSS Development
# Document Object Model (DOM)
# JavaScript Development
# jQuery Library
# Bootstrap Framework

# PHP Development
### PHP Syntax
1. A PHP statement must end with semi-column `;`.
1. PHP comments can be stated with `//` and `#` for single line comment and `/**/` for multi-line comments. 
1. PHP is not case sensitive with reserved keywords. However, declared variable names are case sensitive.

### PHP Variables 
1. A variable is like a container used to store information. 
1. Variable Name Rules in PHP
    1. Must be declared with a dollar sign `$`.
    1. Must start with a letter or underscore character `_`. 
    1. Cannot start with a number 
    1. Can only contain alpha-numeric characters and underscores (A-z, 0-9, and _).
    1. Variable names are case-sensitive ($var1 and $VAR1 are 2 different variables).
1. Note that PHP variables only need dollar sign to declare without using other keywords, such as `var`, `let`, and `const` in JavaScript. 

### PHP Variable Scope 
1. A Global scope variable is a variable declared outside a function. The variable can only be access outside of a function. This is very different from the execution context in JavaScript.
1. A Local scope variable is a variable declared inside a function.

### PHP Global Keyword 
1. We can use keyword `global` to access global variables out of a function. 
    ```php
    $x = 30; 
    $y = 20;

    function test1(){
        global $x, $y;
        $y = $x + $y; 
    }

    test1(); 
    echo $y; // 50
    ```
1. PHP stores global variables in an array called `$GLOBALS`. We can use index to access the variable at each position. 
    ```php
    $x = 30; 
    $y = 20;

    function test1(){
        $GLOBALS['y'] = $GLOBALS['x'] + $GLOBALS['y'];
    }

    test1(); 
    echo $y; // 50
    ```

### PHP static keyword
1. Keyword `static` can keep the value of a local variable though the function execution has ended. This is similar to using `closure` in JavaScript to keep the value of a variable in a function. Every time the function is called, the value of the variable will be kept. 
    ```php
    function test1() {
        static $x = 10; 
        echo $x; 
        $x++;
    }

    test1(); // 10
    echo "<br>";
    test1(); // 11
    echo "<br>";
    test1(); // 12
    echo "<br>";
    test1(); // 13
    ```
1. Closure in JavaScript 
    ```js
    function closureValue() {
        let num = 0; 
        return function (){
            return ++num;
        }
    }

    const num = closureValue();
    num(); // 1
    num(); // 2
    num(); // 3
    ```

### PHP echo vs print
1. `echo` allows multiple parameters, while `print` does not. However, multiple parameters in an `echo` statement are rarely used. 
    ```php
    // Basic output using echo 
    echo "<h1>Test Header</h1>";
    echo "Sample Paragraph 1. <br>";

    // echo allows multiple parameters - Print Does not 
    echo "This ", "string ", "has ", "multiple parameters ";
    echo "<hr />";

    //Output variables echo 
    $txt1 = "Sample Text 1";
    $txt2 = "Soccer";
    $x = 20; 
    $y = 30;

    echo "<h2>" . $txt1 . "</h2>";
    echo "I like " . $txt2 . "<br>";
    echo $x + $y;

    // Basic output using print
    print "<h1>Test Header</h1>";
    print "Sample Paragraph 1. <br>";
    print "<hr />";

    print "<h2>" . $txt1 . "</h2>";
    print "I like " . $txt2 . "<br>";
    print $x + $y;
    ```
    <img src='./images/echoAndPrint.PNG'>

### PHP Data Types
1. In PHP, we can use `var_dump()` to print out the variables with its type of value. If we use only `echo`, besides string and integer, PHP only prints the type of the variable. For example, we can use `var_dump()` to print PHP arrays.
1. `String` - PHP strings can be declared with single `'` or double qoutes `"`.
1. `Integer`
    1. PHP integers must have at least one digit.
    1. Must not have a decimal point. In PHP, integers and floats are 2 different types of value, while both of them are `Numbers` in JavaScript.
    1. Can be either positive or negative.
    1. Can be in three formats.
1. `Float` - A float (floating point number) is a number with a decimal point or a number in exponential form.
1. `Array` - We can use `var_dump()` to print out the values of an array.
1. `NULL` - A `null` means empty value in PHP. 
1. `Boolean` 
    1. A boolean represents 2 possible states, `true` or `false`.
    1. There are some falsy values that represents boolean `false`. 
        1. Integer `0`.
        1. Floats `0.0`.
        1. The empty string `""` and the string `"0"`. Note that only empty string is falsy in JavaScript, while a string `'0'` in JavaScript is truethy. 
        1. An array with zero elements. Note that an empty array is boolean `true` in JavaScript.
        1. `null` variables. 
        1. Any other value would be considered `true`. 
    ```php
    // String
    $x = "Hello world!";
    $y = 'Hello world!';
    echo $x;
    echo "<br>";
    echo $y;
    echo "<hr />";

    // Integer
    $num = 6000;
    var_dump($num);
    echo "<hr />";

    // Float 
    $num2 = 20.565;
    var_dump($num2);
    echo "<hr />";

    // Array
    $sports = array('Soccer', 'Tennis', 'Baseball', 'Football');
    var_dump($sports);
    echo "<hr />";

    // NULL
    $color = 'Blue';
    $color = null; 
    var_dump($color);

    // Boolean
    $x = true; 
    $y = false;
    var_dump($x);
    var_dump($y);
    ```

### PHP Objects 
1. An object stores data and information on how to process the data known as a method, a function of an object. 
1. An object `class` is the set of properties (or variables) that are tied to an `object`.
1. Assignment Types
    1. A `public` assignment means the property can be accessed everywhere. 
    1. A `private` assignment means it can only be accessed by the class that defines it. 
    1. A protected assignment means it can be accessed only within the class itself and by inherited parent classes. 
    ```php
    // Create the class
    class Person {
        // Create properties - (Variables tied to objects)
        public $firstname;
        public $lastname;
        public $age;

        // Assigning values to the property variables 
        public function __construct($firstname, $lastname, $age) {
            $this->firstname = $firstname;
            $this->lastname = $lastname;
            $this->age = $age;
        }

        // Create a method (Function tied to an object)
        public function hello(){
            return "I am " . $this->firstname . " " . $this->lastname . ", my age is: " . $this->age . "";
        }
    }

    // Creating a new person named "John Smith", who is 25 years old 
    $person1 = new Person('John', 'Smith', 25);
    $person2 = new Person('Joe', 'Bob', 35);

    // Print out what the hello method returns 
    echo $person1->hello(); // I am John Smith, my age is: 25
    echo "<br>";
    echo $person2->hello(); // I am Joe Bob, my age is: 35
    ```

### PHP Strings
1. 

# MySQL Database Integration
# XML | AJAX
# Development Project
# Google Apps for Works
# Bonues: SSL Certificates - How to Secure your Server