'use strict';

var _index = require('../../app/categories/index.js');

var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

router.get('/categories', _index.findAll);
router.get('/active/categories', _index.findActive);
router.get('/featured/categories', _index.findFeatured);
router.post('/category/insert', _index.create_category);
router.get('/category/subs/:status', _index.findSubs);
router.post('/category/edit', _index.updateCategory);
// router.post('/category/find', _index.findById);

module.exports = router;
