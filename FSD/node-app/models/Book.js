const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String
    }
});

module.exports = mongoose.model('books', BookSchema);