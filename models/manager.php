<?php


/**
 *
 */
abstract class Manager
{

  private $db;


  function __construct()
  {
    $this->db = new PDO('mysql:host=localhost;dbname=test','root', 'root');
  }

  function createTimeline(){
    $this->db->query('INSERT INTO timeline (TimelineName, UserID) VALUES (test, 0)');
  }

  public function saveUser(User $user){

  }
}



 ?>
