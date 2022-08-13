<?php

class BaseController{

    function __construct() 
    {
       
    }
    public function bd(){
        $bd_class=get_called_class()."_db";
        return new $bd_class();
    }

    public function view($view,$data=[]){
        
        global $root_dir;
       try {  
           $filename=$root_dir."/system/view/".ucfirst(strtolower($view)).".php";
            if(is_readable($filename)){
                require($filename);
            }
        } catch (Exception $e) {
            echo 'View n encontrada: ',  $e->getMessage(), "\n";
        }catch (Error $e) { 
            echo "View n encontrada: " . $e->getMessage();
        }
    }
    
    public function template($view,$data) {
        
        $this->view("template/header",$data);
        
        $this->view($view,$data);
        
        $this->view("template/footer",$data);
        
        $this->view("template/scripts",$data);
        
        
    }
   


}

?>