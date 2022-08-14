<?php

class grupo extends Connection{
    
    public int $id;
    public String $descricao;
    
    public function getId(): int {
        return $this->id;
    }

    public function getDescricao(): String {
        return $this->descricao;
    }
    
    public function setId(int $id): void {
        $this->id = $id;
    }

    public function setDescricao(String $descricao): void {
        $this->descricao = $descricao;
    }
    
    public function getGrupo(int $id) {
        
        $arg=[];
        $arg[]=['key'=>':id',"value"=>$id];
        
        $sql = "select * from produto_grupo where pg_id=:id";
        
        $result=$this->query($sql, $arg);
        $result=$this->get_array($result);
        if(isset($result[0])){
        $grupo = new grupo();
        $grupo->setId($result[0]['pg_id']);
        $grupo->setDescricao($result[0]['pg_descricao']);
        return $grupo;
        }
        return null;
    }
    
    public function getGrupo_desc(int $descricao) {
        
        $arg=[];
        $arg[]=['key'=>':descricao',"value"=>$descricao];
        
        $sql = "select * from produto_grupo where pg_descricao=:descricao";
        
        $result=$this->query($sql, $arg);
        
        $result=$this->get_array($result);
        
        if(isset($result[0])){
        $grupo = new grupo();
        $grupo->setId($result[0]['pg_id']);
        $grupo->setDescricao($result[0]['pg_descricao']);
        return $grupo;
        }
        return null;
    }
    
    public function save_grupo($descricao){
        
        $arg=[];
        $arg[]=['key'=>':descricao',"value"=>strtoupper($descricao)];
        
        $sql = "select * from produto_grupo where pg_descricao=:descricao";
        $result=$this->query($sql, $arg);
        $result=$this->get_array($result);
        
        $grupo = new grupo();
        
        if(isset($result[0])){
           $grupo->setDescricao($result[0]['pg_descricao']);
           $grupo->setId($result[0]['pg_id']);
            return $grupo;
        }
        $sql="INSERT INTO `produto_grupo` (`pg_descricao`) VALUES (:descricao)";
        
        $this->query($sql,$arg);
        
      return  $this->save_grupo($descricao);
      
        
        
        
       
    }
    
    public function get_all() {
        
        $sql="SELECT * FROM produto_grupo";
        return $this->query($sql);    
        
    }
    
    public function delete($id) {
        
        $arg=[];
        $arg[]=['key'=>':id',"value"=>$id];
        $sql="SELECT * FROM produto where grupo=:id";
        
        $result=$this->query($sql, $arg);
        $result=$this->get_array($result);
        
         if(isset($result[0])){
             
             return false;
         }
         
        $sql="DELETE FROM produto_grupo WHERE pg_id = :id";
        $this->query($sql,$arg);
        
        return true;
    }


 
    
}