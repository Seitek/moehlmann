const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const NutzerSchema = new Schema({
    vorname: {
        type: String,
        required: true
    },
    nachname: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    nutzer_deleted: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Item = mongoose.model('nutzer', NutzerSchema, 'nutzer');