const express = require("express")
const router = express.Router()

const Contact = require("../models/Contact")

router.post("/contact", async(req,res)=>{

const {name,email,message} = req.body

const newContact = new Contact({name,email,message})

await newContact.save()

res.json({message:"Message saved"})
})

module.exports = router