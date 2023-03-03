const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const {Schema} = mongoose;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },

})

userSchema.statics.login = async function(email, password){

    if(!email || !password){
        throw Error('All fields must have value!')
    }

    const user = await this.findOne({email})
    if(!user){
        throw Error('Not not found!')
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch){
        throw Error('Incorrect Password!')
    }

    return user;
}

//static signup
userSchema.statics.signup = async function (firstName, lastName, email, password) {
    
    if(!validator.isEmail(email)){
        throw Error('Email is invalid!')
    }
    if(!validator.isStrongPassword(password)){
        throw Error("Password isn't strong enough");
    }
    
    const exists = await this.findOne({email})
    if(exists){
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(7);
    const hashPassword = await bcrypt.hash(password, salt);
    
    const user = await this.create({firstName, lastName,email, password : hashPassword});
    return user;
}

const userModel = mongoose.model('User', userSchema)

module.exports = userModel