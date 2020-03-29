<?php
include "db_config.php";
$name=$_POST['name'];
$surname=$_POST['surname'];
$phone=$_POST['phone'];
$patr=$_POST['patr'];


//function GetId($name,$table,$field, $mysqli){
//    $sql = "SELECT id from ".$table." where ".$field."='".$name."'";
//    var_dump($sql);
//    $id_name = mysqli_query($mysqli, $sql);
//    $id_name=mysqli_fetch_all($id_name)[0][0];
//    if (is_null($id_name)){
//        $sql = "insert into ".$table." values (null,'".$name."')";
//        $sql = mysqli_query($mysqli,$sql);
//        $sql = "SELECT id from ".$table." where ".$field."='".$name."'";
//        $id_name = mysqli_query($mysqli, $sql);
//        $id_name=mysqli_fetch_all($id_name)[0][0];
//    }
//    return $id_name;
//}
$sql = "select id from users where name='".$name."' && surname='".$surname."' && patr='".$patr."'";
$id = mysqli_query($mysqli,$sql);
$id=mysqli_fetch_all($id)[0][0];
if(is_null($id)){
    $sql = "insert into users values(null,'".$name."', '".$surname."', '".$patr."')";
    $id = mysqli_query($mysqli,$sql);
    $sql = "select id from users where name='".$name."' && surname='".$surname."' && patr='".$patr."'";
    $id = mysqli_query($mysqli,$sql);
    $id=mysqli_fetch_all($id)[0][0];
}
$sql = "insert into book values(null,".$id.",'".$phone."')";
$id = mysqli_query($mysqli,$sql);
//
//$id_name = GetId($name,'names','name',$mysqli);
//$id_surname = GetId($surname,'surnames','surname',$mysqli);
//
//
//
//$sql = "insert into book values (null,".intval($id_surname).",".intval($id_name).",".$phone.")";
//$res=mysqli_query($mysqli,$sql);

