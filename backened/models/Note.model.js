const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema ({
    Heading: {type: String, required: true},
    Note: {type: String, required: true},
    Tag: {type: String, required: true},
    userId: {type: String, required: true}
})

const NoteModel = mongoose.model("note", noteSchema)

module.exports = { NoteModel }