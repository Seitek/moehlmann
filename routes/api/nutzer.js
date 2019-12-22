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

// @route   GET api/nutzer
// @desc    Get All Nutzer
// @access  Public
router.get('/:id', (req, res) => {
    Nutzer.find({_id: req.params.id})
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


// @route   POST api/fahrten
// @desc    Update A Nutzer
// @access  Public
router.post('/:id', (req, res) => {
    const data = {
        vorname: req.body.vorname,
        nachname: req.body.nachname,
        code: req.body.code,
    }
   Nutzer.findOneAndUpdate({_id: req.params.id}, {$set: data}, {new: true})
   .then( nutzer => res.status(200).json({message: 'OK'}))
   .catch(error => {
    res.status(400).json({message: 'Nutzer nicht gefunden.'})
   });
    
});

// @route   DELETE api/nutzer/:id
// @desc    Delete A Nutzer
// @access  Public
router.delete('/:code', (req, res) => {
    Nutzer.findOne({code: req.params.code})
        .then(nutzer => nutzer.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
})




module.exports = router;
