const { Schema, model} = require('mongoose');

 const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true 
    },
    description: {
        type: String,
        required: true
    },
    done: Boolean,
    default: false
},
{
    timestamps: true,
    versionKey: false
})

export default model('Task', taskSchema)//?module exports