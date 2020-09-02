<h1></h1>
<?php
    function calculation(){
        $num1 = 20;
        $num2 = 50;
        $sum = $num1 + $num2;
        return $sum;
    }
    echo calculation() . "<br>";

    function addNumbers($num1, $num2){
        return $num1 + $num2;
    }
    echo addNumbers(1,2) . "<br>";
?>