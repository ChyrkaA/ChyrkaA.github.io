<?php
if (isset($_GET['url'])) {
  $url = $_GET['url'];
  $html = file_get_contents($url);
  echo $html;
} else {
  echo 'Необходимо передать параметр url';
}
?>