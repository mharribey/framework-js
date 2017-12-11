
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

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function startCursor() {
  var button = document.getElementById('play-mode');
  var cursor = document.getElementById('cursor');
  count = 0;


  if(button.innerHTML == "start"){
    isGoing = true;
    isPaused = false;
    button.innerHTML = "pause";
  } else {
    isPaused = true;
    isGoing = false;
    button.innerHTML = "start";
  }

  if (isLauched){
    interval = window.clearInterval(interval);
    interval = null;
  } else {
    interval = 0;
    isLauched = true;
  }
  interval = window.setInterval(deplace, 10);
}

function checkTimeline(){
  for (var i = 0; i < arrangement.length; i++) {
    if(arrangement[i]["timecode"] == count){
      playSound(arrangement[i]["note"]);
      console.log("player");
    }
  }
}

function clearTimeline(){
  var points = document.getElementsByClassName('point');
  Array.from(points).forEach(p=>{
    p.remove();
  });
  arrangement = [];
}

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
