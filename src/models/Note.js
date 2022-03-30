const{Schema, model} = require('mongoose');

new Schema({
    nombre:{
        type: String,
        required: true
    },
    raza: {
        type: String,
        required: true
    },
    
})