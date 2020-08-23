<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>    
</head>
<body>
    
    <?php 
        $index = 6;
        while($index <= 5){
            echo "$index <br>";
            $index++;
        };

        for($i = 1; $i <= 5; $i++) {
            echo "$i <br>";
        }

        $luckyNumbers = array(4, 8, 15, 16, 23, 42);
        for ($i = 0; $i < count($luckyNumbers); $i++) {
            echo "$luckyNumbers[$i] <br>";
        }
    ?>

</body>
</html>