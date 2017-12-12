<?php require 'header.php' ?>

<html>
  <head>
    <meta charset="utf-8">
    <title>test</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div id="launchpad"></div>

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

    <button onclick="startCursor()" id="play-mode">start</button>
    <button onclick="clearTimeline()">clear</button>
    <button onclick="">save</button>
    <div class="timeline" id="timeline" dragover="true">
      <div class="cursor" id="cursor">

      </div>
    </div>
    <p class="help">Click on a beat to delete it, drag to deplace it.</p>
    <a href="liste.php" class="link">Sounds List</a>
    <script type="text/javascript" src="function.js"></script>
    <script type="text/javascript" src="init.js"></script>
    <script type="text/javascript" src="audio_player.js"></script>
  </body>
</html>
