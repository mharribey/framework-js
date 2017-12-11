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
      <p id="coord"><b>Letter = </b> ? </p>
    </div>

    <button onclick="startCursor()" id="play-mode">start</button>
    <button onclick="clearTimeline()">clear</button>
    <button onclick="">save</button>
    <div class="timeline" id="timeline">
      <div class="cursor" id="cursor">

      </div>
    </div>

    <a href="liste.php" class="link">Sounds List</a>
    <script type="text/javascript" src="function.js"></script>
    <script type="text/javascript" src="init.js"></script>
    <script type="text/javascript" src="audio_player.js"></script>
  </body>
</html>
