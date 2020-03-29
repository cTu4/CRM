<?php
include "db_config.php";

$id=intval($_POST['id']);
$id_user=intval($_POST['id_user']);

$sql="delete from book where id=".$id;
$sql= mysqli_query($mysqli,$sql);
//$sql="delete from users where id=".$id_user;
//$sql= mysqli_query($mysqli,$sql);
var_dump($id);
