const express = require('express');
const router = express.Router();
const Prof = require('../models/prof');

router.get('/profs', function(req, res) {
    res.send({type: 'GET'});
});

router.post('/profs', function(req, res) {
    Prof.create(req.body).then(function(prof) {
        res.send(prof);
    });
});

router.put('/profs/:id', function(req, res) {
    res.send({type: 'PUT'});
});

router.delete('/profs/:id', function(req, res) {
    res.send({type: 'DELETE'});
});

module.exports = router;