document.querySelector("button").addEventListener("click", async () => {

const nameInput = document.querySelector("input")
const emailInput = document.querySelectorAll("input")[1]
const messageInput = document.querySelector("textarea")

const name = nameInput.value
const email = emailInput.value
const message = messageInput.value

// validation
if(!name || !email || !message){
alert("Please fill all fields")
return
}

try{

const response = await fetch("http://localhost:5000/api/contact",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({name,email,message})
})

const data = await response.json()

alert(data.message || "Message Sent!")

// clear form fields after sending
nameInput.value = ""
emailInput.value = ""
messageInput.value = ""

}catch(error){

alert("Server Error")

}

})