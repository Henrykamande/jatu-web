'use strict'
const Order = require('../../app/order/index.js')

module.exports = function (app) {
  app.post('/api/users/login', require('../../app/users/index.js').login)
  app.use('/api', require('./categories'))
  app.use('/api', require('./products'))
  app.post('/api/order', Order.order)
  app.get('/api/order/:userId/:status', Order.userOrders)
  app.use('/api', require('./subHeader'))
  app.use('/api', require('./banners'))
  app.use('/api', require('./users'))
  app.use('/api', require('./sizes'))
  app.use('/api/rating', require('../../app/reviews/router.js'))
}
