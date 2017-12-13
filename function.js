
/***************/
/* SET TIMECODE
/*
/***************/

function placeSong(value){
  var elt = document.createElement('div');
  var elt2 = document.createElement('p');
  elt2.innerHTML = value.toUpperCase();
  elt.className = "point";
  elt.draggable = true;
  elt.id = value;
  elt.style.left = count + "%";
  elt.appendChild(elt2);
  timeline.appendChild(elt);
  playSound(value.toUpperCase());
  if(isGoing == true){
    arrangement.push({timecode: Math.round(count*100)/100, note: value})
  }
}


/***************/
/* FIND CLOSEST
/*
/***************/


function closest (num, arr){
    curr = arr[0];
    for (var i = 0; i < arr.length; i++) {
      if (Math.abs(num - arr[i]) < Math.abs(num - curr)){
          curr = arr[i];
        }
    }
    return curr;
  }

  /***************/
  /* PERFECT TIMECODE
  /*
  /***************/


  var perfectTimecodes = [];

  function generateTimecodes(){

    var current = 0;

    while (current < 100) {
      perfectTimecodes.push(current);
      current += 100/16;
    }
  }

  generateTimecodes();


  /***************/
  /* DISPLAY PERFECT TIMECODE
  /*
  /***************/

  function displayBeats() {
    for (var i = 0; i < perfectTimecodes.length; i++) {
      var elt = document.createElement('div');
      elt.className = "beats";
      elt.style.left = perfectTimecodes[i] + "%";
      timeline.appendChild(elt);
    }
    var bars = document.getElementsByClassName('beats');
    for (var i = 0; i < bars.length; i++) {
      bars[i].style.opacity = "1";
    }
  }

  function opacityBeats() {
    console.log('start');
    var bars = document.getElementsByClassName('beats');
    for (var i = 0; i < bars.length; i++) {
      bars[i].style.opacity = "0";
    }
  }

  function hideBeats() {
    var bars = document.getElementsByClassName('beats');
    for (var i = 0; i < bars.length; i++) {
      bars[i].style.animation = "fade-out .5s ease-in forwards";
    }
    console.log('end');
    var bars = document.getElementsByClassName('beats');
    opacityBeats();
    setTimeout(delElts, 500);

  }


  function delElts() {
    var bars = document.getElementsByClassName('beats');
    Array.from(bars).forEach(b=>{
      b.remove();
    });
  }

/***************/
/* DRAG A DIV
/*
/***************/


function dragDiv(){
  Array.from(points).forEach(p=>{
    p.addEventListener("dragstart",function(event){
      displayBeats();
      var position = event.target.style.left;
      for (var i = 0; i < arrangement.length; i++) {
        if(arrangement[i].timecode+"%" == position){
          arrangement.splice(i, 1);
          break;
        }
      }
    });

    p.addEventListener("dragend",function(event){
      hideBeats();
      var finalPos = event.clientX/window.innerWidth*100;
      finalPos = closest(finalPos, perfectTimecodes);
      var id = event.target.id;
      event.target.style.left = Math.round(finalPos*100)/100+"%";
      arrangement.push({timecode: Math.round(finalPos*100)/100, note: id});
    });
  });
}


/***************/
/* TOGGLE METRONOME
/*
/***************/



function toggleMetronome(){
  metronomeOn = !metronomeOn;

  console.log(metronomeOn);
}


/***************/
/* GET BPM/BEAT VALUE
/*
/***************/


function getValue(){
  var bpm = document.querySelector(".bpm-value").value;
  var beat = document.querySelector(".beat-value");
  var value = beat.options[beat.selectedIndex].value;

  intervalValue = Math.floor(((bpm/60)*value)/10);
}


/***************/
/* DISPLAY BEAT
/*
/***************/


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


/***************/
/* RANDOM COLOR FOR
/* BOX SHADOW
/***************/


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


/***************/
/* START CURSOR
/*
/***************/


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
    dragDiv();
    console.log(arrangement);
  }

  if (isLauched){
    interval = window.clearInterval(interval);
    interval = null;
  } else {
    interval = 0;
    isLauched = true;
  }
  interval = window.setInterval(deplace, intervalValue);
}


/***************/
/* READ TIMELINE
/*
/***************/


function checkTimeline(){
  for (var i = 0; i < arrangement.length; i++) {
    if(arrangement[i]["timecode"] == count){
      playSound(arrangement[i]["note"]);
    }
  }
}


/***************/
/* CLEAR TIMELINE
/*
/***************/


function clearTimeline(){
  var points = document.getElementsByClassName('point');
  Array.from(points).forEach(p=>{
    p.remove();
  });
  arrangement = [];
}


/***************/
/* SET INTERVAL FOR
/* CURSOR
/***************/


function deplace(){
  metronome();
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

/***************/
/* SET SOUND FOR
/* METRONOME
/***************/



function metronome(){
  var beat = document.querySelector(".beat-value");
  var beatvalue = beat.options[beat.selectedIndex].value;
  //console.log(count);
  //console.log(count % (Math.round((100/beatvalue)*100)/100));
  if (count % (Math.round((100/beatvalue)*100)/100) == 0 && isPaused == false && metronomeOn == true) {
    playSound('e');
  }
  }


/***************/
/* DELETE TIMECODE
/*
/***************/


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
