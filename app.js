let randomURL = "https://randomuser.me/api/?results=1"

let randomButton = document.querySelector("#random")
let userList = document.querySelector("user-list")


const randomUser = async () => {
  let response = await axios.get(randomURL)
  console.log(response.data.results[0])
}
randomUser()