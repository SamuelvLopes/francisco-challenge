<?php

class Home_db extends Connection{

     function __construct() 
    {
        $this->query('SELECT * FROM produto_grupo');
    echo"<br>";
echo 'Data base iniciado';
 
    echo"<br>";
 
    }


}

?>