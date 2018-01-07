<?php


/**
 *
 */
class Manager
{

  private $db;


  function __construct()
  {
    $this->db = new PDO('mysql:host=localhost;dbname=launchpad','root', 'root');
  }

  function createTimeline(){
    $this->db->query("INSERT INTO Timeline (TimelineName, UserID) VALUES ('timeline de test', 1)");
  }

  function saveSounds($sounds, $timeline){
    foreach ($sounds as $sound) {
      var_dump("ereg de: " . $sound->soundName() . " au timecode " . $sound->timecode() . "dans la timeline" . $timeline);
      $req = $this->db->prepare("INSERT INTO Sound (SoundName, TimelineID, Timecode) VALUES ('". $sound->soundName() ."', ". $timeline . ", ". (float) $sound->timecode() .")");
      $req->execute();
      $arr = $req->errorInfo();
      print_r($arr);
    }
  }

  public function saveUser(User $user){
  }

  public function getLastPatterns(){
    $req = $this->db->query('SELECT * FROM Timeline ORDER BY TimelineID DESC LIMIT 10');
    return $req->fetch(PDO::FETCH_ASSOC);
  }

  public function getLastId(){
    $req = $this->db->query('SELECT MAX(TimelineID) FROM Timeline');
    $result = $req->fetch(PDO::FETCH_ASSOC);
    return $result['MAX(TimelineID)'];
  }
}



 ?>
