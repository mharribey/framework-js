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

  function createTimeline($name){
    $this->db->query("INSERT INTO Timeline (TimelineName, UserID) VALUES ('".$name."', 1)");
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

  public function getLastTimelines(){
    $req = 0;
    $req = $this->db->prepare('SELECT * FROM Timeline ORDER BY TimelineID DESC LIMIT 10');
    $req->execute();
    $arr = $req->errorInfo();
    $all = [];
    while ($data = $req->fetch(PDO::FETCH_ASSOC)) {
      array_push($all, $data);
    }
    return $all;
  }

  public function getTimeline($id){
    $req = $this->db->query('SELECT * FROM Sound WHERE TimelineID ='. $id);
    $all = [];
    while ($data = $req->fetch(PDO::FETCH_ASSOC)) {
      array_push($all, $data);
    }
    return $all;
  }

  public function getLastId(){
    $req = $this->db->query('SELECT MAX(TimelineID) FROM Timeline');
    $result = $req->fetch(PDO::FETCH_ASSOC);
    return $result['MAX(TimelineID)'];
  }
}



 ?>
