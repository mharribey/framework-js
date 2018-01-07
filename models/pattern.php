<?php
/**
 *
 */
class Pattern
{

  protected $sounds =[];
  protected $user;
  protected $timeline;
  protected $manager;

  function __construct()
  {
    # code...
  }

  public function addSound(Sound $sound){
    array_push($this->sounds, $sound);
  }


}


 ?>
