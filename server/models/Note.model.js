const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema ({
    // id:{type: Number, required: true},
    heading: {type: String, required: true},
    note: {type: String, required: true},
    tag: {type: String, required: true},
    userId: {type: String, required: true}   
})

const NoteModel = mongoose.model("notes", noteSchema)

module.exports = { NoteModel }           