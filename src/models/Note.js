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
    Edad: {
        type: Number,
        required: true
    },
    Dueño: {
        type: String,
        required: true
    },
    Diagnostico: {
        type: String,
        required: true
    }
    }, 
    {
 timestamps: true
 
})

model.exports = model ('Note', NoteSchema);
