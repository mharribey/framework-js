function playSound(note){
  var path, audio;

  path = "audio/"+vol+"/"+note+".mp3";

  console.log(path);
  audio = new Audio(path);
  audio.play();
}
