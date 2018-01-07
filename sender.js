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
  var http = new XMLHttpRequest();
  var url = "get_data.php";
  var data = JSON.stringify(arrangement);
  console.log(data);
  var params = "data=" + data;
  http.open("POST", "test.php", true);

  //Send the proper header information along with the request
  http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  http.onreadystatechange = function() {//Call a function when the state changes.
      if(http.readyState == 4 && http.status == 200) {
          alert(http.responseText);
      }
  }
  http.send(params);
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
