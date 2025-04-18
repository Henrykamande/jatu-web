'use strict'

var _index = require('../../app/products/index.js')

var express = require('express')
var router = express.Router()

router.get('/products', _index.findAll)
router.get('/products/select/:category', _index.categoryProducts)
router.get('/products/search/:keyword', _index.search)
router.get('/products/fetch/:url', _index.selected_product)
router.get('/products/select/subs/:category/:subcategory', _index.subcategoryProducts)
router.get('/offer/products', _index.offerProducts)
router.get('/featured/products', _index.featuredProducts)
router.post('/selected/product', _index.selected_product)
router.post('/products/update/images', _index.update_images)
router.post('/products/edit/offer', _index.edit_offer)
router.post('/products/edit/featured', _index.edit_featured)
router.post('/product/insert', _index.create_product)
router.post('/product/edit', _index.updateProduct)
router.post('/product/qty/edit', _index.updateQty)
// filter products by sub categories
router.get('/products/filter/:category/:subs', _index.filterProducts)

module.exports = router
