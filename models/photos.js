const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  name: String,
  url: String,
  description: String
});

module.exports = mongoose.model("Photo", photoSchema);
