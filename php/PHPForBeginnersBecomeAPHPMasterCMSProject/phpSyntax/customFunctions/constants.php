<h1></h1>
<?php
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
?>