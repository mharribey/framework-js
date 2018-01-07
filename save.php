<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

require 'models/manager.php';

$manager = new Manager;
var_dump($manager->getLastId());

 ?>
