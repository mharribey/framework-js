<?php


/**
 *
 */
class Timeline
{

  private $timelineId;
  private $timelineName;
  private $User;
  private $sounds = [];
  private $manager;

  function __construct($name)
  {
    $this->manager = new Manager;
    $this->timelineName = $name;
    $this->manager->createTimeline($name);
    $this->timelineId = $this->manager->getLastId();
  }

  public function addSound(Sound $sound){
    array_push($this->sounds, $sound);
  }

  public function saveTimeline(){
    $this->manager->saveSounds($this->sounds, $this->timelineId);
  }

  public function sounds(){return $this->sounds;}
}



 ?>
