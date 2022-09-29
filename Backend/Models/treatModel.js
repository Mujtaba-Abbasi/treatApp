const mongoose = require('mongoose');

const {Schema} = mongoose;

const treatSchema = new Schema({
    title:{
        required: true,
        type: String,
    },
    description:{
        type: String,
        required: true,
    },
    host:{
        type:String,
        required: true,
    },
    status:{
        type: String,
        required: true
    }
},{timestamps: true})

const treatModel = mongoose.model('Treat', treatSchema);

module.exports = treatModel;