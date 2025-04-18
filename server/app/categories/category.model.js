'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
  name: String,
  url: String,
  image_path: String,
  horizontal_banner: String,
  vertical_banner: String,
  horizontal_text: String,
  horizontal_url: String,
  vertical_url: String,
  button_text: String,
  status: { type: String, default: 'active' },
  featured:{ type: String, default: 'no' },
  icon: String
}, { collection: 'categories' });

module.exports = mongoose.model('Category', CategorySchema);

