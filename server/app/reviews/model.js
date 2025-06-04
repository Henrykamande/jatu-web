var mongoose = require('mongoose')

var ObjectId = mongoose.Schema.ObjectId

var ReviewSchema = new mongoose.Schema({

  productId: { type: ObjectId, required: true, ref: 'Product' },
  rating: { type: Number, required: true },
  review: { type: String },
  userId: { type: ObjectId, ref: 'User' }

}, { timestamps: true })

module.exports = mongoose.model('Review', ReviewSchema)
