<?php

class Home extends BaseController{

    
    public function index() 
    {
     
       $this->bd();
       $this->view('teste',[2,4,5]);
       echo '<hr>';
       echo '<hr>';
       echo '<hr>';
       $this->template('teste',[16,03,2001]);
    }
    
   
   


}



?>