const express = require('express');
const router = express.Router();
const Prof = require('../models/prof');

router.get('/profs', function(req, res, next) {
    Prof.geoNear(
        {type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
        {maxDistance: 100000, spherical: true}
    ).then(function(profs){
        res.send(profs);
    }).catch(next);
});

router.post('/profs', function(req, res, next) {
    Prof.create(req.body).then(function(prof) {
        res.send(prof);
    }).catch(next);
});

router.put('/profs/:id', function(req, res, next) {
    Prof.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Prof.findOne({_id: req.params.id}).then(function(prof){
            res.send(prof);
        });
    });
});

router.delete('/profs/:id', function(req, res, next) {
    Prof.findByIdAndRemove({_id: req.params.id}).then(function(prof) {
        res.send(prof);
    });
});

module.exports = router;