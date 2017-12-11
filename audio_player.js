

function playSound(note){
var path = "audio/"+note + ".wav";
var audio = new Audio(path);
audio.play();
}
