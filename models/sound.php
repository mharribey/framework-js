<?php

/**
 *
 */
class Sound
{
  private $soundId;
  private $soundName;
  private $timeline;
  private $timecode;

  function __construct($timecode, $soundName)
  {
    $this->timecode = $timecode;
    $this->soundName = $soundName;
  }

  public function soundId(){return $this->soundId;}
  public function soundName(){return $this->soundName;}
  public function timeline(){return $this->timeline;}
  public function timecode(){return $this->timecode;}



}



 ?>
