let mongoose = require('mongoose');

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
        type: User,
        required: 'User obligatoire'
    },
    description: {
        type: String,
        required: 'description obligatoire'
    }
}));