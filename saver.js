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
