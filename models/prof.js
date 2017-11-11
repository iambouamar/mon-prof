const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    }
}); 

const Prof = mongoose.model('prof', ProfSchema);

module.exports = Prof;  