'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

exports.getAll = getAll
exports.search = search
exports.find = find
exports.findReviews = findReviews
exports.findOneReview = findOneReview
exports.findOne = findOne
exports.findById = findById
exports.create = create
exports.update = update
exports.remove = remove
exports.findInArray = findInArray
exports.findLimited = findLimited
var Model = require('./model.js')

/********************************************
******************** database calls **********/

function getAll () {
  return Model.find({}).populate('category').sort({ date: 'desc' }).exec()
}

function search (query) {
  return Model.find({ 'name': new RegExp(query, 'i') }).exec()
}

function find (query) {
  return Model.find(query).populate('category').sort({ unit_price: 1 }).exec()
}

function findReviews (query) {
  return Model.find(query).populate('userId').exec()
}

function findOneReview (id) {
  return Model.findById(id).populate('userId').exec()
}

function findLimited (query, limit) {
  return Model.find(query).populate('category').limit(limit).sort({ unit_price: 1 }).exec()
}

function findOne (query) {
  return Model.findOne(query).exec()
}

function findById (id) {
  return Model.findById(id).populate('category').exec()
}

function create (_record) {
  var newRecord = new Model(_record)
  return new Promise(function (resolve, reject) {
    newRecord.save(function (err, record) {
      if (err) {
        reject(err)
      }

      resolve(record)
    })
  })
}

function update (record, id) {
  var query = { _id: id }
  var update = record
  var options = { new: true }

  return Model.findOneAndUpdate(query, update, options).exec()
}

function remove (id) {
  return Model.findByIdAndRemove(id).exec()
}

function findInArray (field, item) {
  /* find a record with $item in $field array */
  return Model.find({ field: { '$in': [item] } }).exec()
}
