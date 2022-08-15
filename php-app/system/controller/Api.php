<?php

class Api extends BaseController{

    
    
    public function index() 
    {
        
        echo'<meta http-equiv="refresh" content="15; http://localhost">';
        $this->template('teste',[16,03,2001]);
    }
    public function produtos(){
         $json_convertido = json_decode(file_get_contents('php://input'), true);
        
        switch ($_SERVER['REQUEST_METHOD']){
        case 'POST':
            $descricao=$json_convertido['description'];
            $grupo=$json_convertido['produto_grupo'];
            $ean=$json_convertido['ean'];
            $saldo_inicial=$json_convertido['saldo'];
            $unidade_medida=$json_convertido['produto_unidade_medida'];
            $tipo=$json_convertido['produto_tipo'];
            $result=$this->get_array($this->get_grupo()->get_all());
            if($grupo==null){
                $grupo=$result[0]['id'];
            }
            
            if($unidade_medida==null){
                $unidade_medida='CX';
            }
            
            if($tipo==null){
                $tipo='MP';
            }
            $this->logger()->writelog('log novo produto',[$descricao, $grupo, $ean, $saldo_inicial, $unidade_medida, $tipo],'a+');            
            $this->get_produto()->set_produto($descricao, $grupo, $ean, $saldo_inicial, $unidade_medida, $tipo);
            $this->logger()->writelog('post '.$request[1],[$json_convertido],'a+');
        
            break;
        case 'OPTIONS':
         $request= explode("/api/produtos/", $_SERVER['REDIRECT_URL']);
         $this->get_produto()->delete($request[1]);
         $this->logger()->writelog('delete '.$request[1],[$_SERVER,$_POST,$_REQUEST,apache_request_headers(),$json_convertido,getallheaders()],'a+');
            break;
        default :
            
             echo json_encode($this->get_produto()->get_all());
            
            break;
            
        }
       
       $this->logger()->writelog($_SERVER['REQUEST_METHOD'].' LOGS '.time().' '.rand(0,999),[$_SERVER],'a+');
    }
    
    public function export() {
        
    header("Content-Disposition: attachment; filename=export_".date('Y_m_d___H_i_s').".doc");
    
    $sql="
        SELECT p.*,pg.*,pt.*,pum.* FROM produto p 
        INNER JOIN produto_grupo pg ON 
        pg.pg_id=p.grupo 
        INNER JOIN produto_tipo pt ON
        pt.pt_id=p.tipo
        INNER JOIN produto_unidade_medida pum ON
        pum.pum_id=p.unidade_medida
         ";
    
    $result= $this->get_array($this->query($sql));
    
    $this->view('export', $result);

    }    
    public function grupos() {
         $json_convertido = json_decode(file_get_contents('php://input'), true);
        
        switch ($_SERVER['REQUEST_METHOD']){
        case 'POST':
            $desc=$json_convertido['desc'];
            $this->get_grupo()->save_grupo($desc);
            $this->logger()->writelog('Post logger',[$json_convertido,$desc],'a+');
            break;
        case 'OPTIONS':
            
            $request=explode('/api/grupos/',$_SERVER['REDIRECT_URL']);
            $this->get_grupo()->delete($request[1]);
            break;           
        default :
        $result=$this->get_grupo()->get_all();
        $result=$this->get_array($result);
        echo json_encode($result);
            break;
        
        }
        $this->logger()->writelog($_SERVER['REQUEST_METHOD'].' LOGS '.time().' '.rand(0,999),[$_SERVER],'a+');
        
    }
   
   


}



?>