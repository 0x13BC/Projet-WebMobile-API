let mongoose = require('mongoose');
let User = require('./users');

let Schema = mongoose.Schema;

module.exports = mongoose.model('Comment', new Schema({
    id: {
        type: Number,
        required: 'id obligatoire'
    },
    createdAt: {
        type: Date, //yyyy-mm-dd
        default: Date.Now
    },
    user: {
        type: Number,
        required: 'User obligatoire'
    },
    description: {
        type: String,
        required: 'description obligatoire'
    }
}));