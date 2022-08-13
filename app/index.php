<?php
echo time();
echo'<hr>';
$pdo = null;
try {
    $pdo = new PDO('mysql:host=mysql;dbname=blog', 'root', '');
} catch (PDOException $e) {
    print $e->getMessage();
    die();
}
var_dump($pdo);