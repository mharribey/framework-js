// function saveTimeline() {
//
// }
//
// async function createTimeline(username) {
//   let response = await fetch(`createTimeline.php`)
//   return response.json()
// }
//
// async function isUserValid(target) {
//   let username = target.value
//   let users = await getSimilarUser(username)
//   if (users.length) {
//     console.log(users);
//     target.setCustomValidity(`The user "${username}" already exists`)
//     return false
//   }
//   target.setCustomValidity('')
//   return true
// }
//
// var usernameInput = document.querySelector('input[name="username"]')
//
// usernameInput.addEventListener('input', async (e)=>{
//   let isValid = await isUserValid(e.target) // optionally, we can re-use the return value if we need to.
//   e.target.reportValidity()
// })


function saveTimeline(){
  var name = document.getElementById('timelineName').value;
  if (name == '') {
    alert('donne un nom a ta timeline fdp')
  }else{
  var http = new XMLHttpRequest();
  //var url = "get_data.php";
  var data = JSON.stringify(arrangement);
  console.log(data);
  var params = "data=" + data + "&title= " + name;
  http.open("POST", "save_timeline.php", true);

  //Send the proper header information along with the request
  http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  http.onreadystatechange = function() {//Call a function when the state changes.
      if(http.readyState == 4 && http.status == 200) {
          alert("c'est enregistré correctement bravo!");
      }
  }
  http.send(params);
}
}

function loadTimelines(){
  var http = new XMLHttpRequest();
  var url = "get_timelines.php";

  http.open("GET", url, true);

  //Send the proper header information along with the request
  http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  http.onreadystatechange = function() {//Call a function when the state changes.
      if(http.readyState == 4 && http.status == 200) {
          parseTimelines(http.responseText);
      }
  }
  http.send();
}

var timelinesLoaded = false;

function parseTimelines(data){
  if (!timelinesLoaded){
  var parsed = JSON.parse(data);
  for (var i = 0; i < parsed.length; i++) {
    var elt = document.createElement('option');
    elt.textContent = parsed[i]['TimelineName'];
    elt.value = parsed[i]['TimelineID'];
    document.getElementById('charger').appendChild(elt);
  }
}
  timelinesLoaded = true;
}

document.getElementById('charger').addEventListener('change', function(){
  console.log(document.getElementById('charger').value);
  var http = new XMLHttpRequest();
  var url = "get_timeline.php";
  var data = JSON.stringify(arrangement);
  var params = "id=" + document.getElementById('charger').value;
  http.open("POST", url, true);

  //Send the proper header information along with the request
  http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  http.onreadystatechange = function() {//Call a function when the state changes.
      if(http.readyState == 4 && http.status == 200) {
        clearTimeline();
          executeTimeline(http.responseText);
      }
  }
  http.send(params);
});

function executeTimeline(data){
  var parsed = JSON.parse(data);
  for (var i = 0; i < parsed.length; i++) {
    console.log(parsed[i]);
    placeSongWithTimecode(parsed[i]['Timecode'], parsed[i]['SoundName']);
  }
}


function testSaver(){
  var http = new XMLHttpRequest();
  var url = "save.php";

  http.open("GET", url, true);

  //Send the proper header information along with the request
  http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  http.onreadystatechange = function() {//Call a function when the state changes.
      if(http.readyState == 4 && http.status == 200) {
          alert(http.responseText);
      }
  }
  http.send();
}
