const mongoose = require('mongoose');
const { Schema } = mongoose;

const tripSchema = new Schema({
  fromPlace: String,
  toPlace: String,
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;
