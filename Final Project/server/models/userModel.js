
const mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator')
const { default: validator } = require('validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    id : { type: String },
    username : { type: String, 
        lowercase: true, 
        unique: true, 
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'], 
        required: true },
    email : { type: String, 
        lowercase: true, 
        unique: true, 
        required: true, 
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Email is invalid!')
            }
        }
    },
    firstName : { type: String },
    lastName : { type: String },
    password :{
        type: String,
        required: true,
        trim: true,
        minlenght: 8,
        validate(value) {
            if (value.toLowerCase().includes('password')){
                throw new Error('Password cannot contain "password"!')
            }
        }
    },
    policies: [{type: String}],
    tokens : [
        {
            token: String            
        }
    ]
});

userSchema.plugin(uniqueValidator, {message: 'is already taken.'});

userSchema.pre("save", async function(next){
    const user = this
    if (user.isModified("password")){
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

userSchema.methods.generateAuthToken = async function(){
    const user = this
    const token = jwt.sign({ _id: user._id, name: user.lastName, email: user.email  }, "secret")
    user.tokens = user.tokens.concat({ token })
    await user.save
    return token
}

const users = mongoose.model('users', userSchema)

module.exports = users;