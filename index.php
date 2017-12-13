<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

 ?>
<?php require 'header.php'; ?>
<?php require 'controllers/application_controller.php'; ?>

<html>
  <head>
    <meta charset="utf-8">
    <title>test</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div id="launchpad"></div>
    <img src="audio/question.png" alt="question" id="icon-help">
    <div class="help">
      <p> <span>1.</span> Click on a time code to delete it </p>
      <p> <span>2.</span> Drag a time code to deplace it </p>
      <p> <span>3.</span> Press "space" to start timeline </p>
      <p> <span>4.</span> Press "enter" to clear timeline </p>
    </div>
    <div class="result">
      <p>Nombre de temps -</p>
      <select class="beat-value" name="bpm-value">
        <option value="8">8</option>
        <option value="16">16</option>
        <option value="32">32</option>
      </select>
    </div>
    <div class="result">
      <p>BPM -</p>
      <input type="number" name="" value="120" class="bpm-value">
    </div>

    <div class="buttons">
      <button onclick="startCursor()" id="play-mode" hidden="true">start</button>
      <button onclick="clearTimeline()" hidden="true">clear</button>
      <button onclick="">save</button>
      <button onclick="toggleMetronome()">metronome</button>
    </div>
    <div class="timeline" id="timeline">
      <div class="cursor" id="cursor">

      </div>
    </div>
    <a href="liste.php" class="link">Sounds List</a>
    <script type="text/javascript" src="function.js"></script>
    <script type="text/javascript" src="init.js"></script>
    <script type="text/javascript" src="audio_player.js"></script>
    <script type="text/javascript" src="saver.js"></script>
  </body>
</html>
