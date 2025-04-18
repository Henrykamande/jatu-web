'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderNoSchema = new Schema({
  orderNo: Number,
  status: { type: String, default: 'active'}
}, { collection: 'order_no' });

module.exports = mongoose.model('OrderNo', OrderNoSchema);


