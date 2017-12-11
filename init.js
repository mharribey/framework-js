var lp = document.querySelector("#launchpad");
var coord = document.querySelector("#coord");
var item = document.getElementsByClassName("item");

// LETTRES
var array = ["A","Z","E","R","T",
            "Y","U","I","O","P",
            "Q","S","D","F","G",
            "H","J","K","L","M",
            "W","X","C","V","B",
            "N"];

var arrangement = [];
var count = 0;
var interval = 0;

var isGoing = false;
var isPaused = true;
var isLauched = false;
var isPress = false;

// CREATION LAUNCHPAD + LETTRES
Array.from(array).forEach(letter=>{
  lp.innerHTML += "<div class='item' id='"+letter+"'><p>"+letter+"</p></div>";
});

// SELECTION D'UN PAD
Array.from(item).forEach(pad=>{
  pad.addEventListener("click",function(){
    Array.from(item).forEach(pad1=>{
      pad1.style.backgroundColor = "blue";
    });
    this.style.backgroundColor = "red";
    var elt = this.id;
    coord.innerHTML = "<b>Letter = </b>" + elt;
    if(!isPaused && count != 0){
    placeSong(elt.toLowerCase());
  }
  });
});


// AVEC TOUCHES

document.addEventListener("keydown",function(el){
  var keyName = el.key;
  Array.from(item).forEach(pad=>{
    if ((keyName == pad.id.toLowerCase() || keyName == pad.id) && (isPress == false)) {
        Array.from(item).forEach(pad1=>{
          pad1.style.backgroundColor = "blue";
        });
      pad.style.backgroundColor = "red";
      coord.innerHTML = "<b>Letter = </b>" + pad.id;
      if(!isPaused && count != 0){
      placeSong(elt.toLowerCase());
    }
      isPress = true;
    }
  });
});

document.addEventListener("keyup",function(el){
  isPress = false;
  var keyName = el.key;
  Array.from(item).forEach(pad=>{
    pad.style.backgroundColor = "blue";
  });
});



function placeSong(value){
  var elt = document.createElement('div');
  elt.className = "point";
  elt.style.left = count + "%";
  document.getElementById('timeline').appendChild(elt);

  arrangement.push({timecode: count, note: value+".mp3"})
}



function startCursor(e) {
  var button = document.getElementById('play-mode');
  if(button.innerHTML == "start"){
    isPaused = false;
    button.innerHTML = "pause";
  }else{
    isPaused = true;
    button.innerHTML = "start";
  }
  var cursor = document.getElementById('cursor');
  count = 0;
  if (isLauched){
    console.log("Reset");
  interval = window.clearInterval(interval);
  interval = null;
}else{
  console.log("first");
  interval = 0;
  isLauched = true;
}
  console.log(interval);
  interval = window.setInterval( deplace, 10);
}

function clearTimeline(){
  var points = document.getElementsByClassName('point');
  Array.from(points).forEach(p=>{
    p.remove();
  });
}

function deplace(){
  if (count < 99.9 && (isPaused == false)) {
  count += 0.1;
  var cursor = document.getElementById('cursor');
  cursor.style.left = count +"%";
}else{
  count = 0;
}
}
