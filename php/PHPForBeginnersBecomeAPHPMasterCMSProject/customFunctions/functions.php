<h1></h1>
<?php
    /* Defining Functions */
    // init();
    function init () {
        sayHi();
        echo "<br>";
        calculate(1,2);
    }

    function sayHi() {
        echo 'Hello World!';
    }
    
    /* Function Parameters */
    function greeting($message){
        echo $message;
    }

    // greeting('Hello Everyone!');

    // echo "<br>";  

    /* Return Values from Functions */
    function addNumbers($num1, $num2) {
        $sum = $num1 + $num2;
        return $sum;
    }

    $result = addNumbers(12, 24);

    echo $result . "<br>"; // 36

    $result = addNumbers(13, $result);
    echo $result; // 49

    /* Global variable and scope */
?>