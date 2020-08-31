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

# Custom Functions
# PHP Built-in Functions
# How to Use Form Data in PHP
# How to Use Databases in PHP
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