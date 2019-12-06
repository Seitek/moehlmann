const express = require('express');
const router = express.Router();
const mongoose = require( "mongoose" );
//const passport = require( passport );

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
    Fahrten.find({nutzercode: req.params.code})
        .sort({ date: -1 })
        .then(fahrten => {
            if (!fahrten.ist_abgeschlossen && !fahrten.ist_geloescht) {
                   return res.json(fahrten)
            }
        })
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




module.exports = router;