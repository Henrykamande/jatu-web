'use strict'

var mongoose = require('mongoose')
require('mongoose-double')(mongoose);
// var Category = require('../categories/category.model.js')
// var SubCategory = require('../sub_categories/category.model.js')

var Schema = mongoose.Schema
var SchemaTypes = mongoose.Schema.Types;
var ProductSchema = new Schema({
  category: { type: Schema.Types.ObjectId, ref: 'Category', default: null },
  subcategory: { type: Schema.Types.ObjectId, ref: 'SubCategory', default: null },
  category_url: String,
  subcategory_url: String,
  url: String,
  name: String,
  features:[],
  productFeatures: String,
  category_tag: String,
  previous_price: Number,
  unit_price: Number,
  rec_qty: Number,
  desc: String,
  size: { type: SchemaTypes.Double },
  specifications: { type:String, default: '' },
  featured:{type: String, default: 'no'},
  offer:{type: String, default: 'no'},
  cover_image: String,
  other_images: [],
  status: {type: String, default: 'active'},
  stockStatus: { type: String, default: 'inStock' },
  date: Date
}, { collection: 'products' })

module.exports = mongoose.model('Product', ProductSchema)
