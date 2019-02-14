let mongoose = require('mongoose');

let Schema = mongoose.Schema;

module.exports = mongoose.model('User', new Schema({
    // id: {
    //     type: Number,
    //     required: 'Nom obligatoire'
    // },
    name: {
        type: String,
        required: 'Prénom obligatoire'
    },
    lastname: {
        type: String,
        required: 'Nom obligatoire'
    },
    mail: {
        type: String,
        required: 'Mail obligatoire'
    },
    password: {
        type: String,
        required: 'Mot de passe obligatoire'
    },
    admin: Boolean,
    createdAt: {
        type: Date,
        default: Date.Now
    },
}));