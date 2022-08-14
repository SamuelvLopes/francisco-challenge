<?php

class Logger{
    
    public $dir_log;
    
    function __construct() 
    {
        global $root_dir;
     
        $dir=$root_dir.'/resources/log/';
        if(!is_dir($dir)){
            mkdir($dir, 0777);
        }
        $this->dir_log=$dir;
       
    }
    
    
    function create_log($filename="",$content=null,$type='a+'){
        if($content==null){
            return false;
        }
        if($filename==""){
            $filename=time()."_log";
        }
        
        $filename .= ".log";
       
        $filename=$this->dir_log.$filename;
        $handle=fopen($filename,$type);
        fwrite($handle, $content."\r\n \r\n \r\n");
        fclose($handle);
    }
    
    function writelog($filename="",$content=null,$type='a+'){
        if($content==null){
            return false;
        }
        if($filename==""){
            $filename=time()."_log";
        }
        
        $filename .= ".log";
       
        $filename=$this->dir_log.$filename;
        $handle=fopen($filename,$type);
        fwrite($handle, print_r($content,true)."\r\n \r\n \r\n");
        fclose($handle);
    }
    
}


?>