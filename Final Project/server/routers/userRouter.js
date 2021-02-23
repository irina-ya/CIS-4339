const express = require('express'),
    userSchema = require('../models/userModel'),
    policySchema = require('../models/policyModel')
    bodyParser = require('body-parser'),
    bcrypt = require('bcryptjs')

router = new express.Router

//Create 
router.post('/register', async (req, res) => {
    
    const newUser = new userSchema(req.body.user)
    newUser.save().then(() => {
        res.send(newUser)
    }).catch((error) => {
        console.log(error)
        res.send(error)
    })
})

//Log in
router.post('/login', async (req, res) => {
    try{
        const user = req.body.user
        const userName = user.username
        const password = user.password
        const foundUser = await userSchema.findOne({username : userName})
        if (!foundUser){
            console.log("no user")
        }
        const isValidPassword = await bcrypt.compare(password, foundUser.password)
        if (!isValidPassword){
            console.log("error")
        }
        const token = await foundUser.generateAuthToken()
        res.send({foundUser, token})
    }catch(error){
        console.log(error)
        res.status(400).send()
    }
})

//Delete Account
router.post('/delAcct', async (req, res) => {
    try{
        const user = req.body.user
        const userName = user.username
        const userEmail = user.email
        const foundUser = await userSchema.findOne({username : userName})
        if (!foundUser){
            console.log("no user")
        }
        if (userEmail == foundUser.email){
            await userSchema.deleteOne({username : userName})
        }
    }catch(error){
        console.log(error)
        res.status(400).send()
    }
})

//Add policy
router.post('/addPolicy', async (req, res) => {
    try {
    console.log(req.body.user)
    const user = req.body.user
    const userName = user.username
    const policy = user.policy

    const addPolicy = await userSchema.update({username : userName}, {$push: {"policies": policy}})
    res.send(addPolicy)
}catch(error){
    console.log(error)
    res.status(400).send()
}
})


//Find all
router.get('/profile/', async (req, res) => {
    try{
    const allUsers = await userSchema.find({})
    res.send(allUsers)
    }catch(error){
        res.status(500).send(error);
    }
})

module.exports = router
