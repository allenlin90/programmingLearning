<?php
$db['db_host'] = 'localhost';
$db['db_user'] = 'root';
$db['db_name'] = 'cms';

foreach($db as $key => $value) {
    define(strtoupper($key), $value);
}

$pw = getenv('mysqlpw'); //getenv('mysqlpw');
// echo $pw."\n";
$connection = new mysqli(DB_HOST, DB_USER, $pw, DB_NAME);
// if ($connection) {
//     echo "We are connected" . "\n";
// }
?>