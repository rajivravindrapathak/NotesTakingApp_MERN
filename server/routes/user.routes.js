const { Router } = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const {UserModel} = require("../models/User.model") 

const userController = Router()

// signup api to send user data in database
userController.post("/signup", async (req, res) => {
    const { username, email, password } = req.body

    const isUser = await UserModel.findOne({ email })
    if(isUser) {
        res.send({ "msg" : "user already exits please login", isUser })
    } else {
        bcrypt.hash(password, 5, async function(err, hash) {
            if(err) {
                res.send({ msg: "sometning went wrong, plz try again later", err })
            } 
            else {
                const user = new UserModel({  
                    username,  
                    email,
                    password: hash
                })
                try {          
                    await user.save()
                    res.status(200).send({ msg: "signUp Successful", user })
                } catch (err) {
                    console.log(err)
                    res.send({ msg: "something went wrong, plz try again", err })
                }
            }

        });
    }   
  
})     

// login api 
userController.post("/login", async (req, res) => {
    // debugger
    const { email, password } = req.body
   
    const user = await UserModel.findOne({email})
    const hash = user.password
    bcrypt.compare(password, hash, function(err, result) {
        if(err) {
            res.status(500).send({ msg: "sometning went wrong, plz try again later", err })
        }
        if(result) {
            const token = jwt.sign({ userId: user._id}, process.env.JWT_SECRET)
            res.json({ msg: "Login successful", token, userId: user._id })
        } else {
            res.status(401).send({ msg: "Invalid crdential" })
        }
    });
})

// forgot password api using nodemailer
userController.post("/forgot-password", async (req, res) => {
    const { email } = req.body
    const forgotuser = await UserModel.findOne({ email })
    if(!forgotuser) {
        return res.status(404).send({ msg: "user not exists"})
    }
})

module.exports = { userController }