<?php
//Metodo Inicial do sitema
$config_home="home";


//Configurações 
$database_config_host='mysql';
$database_config_name='blog';
$database_config_user='root';
$database_config_password='';

//param
// 0=inativo 1=ativo
$param_errors_php=1;

if($param_errors_php==1){

    ini_set('display_errors', 1);
    error_reporting(E_ALL);
    
}

?>