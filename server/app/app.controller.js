module.exports = function (modelName) {
  const Model = require(`./${modelName}/model.js`)

  return {

    getSome () {
      return false
    },
    search (query) {
      return Model.find(query).limit(6).exec()
    },
    getAll () {
      return Model.find({}).exec()
    },
    find (query, num) {
      return Model.find(query).sort({date: 'desc'}).limit(num).exec()
    },
    findAndPopulate (query, _path) {
      return Model.findOne(query).populate({
        path: _path
      }).exec()
    },
    findHighest (query, filter, limit) {
      return Model.find(query).sort(filter).limit(limit)
    },
    findPaginate (query, {page, limit}) {
      //  const sort = { category: -1, subcategory: 1 }
      const options = {
        page: page,
        limit: limit
      }
      return Model.paginate(query, options)
    },
    findOne (query) {
      return Model.findOne(query).exec()
    },

    findById (id) {
      return Model.findById(id).exec()
    },

    create (_record) {
      let newRecord = new Model(_record)

      return new Promise((resolve, reject) => {
        newRecord.save(function (err, record) {
          if (err) { reject(err) }

          resolve(record)
        })
      })
    },

    update (record, id) {
      const query = { _id: id }
      const update = record
      const options = { new: true }

      return Model.findOneAndUpdate(query, update, options).exec()
    },

    remove (id) {
      return Model.findByIdAndRemove(id).exec()
    },
    findInArray (field, item, limit) {
      //  console.log(field, item, limit)
      /* find a record with $item in $field array */
      return Model.find({ [field]: { '$in': [item] } }).limit(limit).exec()
    }

  }
}
