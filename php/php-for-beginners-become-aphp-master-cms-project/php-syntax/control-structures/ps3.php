<h1></h1>
<?php
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
?>