'use strict';

var _index = require('../../app/banners/index.js');

var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

router.post('/banner/insert', _index.create_banner);
router.get('/side/banner/one', _index.side_banner_one);
router.get('/side/banner/two', _index.side_banner_two);
router.get('/slider/banners', _index.slider_banners);
router.get('/banner/main/sec', _index.main_sec_banner);

module.exports = router;
