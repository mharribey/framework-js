
function placeSong(value){
  var elt = document.createElement('div');
  elt.className = "point";
  elt.style.left = count + "%";
  document.getElementById('timeline').appendChild(elt);

  if(isGoing == true){
    arrangement.push({timecode: count, note: value+".mp3"})
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


function startCursor(e) {
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

function clearTimeline(){
  var points = document.getElementsByClassName('point');
  Array.from(points).forEach(p=>{
    p.remove();
  });
}

function deplace(){
  var cursor = document.getElementById('cursor');

  if (count < 99.9 && (isPaused == false)) {
    count += 0.1;
    cursor.style.left = count + "%";
  }
}
