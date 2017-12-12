<?php

/**
 *
 */
class Musician extends Manager
{

  private $id;
  private $username;
  private $password;

  function __construct(username, password)
  {
    # code...
  }

  function getId(){return $this->id}
  function getUsername(){return $this->username}

  function setUsername(String $username){

  }

  public function setPassword($value)
  {
    # code...
  }
}



 ?>
