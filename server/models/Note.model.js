const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema ({
    heading: {type: String, required: true},
    note: {type: String, required: true},
    tag: {type: String, required: true},
    userId: {type: String, required: true}
})

const NoteModel = mongoose.model("note", noteSchema)

module.exports = { NoteModel }       