<h1></h1>
<?php
    echo rand(1, 999) . "<br>"; // a random number from 1 to 999

    $text = "some gibberish words that has no meaning. Maybe I can try lorem ipsum next time.";
    echo strlen($text) . "<br>"; // 80

    $arr = [1235,6,23,488,32354,'01',2312,32,48,36,564,56789,$text];
    if (in_array($text, $arr)) {
        echo '$text is in the array';
    }
?>