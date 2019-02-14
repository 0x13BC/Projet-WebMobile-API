let mongoose = require('mongoose');
let User = require('./users');
let Comment = require('./comments');

let Schema = mongoose.Schema;



module.exports = mongoose.model('News', new Schema({
    id: {
        type: Number,
        required: 'id obligatoire'
    },
    
    title: {
        type: String,
        required: 'title obligatoire'
    },
    description: {
        type: String,
        required: 'Description obligatoire'
    },
    createdAt: {
        type: Date,//yyyy-mm-dd
        required: 'Date obligatoire'
    },
    author: {
        type: User,
        required: 'Auteur obligatoire'
    },
    Comments: [Comment]
}));