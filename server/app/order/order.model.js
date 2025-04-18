'use strict';

var mongoose = require('mongoose');
var User = require('../users/user.model.js');
var Product = require('../products/product.model.js');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', default: null },
  name: { type: String },
  phone: { type: String },
  email: { type: String },
  deliveryAddress: { type: String },
  location: { type: String },
  total: { type: Number, default: 0 },
  size: { type: String },
  products: [
    {
      product: { type: Schema.Types.ObjectId, ref: 'Product', default: null },
      productName:  String,
      quantity: Number,
      price: Number
    }
  ],
  orderItems: String,
  orderStatus: {type: String, default: 'pending'},
  wholesaler: { type: Boolean, default: false },
  comments: String,
  placedOn: { type: Date },
  orderDate: { type: String},
  orderNo: { type: String },
  waybillNo: { type: String },
  paymentStatus: { type: String},
  deliveryType: { type: String},
  orderType: { type: String, default: 'website'},
  deliveryDate: { type: Date, default: null },
}, { collection: 'orders' });

module.exports = mongoose.model('Order', OrderSchema);

