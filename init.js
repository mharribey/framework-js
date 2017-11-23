var lp = document.querySelector("#launchpad");

for(var i = 1;i<6;i++){
  for(var j = 1;j<6;j++){
    lp.innerHTML += "<div class='item' id='"+i+j+"' style='grid-column:"+i+"/"+i+";grid-row:"+j+"/"+j+"'>papa</div>"
  }
}
