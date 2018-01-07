<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

require "models/sound.php";
require "models/timeline.php";
require "models/musician.php";
require "models/manager.php";
require "models/pattern.php";



 ?>

<?php

$timeline = new Timeline($_POST['title']);
$sounds = json_decode($_POST['data'], true);
foreach ($sounds as $timecode => $data) {
  var_dump($data["timecode"]);
  $sound = new Sound($data["timecode"], $data['note']);
  $timeline->addSound($sound);
}


$timeline->saveTimeline();


 ?>
