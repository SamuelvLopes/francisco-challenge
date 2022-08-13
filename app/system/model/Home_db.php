<?php

class Home_db extends Connection{

     function __construct() 
    {
        $this->query('SELECT * FROM blog.posts');
    echo"<br>";
echo 'Data base iniciado';
 
    echo"<br>";
 
    }


}

?>