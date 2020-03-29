<?php
include "db_config.php";

$data = json_decode($_POST['data'],true);
foreach ($data as $item){
    $id = intval($item['id']);
    $id_user= intval($item['id_user']);
    $keys = $item['keys'];
    $mod_data=$item['mod_data'];
    var_dump($keys);
    foreach ($keys as $key){
        if($key==='phone'){
            $sql="update book set phone='".$mod_data[$key]."' where id=".$id;
            mysqli_query($mysqli,$sql);
            var_dump($sql);
        }
        else{
            $sql="update users set ".$key."='".$mod_data[$key]."' where id=".$id_user;
            mysqli_query($mysqli,$sql);
            var_dump($sql);

        }
    }
  // var_dump($item['id_user']);
}
