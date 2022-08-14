<?php


final class Database
{
    private static ?PDO $instance;

    private function __construct()
    {
    }

    private function __clone()
    {
    }

    private function __wakeup()
    {
    }

    public static function getInstance():PDO
    {
        GLOBAL $database_config_host,$database_config_name,$database_config_password,$database_config_user;
        if(!isset(self::$instance)){
            self::$instance = new PDO("mysql:host=".$database_config_host.";dbname=".$database_config_name,$database_config_user,$database_config_password);
        }
        return self::$instance;
    }

    

}





?>