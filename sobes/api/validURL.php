<?php
  $url = $_GET['url'];
  $html = file_get_contents($url);
  file_put_contents('output.html', $html);
?>