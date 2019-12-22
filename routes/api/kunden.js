const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
//const passport = require("passport");

// Item model
const Kunden = require('../../models/Kunden');

// @route   GET api/Kunden
// @desc    Get All Kunden
// @access  Public
router.get('/', (req, res) => {
    Kunden.find()
       // .sort({ date: -1 })
        .then(kunden => res.json(kunden));
});

// @route   GET api/kunden
// @desc    Get All Kunden
// @access  Public
router.get('/:id', (req, res) => {
    Kunden.find({_id: req.params.id})
        .sort({ date: -1 })
        .then(kunden => res.json(kunden))
        .catch(err => res.status(404).json({
            message: 'Keinen Kunden mit diesem Code gefunden.'
        }));
});

// @route   POST api/kunden
// @desc    Create A Kunden
// @access  Public
router.post('/', (req, res) => {
    const newKunden = new Kunden({  
        vorname: req.body.vorname,
        nachname: req.body.nachname,
        strasse: req.body.strasse,
        hausnummer: req.body.hausnummer,
        plz: req.body.plz,
        ort: req.body.ort
    });

    newKunden.save().then(kunden => res.json(kunden));
});

// @route   DELETE api/kunden/:id
// @desc    Delete A Kunde
// @access  Public
router.delete('/:id', (req, res) => {
    Kunden.findOne({_id: req.params.id})
        .then(kunden => kunden.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
})




module.exports = router;
