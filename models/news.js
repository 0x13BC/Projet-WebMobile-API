let mongoose = require('mongoose');
//let User = require('./users');

let Schema = mongoose.Schema;

//https://mongoosejs.com/docs/populate.html


module.exports = mongoose.model('News', new Schema({
    // id: {
    //     type: Number,
    //     required: 'id obligatoire'
    // },
    
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
        default: Date.now()
    },
    authorId: {
        //type: mongoose.Schema.Types.ObjectId, ref: 'User',
        type: Number,
        required: 'Auteur obligatoire'
    },
    //Comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
}));