const mongoose = require('mongoose');
const Photos = require('./photos');

const userSchema = new mongoose.Schema({
  name: String,
  photos: [Photos.schema]
});

module.exports = mongoose.model('User', userSchema);
