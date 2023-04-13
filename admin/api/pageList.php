<?php
session_start();
if($_SESSION['auth'] != true){
        header('HTTP/1.0 403 Forbidden');
        die;
}
$htmlfiles = glob('../../*.html');
$response = [];
//$greating = 'Hello world';      //объявляем переменную
//echo var_dump($htmlfiles);      //var_dump представляем переменную (массив) в виде строки, формат json

forEach ($htmlfiles as $file) {
        array_push($response, basename($file)); //добавляем в массив имена файлов. Синтаксис (в какой массив, что добавляем)
}

echo json_encode($response);      //jsonEncode, получаем валидный json с массивом данных