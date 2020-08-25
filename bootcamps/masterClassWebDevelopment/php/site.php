<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        // Default argument value
        function myAge($minage = 30) {
            echo "My age is: $minage <br>";
        }

        myAge();
        myAge(50);
        myAge(60);
        myAge(18);

        echo "<hr />";

        // Returning value
        function add($x, $y) {
            $x = $x + $y;
            return $x;
        }

        echo "1 + 2 = " . add(1,2) . "<br>";
        echo "3 + 4 = " . add(3,4) . "<br>";
        echo "5 + 5 = " . add(5,5) . "<br>";
    ?>
</body>
</html>