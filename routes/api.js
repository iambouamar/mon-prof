const express = require('express');
const router = express.Router();

router.get('/profs', function(req, res) {
    res.send({type: 'GET'});
});

router.post('/profs', function(req, res) {
    res.send({type: 'POST'});
});

router.put('/profs/:id', function(req, res) {
    res.send({type: 'PUT'});
});

router.delete('/profs/:id', function(req, res) {
    res.send({type: 'DELETE'});
});

module.exports = router;