const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema ({
    heading: {type: String, required: false},
    note: {type: String, required: false},
    tag: {type: String, required: false},
    userId: {type: String, required: false}
})

const NoteModel = mongoose.model("notes", noteSchema)

module.exports = { NoteModel }       