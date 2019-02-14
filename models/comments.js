let mongoose = require('mongoose');

//https://mongoosejs.com/docs/populate.html

let Schema = mongoose.Schema;

module.exports = mongoose.model('Comment', new Schema({
    // id: {
    //     type: Number,
    //     required: 'id obligatoire'
    // },
    createdAt: {
        type: Date, //yyyy-mm-dd
        default: Date.Now
    },
    userId: {
        //type: mongoose.Schema.Types.ObjectId, ref: 'User',
        type: String,
        required: 'User obligatoire'
    },
    description: {
        type: String,
        required: 'description obligatoire'
    }
}));