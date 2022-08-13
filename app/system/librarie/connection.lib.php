<?php

class Connection{


     function query($sql,$arg =0){

        

        if($arg!=0){
                
                $stmt= Database::getInstance()->prepare($sql); 
                
                
                foreach($arg as $value){


                    $stmt->bindParam($value['key'],$value['value']);

                }

                    $stmt->execute();
                    return $stmt;

            }else{

                    $stmt=Database::getInstance()->query($sql);
                    return $stmt;

            }
        


    

    }
}

