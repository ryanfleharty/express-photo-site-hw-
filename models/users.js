const mongoose = require('mongoose');
const Photo = require('./photos');

const userSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
    unique: true
  },
  photos: [{type: mongoose.Schema.Types.ObjectId, ref: 'Photo'}]
});

module.exports = mongoose.model('User', userSchema);
