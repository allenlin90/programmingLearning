<?php
    if (isset($_POST['submit'])) {
        $name = array('Allen', 'Peter', 'Tom', 'John', 'Tom');
        
        $minimum = 5;
        $maxmimum = 10;

        $username = $_POST['username'];
        $password = $_POST['password'];

        if (strlen($username) < 5) {
            echo 'Username has to be longer than five' . '<br>';
        }
        if (strlen($username) > $maxmimum) {
            echo 'Username cannot be longer than 10' . '<br>';
        }
        if (!in_array($username, $name)) {
            echo 'Sorry you are not allowed' . '<br>';
        } else {
            echo 'Welcome back!' . '<br>';
        }
    }
?>