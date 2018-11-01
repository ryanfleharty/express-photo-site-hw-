const mongoose = require('mongoose');
const Users = require('./users');

const photoSchema = new mongoose.Schema({
  name: String,
  url: String,
  description: String,
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'Users'}
});

module.exports = mongoose.model("Photo", photoSchema);
