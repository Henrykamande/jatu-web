'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSizeSchema = new Schema({
  category: String,
  size: String
});

module.exports = mongoose.model('ProductSize', ProductSizeSchema);

