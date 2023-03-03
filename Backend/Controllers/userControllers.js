const User = require('../Models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id)=>{
    return jwt.sign({_id}, process.env.SECRET, {expiresIn : '3d'})
}

const userLogin =async (req, res) =>{
    const {email, password} = req.body

    try {
        const user = User.login(email, password)

        const token = createToken(user._id);

        res.status(201).json({User : user, token});
    } catch (error) {
        res.status(400).json({Error : error.message});
    }
}  

const userSignup =async (req, res) =>{
    const {firstName, lastName, email, password} = req.body
    
    try {
        const user = await User.signup(firstName, lastName, email, password);

        const token = createToken(user._id)
        console.log(token);

        res.status(200).json({email, user, token})
    } catch (error) {
        res.status(400).json({Error: error.message})
    }
}  

module.exports = {
    userLogin,
    userSignup
} 