<?php
//Creado por Fernando Isaías García Aguirre
header("Content-Type: text/html; charset=utf-8");
include 'context.php';
error_reporting(5);

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("'error': '" . $conn->connect_error . "'");
}

$sql = "INSERT INTO report (project, name, type, date, description, status)  VALUES ('" . $_POST['project'] . "', '" . $_POST['name'] . "', '" . $_POST['type'] . "', '" . $_POST['date'] . "', '" . $_POST['description'] . "', '" . $_POST['status'] . "');";
$result = $conn->query($sql);
echo $result;
$conn->close();