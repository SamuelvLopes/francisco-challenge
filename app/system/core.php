<?php


require_once('config.php');
require_once('librarie/lib.php');
require_once('classes/BaseController.php');


$caminho=__DIR__."/model/";


foreach(glob($caminho."{*}", GLOB_BRACE) as $novo_caminho){
 
    require_once($novo_caminho);
  
}

$caminho=__DIR__."/controller/";



foreach(glob($caminho."{*}", GLOB_BRACE) as $novo_caminho){
 
    require_once($novo_caminho);
  
}


$url=explode('/',$_SERVER['REDIRECT_URL']);



try {  



    if(!isset($url[1])){


        $url[1]=$config_home;


    }



    $url[1]=ucfirst(strtolower($url[1]));
    


    $controller = new $url[1]();

   


    if(isset($url[2])&&$url[2]!=''){
        
    
        $metodo= ucfirst(strtolower($url[2])); 


        try {   

        $controller->$metodo();

        }catch (Exception $e) {
        
            echo  "Metodo chamado ã ó existe";

        }catch (Error $e) { 

           
            echo 'Metodo chamado ã o existe';

        }
    }else{
        
        
       $controller->index();
        

    }

} catch (Exception $e) {
    echo 'Exceção capturada: ',  $e->getMessage(), "\n";
}catch (Error $e) { 
    echo "Error: " . $e->getMessage();
}
  
?>