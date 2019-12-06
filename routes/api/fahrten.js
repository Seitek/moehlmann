const express = require('express');
const router = express.Router();
const mongoose = require( "mongoose" );//const passport = require( passport );



// Item model
const Fahrten = require('../../models/Fahrten')

// @route   GET api/fahrten
// @desc    Get All Nutzer
// @access  Public
router.get('/', (req, res) => {
    Fahrten.find()
        .sort({ date: -1 })
        .then(fahrten => res.json(fahrten));
});

// @route   GET api/fahrten/:code
// @desc    Get All Fahrten
// @access  Public
router.get('/:code', (req, res) => {

    let test = 0;
    Fahrten.find({nutzercode: req.params.code, ist_abgeschlossen: false, ist_geloescht: false})
        .sort({ date: -1 })
        .then(fahrten => res.json(fahrten))
        .catch(err => res.status(404).json({
            message: 'Keine Fahrt mit diesem Code gefunden.'
        }));
});

// @route   POST api/fahrten
// @desc    Create A Fahrt
// @access  Public
router.post('/', (req, res) => {
    const newFahrt = new Fahrten({  
        nutzercode: req.body.nutzercode,
        auftragnr: req.body.auftragnr,
        kundeVorname: req.body.kundeVorname,
        kundeNachname: req.body.kundeNachname,
        vonStrasse: req.body.vonStraße,
        vonHausnummer: req.body.vonHausnummer,
        vonPlz: req.body.vonPlz,
        vonOrt: req.body.vonOrt,
        vonUhrzeit: req.body.vonUhrzeit,
        nachStrasse: req.body.nachStraße,
        nachHausnummer: req.body.nachHausnummer,
        nachPlz: req.body.nachPlz,
        nachOrt: req.body.nachOrt,
        nachUhrzeit: req.body.nachUhrzeit,

    });

    newFahrt.save().then(fahrten => res.json(fahrten));
});

// @route   POST api/fahrten
// @desc    Create A Fahrt
// @access  Public
router.post('/:auftragnr', (req, res) => {
    const test = {ist_abgeschlossen: true}
   Fahrten.findOneAndUpdate({auftragnr: req.params.auftragnr}, {$set: test}, {new: true})
   .then( fahrten => res.status(200).json({message: 'OK'}))
   .catch(error => {
    res.status(400).json({message: 'Auftrag nicht gefunden.'})
   });
    
});

// @route   POST api/fahrten
// @desc    Create A Fahrt
// @access  Public
router.post('/abbruch/:auftragnr', (req, res) => {
    const test = {ist_geloescht: true}
   Fahrten.findOneAndUpdate({auftragnr: req.params.auftragnr}, {$set: test}, {new: true})
   .then( fahrten => res.status(200).json({message: 'OK'}))
   .catch(error => {
    res.status(400).json({message: 'Auftrag nicht gefunden.'})
   });
    
});




module.exports = router;