<?php
//Creado por Fernando Isaías García Aguirre
header("Content-Type: text/html; charset=utf-8");
include 'context.php';
error_reporting(5);

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("'error': '" . $conn->connect_error . "'");
}

$sql = "UPDATE report SET project = '". $_POST['project'] ."', name = '". $_POST['name'] ."', type = '". $_POST['type'] ."', date = '". $_POST['date'] ."', description = '". $_POST['description'] ."', status = '". $_POST['status'] ."' WHERE uid = '". $_POST['uid'] ."';";
$result = $conn->query($sql);
echo $result;
$conn->close();