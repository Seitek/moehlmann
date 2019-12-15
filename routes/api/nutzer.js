const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
//const passport = require("passport");

// Item model
const Nutzer = require('../../models/Nutzer');

// @route   GET api/nutzer
// @desc    Get All Nutzer
// @access  Public
router.get('/', (req, res) => {
    Nutzer.find()
       // .sort({ date: -1 })
        .then(nutzer => res.json(nutzer));
});

// @route   GET api/nutzer
// @desc    Get All Nutzer
// @access  Public
router.get('/:code', (req, res) => {
    Nutzer.find({code: req.params.code})
        .sort({ date: -1 })
        .then(nutzer => res.json(nutzer))
        .catch(err => res.status(404).json({
            message: 'Keinen Nutzer mit diesem Code gefunden.'
        }));
});

// @route   POST api/nutzer
// @desc    Create A Nutzer
// @access  Public
router.post('/', (req, res) => {
    const newNutzer = new Nutzer({  
        vorname: req.body.vorname,
        nachname: req.body.nachname,
        code: req.body.code,
    });

    newNutzer.save().then(nutzer => res.json(nutzer));
});

// @route   DELETE api/nutzer/:id
// @desc    Delete A Nutzer
// @access  Public
router.delete('/:code', (req, res) => {
    Groups.findById(req.params.code)
        .then(nutzer => nutzer.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
})




module.exports = router;
