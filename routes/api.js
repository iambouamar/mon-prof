const express = require('express');
const router = express.Router();
const Prof = require('../models/prof');

router.get('/profs', function(req, res, next) {
    res.send({type: 'GET'});
});

router.post('/profs', function(req, res, next) {
    Prof.create(req.body).then(function(prof) {
        res.send(prof);
    }).catch(next);
});

router.put('/profs/:id', function(req, res, next) {
    res.send({type: 'PUT'});
});

router.delete('/profs/:id', function(req, res, next) {
    console.log(req.params.id);
    Prof.findByIdAndRemove({_id: req.params.id}).then(function(prof) {
        res.send(prof);
    });
});

module.exports = router;