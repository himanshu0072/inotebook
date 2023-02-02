const mongoose = require('mongoose');

const NotesSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
        unique:true,
    },
    EventTarget:{
        type:String,
        default:"General"
    },
    date:{
        type:Date,
        default: Date.now
    },

});

module.exports= mongoose.model('notes',NotesSchema);