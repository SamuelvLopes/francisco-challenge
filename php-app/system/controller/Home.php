<?php

class Home extends BaseController{

    
    public function index() 
    {
        
        echo'<meta http-equiv="refresh" content="15; http://localhost">';
        $this->template('teste',[16,03,2001]);
    }
    
   
   


}



?>