<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>    
</head>
<body>
    <h1></h1>
    <?php 
        class Chef {
            function makeChicken(){
                echo "The chef makes chicken <br>";
            }
            function makeSalad(){
                echo "The chef makes salad <br>";
            }
            function makeSpecialDish(){
                echo "The chef makes bbq ribs <br>";
            }
        }

        class ItalianChef extends Chef {
            function makePasta(){
                echo "The chef makes pasta";
            }
            function makeSpecialDish(){
                echo "The chef makes chicken parm";
            }
        }

        $chef = new Chef();
        $chef->makeSpecialDish();

        $italianChef = new ItalianChef();
        $italianChef->makeSpecialDish();

        // $chef->makePasta(); // error
    ?>

</body>
</html>