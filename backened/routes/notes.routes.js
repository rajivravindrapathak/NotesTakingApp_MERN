const { Router } = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const {NoteModel} = require("../models/Note.model") 

const notesController = Router()

notesController.get("/", (req, res) => {
    res.send("notes")
})
 
module.exports = { notesController }