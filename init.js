var lp = document.querySelector("#launchpad");
var coord = document.querySelector("#coord");
var item = document.getElementsByClassName("item");

// LETTRES
var array = ["A","Z","E","R","T",
            "Y","U","I","O","P",
            "Q","S","D","F","G",
            "H","J","K","L","M",
            "W","X","C","C","B"]

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
  });
});

// AVEC TOUCHES

document.addEventListener("keypress",function(el){
  var keyName = el.key;
  console.log(keyName);
  Array.from(item).forEach(pad=>{
    if (keyName == pad.id.toLowerCase()) {
        Array.from(item).forEach(pad1=>{
          pad1.style.backgroundColor = "blue";
        });
      pad.style.backgroundColor = "red";
      coord.innerHTML = "<b>Letter = </b>" + pad.id;
    }
  });
});
