const { Router } = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const {NoteModel} = require("../models/Note.model") 

const notesController = Router()


notesController.get("/", async (req, res) => {
    const notes = await NoteModel.find({userId : req.body.userId})
    res.send(notes)
})

notesController.post("/create", async (req, res) => {
    const {Heading, Note, Tag, userId} = req.body;
    const note = new NoteModel({
        Heading,
        Note,
        Tag,
        userId
    })
    try {
        await note.save()
        res.send("note created")
        
    } catch(err) {
        res.send("something went wrong")
    }
})

notesController.delete("/delete/:noteId", async (req, res) => {
    const {noteId} = req.params
    const deleteNote = await NoteModel.findOneAndDelete({_id: noteId, userId: req.body.userId})
    if(deleteNote) {
        res.send("deleted")
    } else {
        res.send("couldn't delete")
    }
})


notesController.patch("/edit/:noteId", async (req, res) => {
    const {noteId} = req.params
    const deleteNote = await NoteModel.findOneAndUpdate({_id: noteId, userId: req.body.userId}, req.body)
    if(deleteNote) {
        res.send("updated")
    } else {
        res.send("couldn't delete")
    }
})
  
module.exports = { notesController }