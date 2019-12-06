const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const FahrtenSchema = new Schema({
    nutzercode:{
        type: String,
        required: true
    },
    auftragnr: {
        type: String,
        required: true
    },
    kundeVorname: {
        type: String,
        required: true
    },
    kundeNachname: {
        type: String,
        required: true
    },
    vonStrasse: {
        type: String,
        required: true
    },
    vonHausnummer: {
        type: String,
        required: true
    },
    vonPlz: {
        type: String,
        required: true
    },
    vonOrt: {
        type: String,
        required: true
    },
    vonUhrzeit: {
        type: String,
        required: true
    },
    nachStrasse: {
        type: String,
        required: true
    },
    nachHausnummer: {
        type: String,
        required: true
    },
    nachPlz: {
        type: String,
        required: true
    },
    nachOrt: {
        type: String,
        required: true
    },
    nachUhrzeit: {
        type: String,
        required: true
    },
    ist_abgeschlossen: {
        type: Boolean,
        default: false
    },
    ist_geloescht: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Item = mongoose.model('fahrten', FahrtenSchema, 'fahrten');

