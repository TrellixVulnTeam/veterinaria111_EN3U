const{Schema, model} = require('mongoose');

const NoteSchema = new Schema({
    nombre:{
        type: String,
        required: true
    },
    raza: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    dueno: {
        type: String,
        required: true
    },
    diagnostico: {
        type: String,
        required: true
    }
    }, 
    {
 timestamps: true
 
})

model.exports = model ('Note', NoteSchema);
