var lp = document.querySelector("#launchpad");
var coord = document.querySelector("#coord");
var item = document.getElementsByClassName("item");
var points = document.getElementsByClassName('point');


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
var colorPad;

var isGoing = false;
var isPaused = true;
var isLauched = false;
var isPress = false;

// START WITH SPACE AND CLEAR WITH RETURN
document.body.onkeyup = function(e){
    if(e.keyCode == 32){ //SPACE
      startCursor();
    }
    if(e.keyCode == 13){ //RETURN
      clearTimeline();
    }
}

// DELETE A POINT BY click

function deleteTimecode(){
  Array.from(points).forEach(p=>{
    p.addEventListener("click",function(){
      var style = this.style.left;
      console.log(style);
      for (var i = 0; i < arrangement.length; i++) {
        console.log(arrangement[i].timecode+"%");
        if(arrangement[i].timecode+"%" == style){
          arrangement.slice(i, 1);
          break;
        }
      }
      this.remove();
    });
  });
}


// CREATION LAUNCHPAD + LETTRES
Array.from(array).forEach(letter=>{
  lp.innerHTML += "<div class='item' id='"+letter+"'><p>"+letter+"</p></div>";
});

// SELECTION D'UN PAD
Array.from(item).forEach(pad=>{
  var color = getRandomColor();

  pad.addEventListener("click",function(){
    Array.from(item).forEach(pad1=>{
      pad1.style.background = "white";
    });
    this.style.background = "radial-gradient(red,white)";
    var elt = this.id;
    coord.innerHTML = "<b>Letter = </b>" + elt;
    if(!isPaused && count != 0){
    placeSong(elt.toLowerCase());
  }
  });
  pad.style.boxShadow = "0px 0px 25px 1px" + color;
});


// AVEC TOUCHES

document.addEventListener("keydown",function(el){
  var keyName = el.key;
  Array.from(item).forEach(pad=>{
    if ((keyName == pad.id.toLowerCase() || keyName == pad.id) && (isPress == false)) {
        Array.from(item).forEach(pad1=>{
          pad1.style.backgroundColor = "white";
        });
      pad.style.background = "radial-gradient(red,white)";
      coord.innerHTML = "<b>Letter = </b>" + pad.id;
      if(!isPaused && count != 0){
      placeSong(pad.id.toLowerCase());
    }
      isPress = true;
    }
  });
});

document.addEventListener("keyup",function(){
  isPress = false;
  Array.from(item).forEach(pad=>{
    pad.style.background = "white";
  });
});
