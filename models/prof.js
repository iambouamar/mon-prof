const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create geolocation Schema
const GeoSchema = new Schema({
    type: {
        type: String,
        default: 'Point'
    },
    coordinates: {
        type: [Number],
        index: '2dsphere'
    }
});

const ProfSchema = new Schema({
    nom: {
        type: String,
        required: [true, 'Nom field is required']
    },
    matiere: {
        type: String
    },
    disponible: {
        type: Boolean,
        default: false
    },
    geometry: GeoSchema
}); 

const Prof = mongoose.model('prof', ProfSchema);

module.exports = Prof;  