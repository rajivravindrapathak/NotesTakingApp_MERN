const express = require("express")

const {userController} = require("./routes/user.routes")
const {notesController} = require("./routes/notes.routes")

const { connection } = require("./config/db")

const app = express()
const PORT = 8080

app.use(express.json())

app.get("/", (req, res) => {
    res.send("home page")
})

app.use("/user", userController)

app.use("/notes", notesController)

app.listen(PORT, async ()=> {
    try {
        await connection;
        console.log("connected to DB")
    } catch (err) {
        console.log("Error connected to db")
        console.log(err)
    }
    console.log(`listning on PORT ${PORT}`)
})