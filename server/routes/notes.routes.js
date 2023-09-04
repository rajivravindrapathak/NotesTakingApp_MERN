const { Router } = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const {NoteModel} = require("../models/Note.model") 
// const { authentication } = require("../middlewares/authentication")

const notesController = Router()

// note api for getting data 
notesController.get("/getuser-notes", async (req, res) => {
    debugger;  
    const getnote = await NoteModel.find({ userId : req.body.userId })
    try {
        // const getnote = await NoteModel.find()
        return res.status(200).send({ msg: 'notes get successfully', data: getnote })  
        
    } catch (error) {  
        res.status(404).send({ msg: 'error', error})
    }
})

// note api for posting data
notesController.post("/user-notes", async (req, res) => {
    const {
        // id,
        heading, 
        note, 
        tag, 
        userId   
    } = req.body;
    const newNote = new NoteModel({
        // id,
        heading,
        note,
        tag,
        userId
    })
    try {   
        await newNote.save()
        res.status(200).send({ msg: "newNote created", newNote })
        
    } catch(err) {
        res.status(404).send({ msg: "something went wrong", err })
    }
})

// note api for deleting specific data 
notesController.delete("/notes/:noteId", async (req, res) => {
    const {noteId} = req.params
    const deleteNote = await NoteModel.findOneAndDelete({_id: noteId, userId: req.body.userId})
    if(deleteNote) {
        res.send({ msg: "note deleted", deleteNote })
    } else {
        res.send({ msg: "note couldn't deleted" })
    }
})

// note api for updating/editing single data from userinterface and database also 
notesController.patch("/notes/:noteId", async (req, res) => {
    const {noteId} = req.params
    const updateNote = await NoteModel.findOneAndUpdate({_id: noteId, userId: req.body.userId}, req.body)
    if(updateNote) {
        res.send({ msg: "note updated", updateNote})
    } else {
        res.send({ msg: "note couldn't updated"})
    }
})

module.exports = { notesController }