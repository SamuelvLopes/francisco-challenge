<?php
require_once('logger.php');
require_once('error.lib.php');
require_once($root_dir.'/system/librarie/database.lib.php');
require_once($root_dir.'/system/librarie/connection.lib.php');

/*
$instance = new connection();
$instance2 = new connection();

$sql="SELECT * FROM clientes";

$result=$instance->query($sql);
foreach ($result as $row){
    
    var_dump($row);
    echo'<hr>';
}
*/
//var_dump($instance,$instance2,$instance===$instance2);