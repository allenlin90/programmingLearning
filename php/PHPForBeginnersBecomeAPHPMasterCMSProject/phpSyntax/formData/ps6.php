<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="ps6.php" method="POST">
        <input type="text" name="input">
        <input type="submit" value="submit" name="submit">
    </form>
    <?php
        if (isset($_POST['submit'])) {
            $userInput = $_POST['input'];
            echo "The user gives " . $userInput;
        }
    ?>
</body>
</html>