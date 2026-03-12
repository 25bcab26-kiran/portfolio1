const express = require("express")
const cors = require("cors")

const db = require("./db")
const contactRoutes = require("./routes/contactRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api",contactRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
console.log("Server running")
})