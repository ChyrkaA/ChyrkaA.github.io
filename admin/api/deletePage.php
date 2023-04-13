<?php
session_start();
if($_SESSION['auth'] != true){
        header('HTTP/1.0 403 Forbidden');
        die;
}

$_POST = json_decode( file_get_contents('php://input'), true);
$fileName = $_POST['name'];
$file = '../backups/'  . $_POST['name'];

$backups = json_decode(file_get_contents('../backups/backups.json'));
if (file_exists($file)){
        unlink($file);
        foreach($backups as $key=>$bckp){
                var_dump($backups);
                if($bckp->file === $fileName){
                        unset($backups[$key]);
                }
        }
        $backups = array_values($backups);
        file_put_contents('../backups/backups.json', json_encode($backups));
} else {
        header('HTTP/1.0 400 Bad request');
}