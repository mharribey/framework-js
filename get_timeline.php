<?php

require "models/sound.php";
require "models/timeline.php";
require "models/musician.php";
require "models/manager.php";
require "models/pattern.php";

$manager = new Manager;
echo json_encode($manager->getTimeline($_POST['id']));


 ?>
