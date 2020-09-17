<h1></h1>
<?php
    // regular array
    $number = array(10, 20, 49);
    echo $number[2] . "<br>";

    // associative array
    $names = array('first_name' => 'Allen', 'last_name' => 'Lin');
    print_r($names);
    echo "<br>";
    echo $names['first_name'] . ' ' . $names['last_name']; // Allen Lin    
?>