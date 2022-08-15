<?php
//Metodo Inicial do sitema
$config_home="home";
$config_host="http://localhost";

//Configurações 
$database_config_host='mysql';
$database_config_name='crud_samuel';
$database_config_user='root';
$database_config_password='';

//param
// 0=inativo 1=ativo
$param_errors_php=0;

if($param_errors_php==1){

    ini_set('display_errors', 1);
    error_reporting(E_ALL);
    
}else{
    error_reporting(0);
    ini_set('display_errors', 0 );
    
}

?>