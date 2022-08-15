Relatorio Cadastro de Produtos

<?php
$data= group_by('grupo', $data);
foreach ($data as $grupo){
 //var_dump($grupo);
 $grupo_name=$grupo[0]['pg_descricao'];
    ?>   
<table border="1">
    <tr>
        <td colspan="6">Grupo <?=$grupo_name?></td>
    </tr>
    <tr>
        <td>Descricao</td>
        <td>Cod Barras</td>
        <td>Grupo</td>
        <td>Saldo</td>
        <td>Und</td>
        <td>Tipo</td>
    </tr>
    
    <?php
        foreach ($grupo as $row){
            
            echo"<tr>
        <td>".$row['descricao']."</td>
        <td>".$row['ean']."</td>
        <td>".$row['pg_descricao']."</td>
        <td>".$row['saldo_inicial']."</td>
        <td>".$row['pum_descricao']."</td>
        <td>".$row['pt_descricao']."</td>
    </tr>
            ";
        }
    ?>
</table>


    <?php
}
?>


<?php
function group_by($key, $data) {
    $result = array();

    foreach($data as $val) 
        if(array_key_exists($key, $val))
            $result[$val[$key]][] = $val;
        else
            $result[""][] = $val;
        
    

        return $result;

}
?>

