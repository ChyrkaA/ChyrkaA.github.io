<?php
session_start();
if($_SESSION['auth'] != true){
        header('HTTP/1.0 403 Forbidden');
        die;
}
//echo $_POST['name'];
$_POST = json_decode( file_get_contents('php://input'), true);  //декодируем json данные
$newFile = '../../'  . $_POST['name'] . '.html';        //путь для создания файла и его имя, конкатенация в PHP

if (file_exists($newFile)){
        header('HTTP/1.0 400 Bad request');     //если файл существует, то возвращаем ошибку
} else {
        fopen($newFile, 'w');   //путь к файлу, он лежит в переменной newFile, второй аргумент - то, что нужно с ним сделать, w означает, что мы открываем данный файл для редактирования, или создаем его
}