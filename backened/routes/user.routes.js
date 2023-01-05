const { Router } = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const {UserModel} = require("../models/User.model") 

const userController = Router()

userController.post("/signup", (req, res) => {
    const { email, password, age } = req.body

    bcrypt.hash(password, 5, async function(err, hash) {
        if(err) {
            res.send("sometning went wrong, plz try again later")
        }
        const user = new UserModel({
            email,
            passwoard: hash,
            age
        })

        try {          
            await user.save()
            res.send("signUp Successful")
        } catch (err) {
            console.log(err)
            res.send("something went wrong, plz try again")
        }
    });

})

userController.post("/login", async (req, res) => {
    const { email, password } = req.body

    const user = await UserModel.findOne({email})
    const hash = user.passwoard
    bcrypt.compare(password, hash, function(err, result) {
        if(err) {
            res.send("sometning went wrong, plz try again later")
        }
        if(result) {
            const token = jwt.sign({ userId: user._id}, process.env.JWT_SECRET)
            res.send({message: "Login successful", token})
        } else {
            res.send("Invalid cedetial")
        }
    });
})
 
module.exports = { userController }