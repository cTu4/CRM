<?php
$host = "localhost";
$database = "phone_book";
$password = "ko2ra6t2a";
$user = "root";

$mysqli = new mysqli($host, $user, $password,$database);
$mysqli->set_charset("utf8");