const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const ExSchema = new Schema({
  slug: {type: String, index: { unique: true }},
  url: {type: String, required: true},
});

module.exports = mongoose.model('Url', ExSchema);
