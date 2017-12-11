function playSound(note){
  var path, audio;

  path = "audio/"+note+".mp3";

  audio = new Audio(path);
  audio.play();
}
