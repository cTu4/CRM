<?php
include "db_config.php";
$sql = 'SELECT book.id,name,surname,patr,phone, users.id from book inner join users on book.id_user=users.id';
$data = mysqli_query($mysqli,$sql);
$data = mysqli_fetch_all($data);
echo json_encode($data);
