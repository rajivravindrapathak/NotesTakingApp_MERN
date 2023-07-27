const { Router } = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const {NoteModel} = require("../models/Note.model") 

const notesController = Router()

// note api for getting data
notesController.get("/notes", async (req, res) => {
    const notes = await NoteModel.find({userId : req.body.userId})
    res.send(notes)
})

// note api for posting data
notesController.post("/notes", async (req, res) => {
    const {heading, note, tag, userId} = req.body;
    const noteData = new NoteModel({
        heading,
        note,
        tag,
        userId
    })
    try {
        await noteData.save()
        res.status(200).send({ message: "noteData created", noteData })
        
    } catch(err) {
        res.status(404).send({ message: "something went wrong" })
    }
})

// note api for deleting specific data 
notesController.delete("/notes/:noteId", async (req, res) => {
    const {noteId} = req.params
    const deleteNote = await NoteModel.findOneAndDelete({_id: noteId, userId: req.body.userId})
    if(deleteNote) {
        res.send("deleted")
    } else {
        res.send("couldn't delete")
    }
})

// note api for updating/editing single data from userinterface and database also 
notesController.patch("/notes/:noteId", async (req, res) => {
    const {noteId} = req.params
    const deleteNote = await NoteModel.findOneAndUpdate({_id: noteId, userId: req.body.userId}, req.body)
    if(deleteNote) {
        res.send("updated")
    } else {
        res.send("couldn't delete")
    }
})
  
module.exports = { notesController }