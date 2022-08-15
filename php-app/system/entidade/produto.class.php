<?php

class produto extends Connection{
    
    public $descricao;
    public $grupo;
    public $ean;
    public $saldo_inicial;
    public $unidade_medida;
    public $tipo;
    
    
    public function set_produto($descricao,$grupo,$ean,$saldo_inicial,$unidade_medida,$tipo){
        
        $arg=[];
        $arg[]=['key'=>':ean',"value"=>$ean];
        $arg[]=['key'=>':descricao',"value"=>$descricao];
        
        $sql="SELECT * FROM produto WHERE descricao=:descricao OR ean=:ean";
        
        $result=$this->query($sql, $arg);
        $result=$this->get_array($result);
        
        
        
        if(isset($result[0])){
            
            return false;
        }
        
        
        $arg[]=['key'=>':grupo',"value"=>$grupo];
        $arg[]=['key'=>':saldo_inicial',"value"=>$saldo_inicial];
        $arg[]=['key'=>':unidade_medida',"value"=>$unidade_medida];
        $arg[]=['key'=>':tipo',"value"=>$tipo];
        
        $sql="
        INSERT INTO produto (descricao,grupo,ean,saldo_inicial,unidade_medida,tipo)
        VALUES
	(:descricao,:grupo,:ean,:saldo_inicial,:unidade_medida,:tipo)
        ";
        
        $this->query($sql, $arg);
        
       return true;
        
        
    }
    
    public function get_all(){
        
        $sql="SELECT descricao 'desc',grupo ,ean,saldo_inicial 'saldo',unidade_medida 'und',tipo FROM produto";
        
        $result = $this->query($sql);
        $result = $this->get_array($result);
        
        return $result;
        
    }
    
    public function delete($ean) {
        
        $arg=[];
        $arg[]=['key'=>':ean',"value"=>$ean];
        $sql="DELETE FROM produto WHERE ean = :ean";
        $this->query($sql,$arg);
        
        return true;
    }
    
    
    
}