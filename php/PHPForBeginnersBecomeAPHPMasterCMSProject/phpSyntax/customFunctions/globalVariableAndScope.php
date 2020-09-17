<h1></h1>
<?php
    $x = 'outside';
    function convert(){
        global $x;
        $x = 'inside';
    }

    echo $x;
    echo "<br>";
    convert();
    echo $x;
?>