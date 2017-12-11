// PLACER UN SAMPLE A UN TIMECODE DONNE
function placeSong(value){
  var elt = document.createElement('div');
  elt.className = "point";
  elt.style.left = count + "%";
  document.getElementById('timeline').appendChild(elt);
  playSound(value.toUpperCase());
  if(isGoing == true){
    arrangement.push({timecode: Math.round(count*100)/100, note: value})
  }
}

//GET BPM AND BEAT VALUE
function getValue(){
  var bpm = document.querySelector(".bpm-value").value;
  var beat = document.querySelector(".beat-value");
  var value = beat.options[beat.selectedIndex].value;

  intervalValue = Math.floor(((bpm/60)*value)/10);
}

function setBeat(){
  var beat = document.querySelector(".beat-value");
  var value = beat.options[beat.selectedIndex].value;

  switch(value) {
    case "8":
      Array.from(points2).forEach(p=>{
        p.remove();
      });
      var elt = document.createElement('div');
      elt.className = "point-sep";
      elt.style.left = "50%";
      timeline.appendChild(elt);
      break;
    case "16":
      Array.from(points2).forEach(p=>{
        p.remove();
      });
      var elt = document.createElement('div');
      var elt2 = document.createElement('div');
      elt.className = "point-sep";
      elt2.className = "point-sep";
      elt.style.left = "33%";
      elt2.style.left = "66%";
      timeline.appendChild(elt);
      timeline.appendChild(elt2);
      break;
    case "32":
      Array.from(points2).forEach(p=>{
        p.remove();
      });
      var elt = document.createElement('div');
      var elt2 = document.createElement('div');
      var elt3 = document.createElement('div');
      var elt4 = document.createElement('div');
      elt.className = "point-sep";
      elt2.className = "point-sep";
      elt3.className = "point-sep";
      elt4.className = "point-sep";
      elt.style.left = "20%";
      elt2.style.left = "40%";
      elt3.style.left = "60%";
      elt4.style.left = "80%";
      timeline.appendChild(elt);
      timeline.appendChild(elt2);
      timeline.appendChild(elt3);
      timeline.appendChild(elt4);
      break;
  }
}


// RANDOM COLOR FOR BOX SHADOW
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// DEMARRE LE DEPLACEMENT DU CURSEUR
function startCursor() {
  var button = document.getElementById('play-mode');
  var cursor = document.getElementById('cursor');
  count = 0;

  if(button.innerHTML == "start"){
    isGoing = true;
    isPaused = false;
    button.innerHTML = "pause";
    setBeat();
    getValue();

  } else {
    isPaused = true;
    isGoing = false;
    button.innerHTML = "start";
    deleteTimecode();
  }

  if (isLauched){
    interval = window.clearInterval(interval);
    interval = null;
  } else {
    interval = 0;
    isLauched = true;
  }
  console.log(intervalValue);
  interval = window.setInterval(deplace, intervalValue);
}

//LIS LES SONS SUR LA TIMELINE
function checkTimeline(){
  for (var i = 0; i < arrangement.length; i++) {
    if(arrangement[i]["timecode"] == count){
      playSound(arrangement[i]["note"]);
      console.log("player");
    }
  }
}

//REINITIALISE LA TIMELINE
function clearTimeline(){
  var points = document.getElementsByClassName('point');
  Array.from(points).forEach(p=>{
    p.remove();
  });
  arrangement = [];
}

//DEFINI UN INTERVAL POUR LE DEPLACEMENT DU CURSEUR
function deplace(){
  var cursor = document.getElementById('cursor');
  checkTimeline();
  if (count < 99.9 && (isPaused == false)) {
    count += 0.1;
    count = Math.round(count*100)/100;
    cursor.style.left = count + "%";
  }else{
    count = 0;
  }
}

//PERMET DE DETRUIRE UN TIMECODE SPECIFIQUE
function deleteTimecode(){
  Array.from(points).forEach(p=>{
    p.addEventListener("click",function(){
      var style = this.style.left;
      for (var i = 0; i < arrangement.length; i++) {
        if(arrangement[i].timecode+"%" == style){
          arrangement.splice(i, 1);
          break;
        }
      }
      this.remove();
    });
  });
}
