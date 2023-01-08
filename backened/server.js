const express = require("express")
const cors = require("cors")

const {userController} = require("./routes/user.routes")
const {notesController} = require("./routes/notes.routes")

const { connection } = require("./config/db")
const { authentication } = require("./middlewares/authentication")

const app = express()
const PORT = 8080

app.use(express.json())

app.get("/", (req, res) => {
    res.send("home page")
})

app.use(cors())

app.use("/user", userController)
app.use(authentication)
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