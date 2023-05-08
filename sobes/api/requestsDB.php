<?php
$_POST = json_decode(file_get_contents('php://input'), true);

$timeOfRequest = $_POST['timeOfRequest'];
$url = $_POST['url'];
$startTimeRequest = $_POST['startTimeRequest'];
$counter = $_POST['counter'];
$hostname = $_POST['hostname'];
$tagValue = $_POST['tagValue'];

if (!is_dir('../requestDB/')) {
        mkdir('../requestDB/');
}
;

$requestDB = json_decode(file_get_contents('../requestDB/requestDB.json'));
if (!is_array($requestDB)) {
        $requestDB = [];
}

if ($url && $timeOfRequest) {
        array_push($requestDB, ['timeOfRequest' => $timeOfRequest, 'url' => $url, 'hostname' => $hostname, 'startTimeRequest' => $startTimeRequest, 'counter' => $counter, 'tagValue' => $tagValue]);
        file_put_contents('../requestDB/requestDB.json', json_encode($requestDB));
        echo "Done";
} else {
        header('HTTP/1.0 400 Bad request');
}