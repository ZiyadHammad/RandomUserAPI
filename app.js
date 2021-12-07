let randomURL = "https://randomuser.me/api/?results=1"

let randomButton = document.querySelector("#random")
let userList = document.querySelector(".user-list")


const randomUser = async () => {
  let response = await axios.get(randomURL)
  // console.log(response.data.results[0])
  let userData = response.data.results[0]
  console.log(userData)

  let userDiv = document.createElement("div")
  userList.append(userDiv)

  let firstName = document.createElement("h3")
  firstName.textContent = (userData.name.first)
  userDiv.append(firstName)

  let lastName = document.createElement("h3")
  lastName.textContent = userData.name.last
  userDiv.append(lastName)

  let userImg = document.createElement(`img`)
  userImg.setAttribute(`src`, userData.picture.thumbnail)
  userDiv.append(userImg)

  


}
randomUser()