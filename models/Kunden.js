const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const KundenSchema = new Schema({
    vorname: {
        type: String,
        required: true
    },
    nachname: {
        type: String,
        required: true
    },
    strasse: {
        type: String,
        required: true
    },
    hausnummer: {
        type: String,
        required: true
    },
    plz: {
        type: String,
        required: true
    },
    ort: {
        type: String,
        required: true
    },
    kunden_deleted: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Item = mongoose.model('kunden', KundenSchema, 'kunden');