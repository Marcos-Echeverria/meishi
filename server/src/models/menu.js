const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        requiered: false
    },
    category: {
        type: String,
        requiered: true
    }
});

module.exports = mongoose.model("Menu", MenuSchema)